import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

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

        // TODO: Implement order fulfillment:
        // 1. Update lead status in Supabase to 'deposit_paid'
        // 2. Send confirmation email to client
        // 3. Notify business owner via Slack/email
        // 4. Create contract/invoice record
        // 5. Add to calendar/scheduling system

        // Example Supabase update (implement when CRM is ready):
        // await supabase
        //   .from('leads')
        //   .update({
        //     status: 'deposit_paid',
        //     stripe_session_id: session.id,
        //     deposit_amount: session.amount_total,
        //     payment_date: new Date().toISOString()
        //   })
        //   .eq('id', session.metadata.lead_id);

        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('⚠️ Checkout session expired:', session.id);

        // TODO: Update lead status to 'checkout_abandoned'
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

        // TODO: Notify customer and offer support
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        console.log('💰 Refund processed:', charge.id);

        // TODO: Update order status and notify relevant parties
        break;
      }

      case 'charge.dispute.created': {
        const dispute = event.data.object as Stripe.Dispute;
        console.error('⚠️ Dispute created:', dispute.id);

        // TODO: Alert business owner immediately
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

/**
 * ✅ SECURITY: Disable body parsing for webhook signature verification
 * Next.js needs the raw body to verify Stripe signatures
 */
export const config = {
  api: {
    bodyParser: false,
  },
};
