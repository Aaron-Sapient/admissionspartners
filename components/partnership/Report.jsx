"use client";

import React, { useState } from "react";

export default function Report({
  selectedGrade,
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
  discountPercent,
  addOnCategoryCount,
  formatPrice,
}) {
  const [showReport, setShowReport] = useState(false);

  // ------------------------
  // Pricing data
  // ------------------------
  const packagePricing = {
    "9th": { essential: 7750, comprehensive: 11500, vip: 18000 },
    "10th": { essential: 6250, comprehensive: 9500, vip: 15000 },
    "11th": { essential: 4750, comprehensive: 7500, vip: 12000 },
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

  // ------------------------
  // Calculate subtotal per package tier
  // ------------------------
  const calculateSubtotal = (tier) => {
    let t = 0;

    // Base + extra colleges
    t += packagePricing[selectedGrade][tier];
    t += extraColleges * extraCollegePricing[tier];

    // Mentorship
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
  };

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setShowReport((v) => !v)}
        className="w-full py-2 rounded-lg font-semibold border border-gray-400 hover:bg-gray-100"
      >
        Generate Options
      </button>

      {showReport && (
        <div className="mt-4 p-4 border rounded bg-gray-50 space-y-6">
          {packages.map((pkg, index) => {
            const subtotal = calculateSubtotal(pkg.id);
            const discountAmount = discountPercent > 0 ? Math.round(subtotal * (discountPercent / 100)) : 0;
            const total = subtotal - discountAmount;

            return (
              <div key={pkg.id}>
                {/* Option title */}
                <div className="font-bold text-lg">
                  {`Option ${index + 1}: ${selectedGrade} ${pkg.label}`}
                </div>

                {/* Itemized list */}
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>{`${pkg.label}: ${formatPrice(packagePricing[selectedGrade][pkg.id])}`}</li>
                  {extraColleges > 0 && (
                    <li>{`Extra Colleges (${extraColleges}): ${formatPrice(extraColleges * extraCollegePricing[pkg.id])}`}</li>
                  )}
                  {competitions5 && <li>{`Competitions: 5 (${formatPrice(7500)})`}</li>}
                  {competitions10 && <li>{`Competitions: 10 (${formatPrice(10000)})`}</li>}
                  {soloProject > 0 && <li>{`Solo Passion Project (${soloProject}): ${formatPrice(soloProject * 10000)}`}</li>}
                  {groupProject > 0 && <li>{`Group Project (${groupProject}): ${formatPrice(groupProject * 5000)}`}</li>}
                  {internship > 0 && <li>{`Internship and Research Search (${internship}): ${formatPrice(internship * 2500)}`}</li>}
                  {satGroupCourse > 0 && <li>{`Group SAT Course (${satGroupCourse}): ${formatPrice(satGroupCourse * 2500)}`}</li>}
                  {seniorAP5 > 0 && <li>{`Senior AP (5 hrs) x ${seniorAP5}: ${formatPrice(seniorAP5 * 1225)}`}</li>}
                  {seniorAP10 > 0 && <li>{`Senior AP (10 hrs) x ${seniorAP10}: ${formatPrice(seniorAP10 * 1950)}`}</li>}
                  {juniorAP5 > 0 && <li>{`Junior AP (5 hrs) x ${juniorAP5}: ${formatPrice(juniorAP5 * 725)}`}</li>}
                  {juniorAP10 > 0 && <li>{`Junior AP (10 hrs) x ${juniorAP10}: ${formatPrice(juniorAP10 * 950)}`}</li>}
                  {rrSATPopular > 0 && <li>{`R&R SAT Popular (${rrSATPopular}): ${formatPrice(rrSATPopular * 5460)}`}</li>}
                  {rrSATPremium > 0 && <li>{`R&R SAT Premium (${rrSATPremium}): ${formatPrice(rrSATPremium * 6425)}`}</li>}
                </ul>

                {/* Totals */}
                <div className="mt-2">
                  <div className="font-semibold text-blue-700">
                    Total after all discounts: {formatPrice(total)}
                  </div>
                  <div className="text-red-600">
                    Discount applied: {formatPrice(discountAmount)}
                  </div>
                  <p className="text-sm mt-1">
                    {`All applicable discounts have already been applied to the proposal, including package and add-on discounts across `}
                    <span className="font-bold text-red-600">{addOnCategoryCount}</span>
                    {` eligible ${addOnCategoryCount === 1 ? "add-on" : "add-ons"}.`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}