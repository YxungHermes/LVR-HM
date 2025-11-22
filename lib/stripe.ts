import Stripe from 'stripe';

// Initialize Stripe with your secret key (server-side only)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.warn('⚠️ STRIPE_SECRET_KEY not configured. Payment features will be disabled.');
}

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2024-11-20.acacia',
    })
  : null;

/**
 * Create a Stripe Payment Link for a wedding film package
 */
export async function createPaymentLink({
  amount,
  packageName,
  clientName,
  weddingDate,
  leadId,
}: {
  amount: number; // in dollars (e.g., 2500 for $2,500)
  packageName: string; // "Wedding Day Films", "Elopement", etc.
  clientName: string;
  weddingDate?: string;
  leadId?: string;
}): Promise<{ url: string; id: string } | null> {
  if (!stripe) {
    console.error('Stripe is not configured');
    return null;
  }

  try {
    // Create a product for this booking
    const product = await stripe.products.create({
      name: `${packageName} - ${clientName}`,
      description: weddingDate
        ? `Wedding film package for ${weddingDate}`
        : 'Wedding film package deposit',
      metadata: {
        lead_id: leadId || '',
        package_name: packageName,
        client_name: clientName,
      },
    });

    // Create a price for the deposit (50% down payment)
    const depositAmount = Math.floor(amount * 0.5 * 100); // Convert to cents
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: depositAmount,
      currency: 'usd',
    });

    // Create a payment link
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      after_completion: {
        type: 'redirect',
        redirect: {
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/booking/success`,
        },
      },
      metadata: {
        lead_id: leadId || '',
        package_name: packageName,
        client_name: clientName,
        is_deposit: 'true',
        total_amount: amount.toString(),
      },
    });

    return {
      url: paymentLink.url,
      id: paymentLink.id,
    };
  } catch (error) {
    console.error('Error creating payment link:', error);
    return null;
  }
}

/**
 * Create a checkout session for immediate payment
 */
export async function createCheckoutSession({
  amount,
  packageName,
  clientEmail,
  clientName,
  successUrl,
  cancelUrl,
  leadId,
}: {
  amount: number;
  packageName: string;
  clientEmail: string;
  clientName: string;
  successUrl: string;
  cancelUrl: string;
  leadId?: string;
}): Promise<{ sessionId: string; url: string } | null> {
  if (!stripe) {
    console.error('Stripe is not configured');
    return null;
  }

  try {
    // Create a checkout session for 50% deposit
    const depositAmount = Math.floor(amount * 0.5 * 100); // Convert to cents

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${packageName} - Deposit (50%)`,
              description: `Secure your date with ${clientName}`,
              metadata: {
                lead_id: leadId || '',
                package_name: packageName,
              },
            },
            unit_amount: depositAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: clientEmail,
      metadata: {
        lead_id: leadId || '',
        package_name: packageName,
        client_name: clientName,
        is_deposit: 'true',
        total_amount: amount.toString(),
      },
    });

    return {
      sessionId: session.id,
      url: session.url || '',
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return null;
  }
}

/**
 * Retrieve payment details
 */
export async function getPaymentDetails(paymentIntentId: string) {
  if (!stripe) return null;

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return paymentIntent;
  } catch (error) {
    console.error('Error retrieving payment:', error);
    return null;
  }
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
