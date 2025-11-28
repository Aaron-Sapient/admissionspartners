export const PRICE_MAP = {
  base: {
    "9th": {
      essential: process.env.NEXT_PUBLIC_PRICE_9TH_ESSENTIAL,
      comprehensive: process.env.NEXT_PUBLIC_PRICE_9TH_COMPREHENSIVE,
      vip: process.env.NEXT_PUBLIC_PRICE_9TH_VIP,
    },
    "10th": {
      essential: process.env.NEXT_PUBLIC_PRICE_10TH_ESSENTIAL,
      comprehensive: process.env.NEXT_PUBLIC_PRICE_10TH_COMPREHENSIVE,
      vip: process.env.NEXT_PUBLIC_PRICE_10TH_VIP,
    },
    "11th": {
      essential: process.env.NEXT_PUBLIC_PRICE_11TH_ESSENTIAL,
      comprehensive: process.env.NEXT_PUBLIC_PRICE_11TH_COMPREHENSIVE,
      vip: process.env.NEXT_PUBLIC_PRICE_11TH_VIP,
    },
  },

  extraCollege: {
    essential: process.env.NEXT_PUBLIC_PRICE_EXTRA_COLLEGE_ESSENTIAL,
    comprehensive: process.env.NEXT_PUBLIC_PRICE_EXTRA_COLLEGE_COMPREHENSIVE,
    vip: process.env.NEXT_PUBLIC_PRICE_EXTRA_COLLEGE_VIP,
  },

  competitions5: process.env.NEXT_PUBLIC_PRICE_5_COMPETITIONS,
  competitions10: process.env.NEXT_PUBLIC_PRICE_10_COMPETITIONS,

  internship: process.env.NEXT_PUBLIC_PRICE_INTERN_AND_RESEARCH,
  soloProject: process.env.NEXT_PUBLIC_PRICE_SOLO_PROJECT,
  groupProject: process.env.NEXT_PUBLIC_PRICE_GROUP_PROJECT,

  satGroup: process.env.NEXT_PUBLIC_PRICE_GROUP_SAT_COURSE,

  seniorAP5: process.env.NEXT_PUBLIC_PRICE_SENIOR_AP_5HRS,
  seniorAP10: process.env.NEXT_PUBLIC_PRICE_SENIOR_AP_10HRS,

  juniorAP5: process.env.NEXT_PUBLIC_PRICE_JR_AP_5HRS,
  juniorAP10: process.env.NEXT_PUBLIC_PRICE_JR_AP_10HRS,

  rrPopular: process.env.NEXT_PUBLIC_PRICE_RR_SAT_POPULAR_COMBO,
  rrPremium: process.env.NEXT_PUBLIC_PRICE_RR_SAT_PREMIUM_COMBO,
};