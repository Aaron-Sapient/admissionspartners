export function calculateDiscountCategories(state) {
  let count = 0;

  if (state.extraColleges > 0) count++;
  if (state.competitions5 || state.competitions10) count++;
  if (state.internship > 0) count++;
  if (state.soloProject > 0) count++;
  if (state.groupProject) count++;
  if (state.satGroupCourse > 0) count++;
  if (state.seniorAP5 > 0 || state.seniorAP10 > 0) count++;
  if (state.juniorAP5 > 0 || state.juniorAP10 > 0) count++;
  if (state.rrSATPopular > 0) count++;
  if (state.rrSATPremium > 0) count++;

  return Math.min(count, 10); // max = 10 * 2% = 20%
}

export function buildStripeDiscountArray(categoryCount) {
  return Array.from({ length: categoryCount }, () => ({
    coupon: process.env.STRIPE_COUPON_2_PERCENT,
  }));
}