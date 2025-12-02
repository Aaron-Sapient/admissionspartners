// Keep ONLY this function
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

  return Math.min(count, 10); // 10 categories → maximum 20%
}