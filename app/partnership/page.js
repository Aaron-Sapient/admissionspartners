"use client";

import React, { useState, useMemo } from "react";

import GradeSelector from "../../components/partnership/GradeSelector.jsx";
import BasePackageSelector from "../../components/partnership/BasePackageSelector.jsx";
import AddOns from "../../components/partnership/AddOns.jsx";
import Mentorship from "../../components/partnership/Mentorship.jsx";
import Coaching from "../../components/partnership/Coaching.jsx";
import CartSidebar from "../../components/partnership/CartSidebar.jsx";

import { PRICE_MAP } from "../../components/partnership/PRICE_MAP.js";
import { calculateDiscountCategories } from "../../components/partnership/useDiscount.js";


// 🟦 COUPON MAP (2% → 20%)
const COUPON_MAP = {
  2: process.env.NEXT_PUBLIC_STRIPE_COUPON_2,
  4: process.env.NEXT_PUBLIC_STRIPE_COUPON_4,
  6: process.env.NEXT_PUBLIC_STRIPE_COUPON_6,
  8: process.env.NEXT_PUBLIC_STRIPE_COUPON_8,
  10: process.env.NEXT_PUBLIC_STRIPE_COUPON_10,
  12: process.env.NEXT_PUBLIC_STRIPE_COUPON_12,
  14: process.env.NEXT_PUBLIC_STRIPE_COUPON_14,
  16: process.env.NEXT_PUBLIC_STRIPE_COUPON_16,
  18: process.env.NEXT_PUBLIC_STRIPE_COUPON_18,
  20: process.env.NEXT_PUBLIC_STRIPE_COUPON_20,

// Referral + auto combos
  5: process.env.NEXT_PUBLIC_STRIPE_COUPON_5,  
  7: process.env.NEXT_PUBLIC_STRIPE_COUPON_7,
  9: process.env.NEXT_PUBLIC_STRIPE_COUPON_9,
  11: process.env.NEXT_PUBLIC_STRIPE_COUPON_11,
  13: process.env.NEXT_PUBLIC_STRIPE_COUPON_13,
  15: process.env.NEXT_PUBLIC_STRIPE_COUPON_15,
  17: process.env.NEXT_PUBLIC_STRIPE_COUPON_17,
  19: process.env.NEXT_PUBLIC_STRIPE_COUPON_19,
};

// ------------------------
// STATIC DISPLAY PRICES (for UI + subtotal)
// ------------------------
const packagePricing = {
  "9th": { essential: 7750, comprehensive: 11500, vip: 18000 },
  "10th": { essential: 6250, comprehensive: 9500, vip: 15000 },
  "11th": { essential: 4750, comprehensive: 7500, vip: 12000 },
};

const originalPackagePricing = {
  "9th": { essential: 8500, comprehensive: 12500, vip: 19500 },
  "10th": { essential: 7000, comprehensive: 10500, vip: 16500 },
  "11th": { essential: 5500, comprehensive: 8500, vip: 13500 },
};

const extraCollegePricing = {
  essential: 500,
  comprehensive: 750,
  vip: 1000,
};

const packages = [
  { id: "essential", label: "Essential", subtitle: "core guidance for motivated self-starters" },
  { id: "comprehensive", label: "Comprehensive", subtitle: "most popular full-support plan" },
  { id: "vip", label: "VIP", subtitle: "our highest-touch, premium-level plan" },
];

const grades = [
  { id: "9th", label: "9th grade", subtitle: "4-year program - (9–12)" },
  { id: "10th", label: "10th grade", subtitle: "3-year program (10–12)" },
  { id: "11th", label: "11th grade", subtitle: "2-year program (11–12)" },
];

