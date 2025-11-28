import Stripe from "stripe";

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return Response.json(
      { error: "Invalid JSON body received." },
      { status: 400 }
    );
  }

  const { items, discountPercent } = body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return Response.json(
      { error: "No line items provided to Stripe checkout." },
      { status: 400 }
    );
  }

  // ---------- STRIPE INIT ----------
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // ---------- COUPON MAP ----------
  const COUPON_MAP = {
    2: process.env.STRIPE_COUPON_2,
    4: process.env.STRIPE_COUPON_4,
    6: process.env.STRIPE_COUPON_6,
    8: process.env.STRIPE_COUPON_8,
    10: process.env.STRIPE_COUPON_10,
    12: process.env.STRIPE_COUPON_12,
    14: process.env.STRIPE_COUPON_14,
    16: process.env.STRIPE_COUPON_16,
    18: process.env.STRIPE_COUPON_18,
    20: process.env.STRIPE_COUPON_20,
  };

  const finalDiscount = Math.min(discountPercent ?? 0, 20);
  const couponToApply = COUPON_MAP[finalDiscount] || null;

  // ---------- DEBUG LOGS ----------
  console.log("🔥 Stripe Checkout INIT");
  console.log("Items received:", items);
  console.log("Discount %:", discountPercent);
  console.log("Final Discount %:", finalDiscount);
  console.log("Using Coupon:", couponToApply);

  // ---------- BUILD SESSION ----------
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: items,
      discounts: couponToApply
        ? [
            {
              coupon: couponToApply,
            },
          ]
        : [],
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("❌ STRIPE CHECKOUT ERROR:", err);

    return Response.json(
      {
        error: "Stripe Checkout failed.",
        message: err?.message,
        details: err,
      },
      { status: 500 }
    );
  }
}