import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const { items, selectedCoupon } = body;

    // Determine origin (local or Vercel)
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    console.log("🔥 Stripe Checkout INIT");
    console.log("Items received:", items);
    console.log("Using Coupon:", selectedCoupon);
    console.log("Origin:", origin);

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      allow_promotion_codes: true,
      line_items: items,
      discounts: selectedCoupon ? [{ coupon: selectedCoupon }] : [],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("❌ STRIPE CHECKOUT ERROR:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}