export default function PartnershipPage() {
  // ------------- STATE -------------
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // 🔹 ADD THIS LINE HERE
  const [referralValid, setReferralValid] = useState(false);

  const [extraColleges, setExtraColleges] = useState(0);
  const [competitions5, setCompetitions5] = useState(false);
  const [competitions10, setCompetitions10] = useState(false);

  const [internship, setInternship] = useState(0);
  const handleInternshipChange = (val) => {
    const safeVal = Math.max(0, Math.min(3, val));
    setInternship(safeVal);
  };

  const [soloProject, setSoloProject] = useState(0);

  const [groupProject, setGroupProject] = useState(0);
  const handleGroupProjectChange = (val) => {
    const safeVal = Math.max(0, Math.min(5, val));
    setGroupProject(safeVal);
  };

  const [satGroupCourse, setSatGroupCourse] = useState(0);
  const handleSatGroupCourseChange = (val) => {
    const safeVal = Math.max(0, Math.min(3, val));
    setSatGroupCourse(safeVal);
  };

  const [rrSATPopular, setRrSATPopular] = useState(0);
  const [rrSATPremium, setRrSATPremium] = useState(0);

  // --- AP Tutoring Add-Ons ---
  const [seniorAP5, setSeniorAP5] = useState(0);
  const [seniorAP10, setSeniorAP10] = useState(0);
  const [juniorAP5, setJuniorAP5] = useState(0);
  const [juniorAP10, setJuniorAP10] = useState(0);

const handleSeniorAP5 = (checked) => {
  setSeniorAP5(checked ? 1 : 0);
};

const handleSeniorAP10 = (checked) => {
  setSeniorAP10(checked ? 1 : 0);
};

const handleJuniorAP5 = (checked) => {
  setJuniorAP5(checked ? 1 : 0);
};

const handleJuniorAP10 = (checked) => {
  setJuniorAP10(checked ? 1 : 0);
};

 // --- MAX RULES / CUSTOM CHANGE HANDLERS ---

// Solo Passion Project (max 3)
const handleSoloProjectChange = (val) => {
  setSoloProject(Math.min(2, Math.max(0, val)));
};

// Ryan & Ryan Popular (mutually exclusive)
const handleRrPopularChange = (val) => {
  if (val > 0) {
    setRrSATPopular(1);
    setRrSATPremium(0);
  } else {
    setRrSATPopular(0);
  }
};

// Ryan & Ryan Premium (mutually exclusive)
const handleRrPremiumChange = (val) => {
  if (val > 0) {
    setRrSATPremium(1);
    setRrSATPopular(0);
  } else {
    setRrSATPremium(0);
  }
};

// Extra Colleges (max 20)
const handleExtraCollegesChange = (val) => {
  setExtraColleges(Math.min(20, Math.max(0, val)));
};
 
  const [isLoading, setIsLoading] = useState(false);

  // ------------- GRADE / PACKAGE LOGIC -------------
  const handleGradeSelect = (gradeId) => {
    if (selectedGrade === gradeId) {
      setSelectedGrade(null);
      setSelectedPackage(null);
    } else {
      setSelectedGrade(gradeId);
      setSelectedPackage(null);
    }
  };

  

  // ------------- PRICE HELPERS (UI / subtotal) -------------
const getDisplayPrices = () => {
  if (!selectedGrade || !selectedPackage) {
    return { original: 0, discount: 0 };
  }

  return {
    original:
      originalPackagePricing[selectedGrade][selectedPackage] || 0,
    discount:
      packagePricing[selectedGrade][selectedPackage] || 0,
  };
};

const getPackagePrice = () => {
  if (!selectedGrade || !selectedPackage) return 0;
  return packagePricing[selectedGrade][selectedPackage] || 0;
};

  const getPackagePriceForDisplay = (packageId) => {
    if (!selectedGrade) return null;
    return packagePricing[selectedGrade][packageId] ?? null;
  };

const getDisplayPricePair = (packageId) => {
  if (!selectedGrade) return { original: 0, discount: 0 };

  return {
    original: originalPackagePricing[selectedGrade][packageId],
    discount: packagePricing[selectedGrade][packageId],
  };
};

  const getExtraCollegePrice = () => {
    if (!selectedPackage) return 500;
    return extraCollegePricing[selectedPackage] || 500;
  };

  const formatPrice = (price) =>
    `$${Number(price).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

  // ------------- SUBTOTAL (NUMERIC, USD) -------------
const subtotal = useMemo(() => {
  let t = 0;

  t += getPackagePrice();
  t += extraColleges * getExtraCollegePrice();

  // Mentorship prices
  if (competitions5) t += 7500;
  if (competitions10) t += 10000;
  t += internship * 2500;
  t += soloProject * 10000;
  t += groupProject * 5000;

  // Coaching
  t += satGroupCourse * 2500;
  t += rrSATPopular * 5460;
  t += rrSATPremium * 6425;
  t += seniorAP5 * 1225;
  t += seniorAP10 * 1950;
  t += juniorAP5 * 725;
  t += juniorAP10 * 950;

  return t;
}, [
  selectedGrade,
  selectedPackage,
  extraColleges,
  competitions5,
  competitions10,
  internship,
  soloProject,
  groupProject,
  satGroupCourse,
  seniorAP5,
  seniorAP10,
  juniorAP5,
  juniorAP10,
  rrSATPopular,
  rrSATPremium,
]);

  // ------------- DISCOUNT (using useDiscount.js) -------------
  const addOnCategoryCount = useMemo(
    () =>
      calculateDiscountCategories({
        extraColleges,
        competitions5,
        competitions10,
        internship,
        soloProject,
        groupProject,
        satGroupCourse,
        seniorAP5,
        seniorAP10,
        juniorAP5,
        juniorAP10,
        rrSATPopular,
        rrSATPremium,
      }),
    [
      extraColleges,
      competitions5,
      competitions10,
      internship,
      soloProject,
      groupProject,
      satGroupCourse,
      seniorAP5,
      seniorAP10,
      juniorAP5,
      juniorAP10,
      rrSATPopular,
      rrSATPremium,
    ]
  );

 // 1. Base auto-discount: 2% per add-on category
let discountPercent = addOnCategoryCount * 2;

// 2. Add referral discount if valid
if (referralValid) {
  discountPercent += 5;
}

// 3. Cap discount at 20% (or 25% if you prefer)
discountPercent = Math.min(discountPercent, 25);

// 4. Choose the correct Stripe coupon ID
const selectedCoupon =
  discountPercent > 0 ? COUPON_MAP[discountPercent] : null;

// 5. Calculate dollar discount + total
const discountAmount = Math.round((subtotal * discountPercent) / 100);
const total = subtotal - discountAmount;

  // ------------- CHECKOUT HANDLER (Stripe) -------------
  const handleCheckout = async () => {

if (!agreedToTerms) {
  alert("You must agree to the Terms & Conditions before checking out.");
  return;
}

    if (!selectedGrade || !selectedPackage) {
      alert("Please select a grade and package first.");
      return;
    }

    setIsLoading(true);

    const items = [];

    // Base package: uses Stripe Price ID from PRICE_MAP
    const basePriceId =
      PRICE_MAP.base[selectedGrade]?.[selectedPackage] || null;
    if (basePriceId) {
      items.push({ price: basePriceId, quantity: 1 });
    }

    // Extra colleges
    if (extraColleges > 0) {
      const extraPriceId =
        PRICE_MAP.extraCollege?.[selectedPackage] ||
        PRICE_MAP.extraCollege?.default ||
        null;
      if (extraPriceId) {
        items.push({ price: extraPriceId, quantity: extraColleges });
      }
    }

    // Competitions
    if (competitions5 && PRICE_MAP.competitions5) {
      items.push({ price: PRICE_MAP.competitions5, quantity: 1 });
    }
    if (competitions10 && PRICE_MAP.competitions10) {
      items.push({ price: PRICE_MAP.competitions10, quantity: 1 });
    }

    // Internship
    if (internship > 0 && PRICE_MAP.internship) {
      items.push({ price: PRICE_MAP.internship, quantity: internship });
    }

    // Solo Project
    if (soloProject > 0 && PRICE_MAP.soloProject) {
      items.push({ price: PRICE_MAP.soloProject, quantity: soloProject });
    }

    // Group Project (now 0–5 count)
    if (groupProject > 0 && PRICE_MAP.groupProject) {
      items.push({ price: PRICE_MAP.groupProject, quantity: groupProject });
    }

    // AP Tutoring
if (seniorAP5 > 0) {
  items.push({ price: PRICE_MAP.seniorAP5, quantity: seniorAP5 });
}
if (seniorAP10 > 0) {
  items.push({ price: PRICE_MAP.seniorAP10, quantity: seniorAP10 });
}
if (juniorAP5 > 0) {
  items.push({ price: PRICE_MAP.juniorAP5, quantity: juniorAP5 });
}
if (juniorAP10 > 0) {
  items.push({ price: PRICE_MAP.juniorAP10, quantity: juniorAP10 });
}

    // Group SAT Course
    if (satGroupCourse > 0 && PRICE_MAP.satGroup) {
      items.push({ price: PRICE_MAP.satGroup, quantity: satGroupCourse });
    }

    // Ryan & Ryan SAT bundles (checkbox, quantity = 1 if selected)
    if (rrSATPopular > 0 && PRICE_MAP.rrPopular) {
      items.push({ price: PRICE_MAP.rrPopular, quantity: rrSATPopular });
    }
    if (rrSATPremium > 0 && PRICE_MAP.rrPremium) {
      items.push({ price: PRICE_MAP.rrPremium, quantity: rrSATPremium });
    }

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
           selectedCoupon, // route.js will pick correct coupon
        }),
      });

      const data = await res.json();

      if (data?.url) {
        window.open(data.url, "_blank", "noopener,noreferrer");
      } else {
        console.error("Checkout error:", data);
        alert("There was an error creating the checkout session.");
      }
    } catch (err) {
      console.error("Checkout exception:", err);
      alert("Unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  // ------------- RENDER -------------
  return (
    <div
      className="min-h-screen px-4 md:px-8 py-8 md:py-12"
      style={{ backgroundColor: "#faf9f4" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
        {/* LEFT: Builder */}
        <div className="lg:col-span-2 space-y-10">
          <div
            className="rounded-lg p-6 md:p-8"
            style={{
              backgroundColor: "#faf9f4",
              border: "1px solid #d0d0d0",
            }}
          >
            <h1 className="text-3xl font-semibold mb-6">
              Build Your <em>Partnership</em>
            </h1>

            <GradeSelector
              grades={grades}
              selectedGrade={selectedGrade}
              onSelect={handleGradeSelect}
            />

            <BasePackageSelector
              packages={packages}
              selectedGrade={selectedGrade}
              selectedPackage={selectedPackage}
              onSelect={setSelectedPackage}
              getPackagePriceForDisplay={getPackagePriceForDisplay}
              getDisplayPricePair={getDisplayPricePair}
              formatPrice={formatPrice}
            />

            <AddOns
              selectedPackage={selectedPackage}
              extraColleges={extraColleges}
              setExtraColleges={handleExtraCollegesChange}
              getExtraCollegePrice={getExtraCollegePrice}
            />

            <Mentorship
              competitions5={competitions5}
              setCompetitions5={setCompetitions5}
              competitions10={competitions10}
              setCompetitions10={setCompetitions10}
              internship={internship}
              setInternship={handleInternshipChange}
              soloProject={soloProject}
              setSoloProject={handleSoloProjectChange} 
              groupProject={groupProject}
              setGroupProject={handleGroupProjectChange}
            />

            <Coaching
              satGroupCourse={satGroupCourse}
setSatGroupCourse={handleSatGroupCourseChange}
              rrSATPopular={rrSATPopular}
              setRrSATPopular={(checked) => {
                setRrSATPopular(checked ? 1 : 0);
                if (checked) setRrSATPremium(0);
              }}
              rrSATPremium={rrSATPremium}
              setRrSATPremium={(checked) => {
                setRrSATPremium(checked ? 1 : 0);
                if (checked) setRrSATPopular(0);
              }}

               seniorAP5={seniorAP5}
  setSeniorAP5={handleSeniorAP5}

  seniorAP10={seniorAP10}
  setSeniorAP10={handleSeniorAP10}

  juniorAP5={juniorAP5}
  setJuniorAP5={handleJuniorAP5}

  juniorAP10={juniorAP10}
  setJuniorAP10={handleJuniorAP10}

            />
          </div>
        </div>

        {/* RIGHT: Cart */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-8">
            <CartSidebar
  packages={packages}
  selectedPackage={selectedPackage}
  selectedGrade={selectedGrade}
  extraColleges={extraColleges}
  competitions5={competitions5}
  competitions10={competitions10}
  internship={internship}
  soloProject={soloProject}
  groupProject={groupProject}
  satGroupCourse={satGroupCourse}
  seniorAP5={seniorAP5}
  seniorAP10={seniorAP10}
  juniorAP5={juniorAP5}
  juniorAP10={juniorAP10}
  rrSATPopular={rrSATPopular}
  rrSATPremium={rrSATPremium}
  getPackagePrice={getPackagePrice}
  getExtraCollegePrice={getExtraCollegePrice}
  subtotal={subtotal}
  discountAmount={discountAmount}
  discountPercent={discountPercent}
  total={total}
  addOnCategoryCount={addOnCategoryCount}
  formatPrice={formatPrice}
  onCheckout={handleCheckout}
  isLoading={isLoading}
  agreedToTerms={agreedToTerms}
  setAgreedToTerms={setAgreedToTerms}
  referralValid={referralValid}
  setReferralValid={setReferralValid}
/>
          </div>
        </div>
      </div>
    </div>
  );
}