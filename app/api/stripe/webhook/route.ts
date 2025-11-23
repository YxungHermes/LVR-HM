import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabase';
import { sendAutomatedEmail } from '@/lib/email-automation';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

/**
 * Send booking confirmation email after successful payment
 */
async function sendBookingConfirmationEmail(lead: any, session: Stripe.Checkout.Session) {
  try {
    const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : '0';

    const variables = {
      partner1_name: lead.partner1_name || 'there',
      partner2_name: lead.partner2_name || '',
      wedding_date: lead.wedding_date
        ? new Date(lead.wedding_date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : 'your wedding date',
      deposit_amount: amount,
      package_name: session.metadata?.package_name || 'Wedding Film Package',
    };

    const result = await sendAutomatedEmail({
      to: lead.email,
      templateType: 'booking_confirmation',
      variables,
      replyTo: process.env.RESEND_FROM_EMAIL,
      leadId: lead.id,
    });

    if (result.success) {
      console.log(`✅ Booking confirmation email sent to ${lead.email}`);
    } else {
      console.error(`❌ Failed to send confirmation email: ${result.error}`);
    }
  } catch (error) {
    console.error('❌ Error sending booking confirmation:', error);
  }
}

/**
 * ✅ SECURITY: Stripe webhook handler with signature verification
 *
 * This endpoint handles Stripe webhook events to:
 * - Verify payment completion server-side (prevents fraud)
 * - Track successful/failed payments
 * - Handle refunds and disputes
 * - Fulfill orders securely
 *
 * IMPORTANT: This endpoint MUST be excluded from middleware auth checks
 */
export async function POST(request: NextRequest) {
  try {
    // Get the raw body as text (required for signature verification)
    const body = await request.text();

    // Get the Stripe signature from headers
    const headersList = await headers();
    const signature = headersList.get('stripe-signature');

    if (!signature) {
      console.error('⚠️ Missing Stripe signature');
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      );
    }

    if (!webhookSecret) {
      console.error('⚠️ STRIPE_WEBHOOK_SECRET not configured');
      return NextResponse.json(
        { error: 'Webhook not configured' },
        { status: 500 }
      );
    }

    // ✅ SECURITY: Verify the webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('⚠️ Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Handle the event based on type
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        console.log('✅ Payment successful:', {
          sessionId: session.id,
          amount: session.amount_total,
          currency: session.currency,
          customerEmail: session.customer_email,
          metadata: session.metadata,
        });

        // ✅ Order Fulfillment Implementation
        try {
          const leadId = session.metadata?.lead_id;

          if (leadId) {
            // Update lead status to 'booked'
            const { error: updateError } = await supabaseAdmin
              .from('leads')
              .update({
                status: 'booked',
                updated_at: new Date().toISOString(),
              })
              .eq('id', leadId);

            if (updateError) {
              console.error('❌ Failed to update lead status:', updateError);
            } else {
              console.log(`✅ Lead ${leadId} marked as booked`);
            }

            // Log payment activity
            await supabaseAdmin
              .from('lead_activities')
              .insert({
                lead_id: leadId,
                activity_type: 'payment_received',
                description: `Deposit payment received: $${(session.amount_total! / 100).toFixed(2)}`,
                metadata: {
                  stripe_session_id: session.id,
                  amount_cents: session.amount_total,
                  currency: session.currency,
                  payment_status: session.payment_status,
                },
              });

            // Send booking confirmation email
            const { data: lead } = await supabaseAdmin
              .from('leads')
              .select('*')
              .eq('id', leadId)
              .single();

            if (lead) {
              await sendBookingConfirmationEmail(lead, session);
            }
          } else {
            console.warn('⚠️ No lead_id in session metadata - cannot update CRM');
          }
        } catch (fulfillmentError) {
          console.error('❌ Order fulfillment error:', fulfillmentError);
          // Don't throw - we still want to acknowledge the webhook
        }

        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('⚠️ Checkout session expired:', session.id);

        // Log abandoned checkout
        try {
          const leadId = session.metadata?.lead_id;
          if (leadId) {
            await supabaseAdmin
              .from('lead_activities')
              .insert({
                lead_id: leadId,
                activity_type: 'note_added',
                description: 'Checkout session expired without payment',
                metadata: {
                  stripe_session_id: session.id,
                  customer_email: session.customer_email,
                },
              });

            console.log(`✅ Logged abandoned checkout for lead ${leadId}`);
          }
        } catch (error) {
          console.error('❌ Error logging expired session:', error);
        }

        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('✅ Payment intent succeeded:', paymentIntent.id);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error('❌ Payment failed:', {
          id: paymentIntent.id,
          error: paymentIntent.last_payment_error,
        });

        // Send critical alert for failed payments
        try {
          const errorMessage = paymentIntent.last_payment_error?.message || 'Unknown error';
          console.error(`🚨 PAYMENT FAILURE ALERT: ${paymentIntent.id} - ${errorMessage}`);

          // Log the failure in lead activities if we have lead context
          // Note: We'd need to retrieve the session to get the lead_id
          // For now, just log to console for monitoring
        } catch (error) {
          console.error('❌ Error handling payment failure:', error);
        }

        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        console.log('💰 Refund processed:', charge.id);

        // Log refund
        try {
          const refundAmount = charge.amount_refunded / 100;
          console.log(`💰 Refund alert: $${refundAmount.toFixed(2)} for charge ${charge.id}`);

          // In production, send email notification to business owner
        } catch (error) {
          console.error('❌ Error handling refund:', error);
        }

        break;
      }

      case 'charge.dispute.created': {
        const dispute = event.data.object as Stripe.Dispute;
        console.error('⚠️ Dispute created:', dispute.id);

        // Critical alert for disputes
        try {
          console.error(`🚨 CRITICAL: Payment dispute created for ${dispute.charge}`);
          console.error(`   Reason: ${dispute.reason}`);
          console.error(`   Amount: $${(dispute.amount / 100).toFixed(2)}`);
          console.error(`   Status: ${dispute.status}`);

          // In production, send urgent email/Slack notification to business owner
        } catch (error) {
          console.error('❌ Error handling dispute:', error);
        }

        break;
      }

      default:
        console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

// Note: In Next.js App Router, we use request.text() to get the raw body
// No need for the old Pages Router config export
