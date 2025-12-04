"use client";

import React, { useState } from "react";

export default function CartSidebar({
  packages,
  selectedPackage,
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
  getPackagePrice,
  getExtraCollegePrice,
  subtotal,
  discountAmount,
  discountPercent,
  total,
  addOnCategoryCount,
  formatPrice,
  onCheckout,
  isLoading,
  agreedToTerms,
  setAgreedToTerms,
  referralValid,
  setReferralValid,

}) {
  // 🔹 Hooks must be inside the component body
  const [referralCode, setReferralCode] = useState("");
  const [referralError, setReferralError] = useState("");

  const validateReferral = () => {
    const validCodes = ["referral25", "apfriend", "choice5"]; // whatever codes you want

    const code = referralCode.trim().toLowerCase();

    if (validCodes.includes(code)) {
      setReferralValid(true);
      setReferralError("");
    } else {
      setReferralValid(false);
      setReferralError("Invalid code.");
    }
  };

  const selectedPackageLabel =
    selectedPackage &&
    packages.find((p) => p.id === selectedPackage)?.label;

  const showCart = !!selectedPackage;

  return (
    <div
      className="rounded-lg p-6"
      style={{
        backgroundColor: "#faf9f4",
        border: "1px solid #d0d0d0",
      }}
    >
      <h3 className="text-xl font-semibold mb-6">
        Your <em>Partnership</em>
      </h3>

      {showCart ? (
        <>
          <div className="space-y-4 mb-6 text-sm">
            {/* Package */}
            <Section title="Package">
              <LineItem
                label={selectedPackageLabel || ""}
                value={formatPrice(getPackagePrice())}
              />
            </Section>

            {/* Application */}
            {extraColleges > 0 && (
              <Section title="Application">
                <LineItem
                  label={`Extra Colleges (${extraColleges})`}
                  value={formatPrice(
                    extraColleges * getExtraCollegePrice()
                  )}
                />
              </Section>
            )}

            {/* Mentorship */}
            {(competitions5 ||
              competitions10 ||
              internship > 0 ||
              soloProject > 0 ||
              groupProject > 0) && (
              <Section title="Mentorship">
                {competitions5 && (
                  <LineItem label="5 Competitions" value={formatPrice(7500)} />
                )}
                {competitions10 && (
                  <LineItem
                    label="10 Competitions"
                    value={formatPrice(10000)}
                  />
                )}
                {internship > 0 && (
                  <LineItem
                    label={`Internship Search (${internship})`}
                    value={formatPrice(internship * 2500)}
                  />
                )}
                {soloProject > 0 && (
                  <LineItem
                    label={`Solo Passion Project (${soloProject})`}
                    value={formatPrice(soloProject * 10000)}
                  />
                )}
                {groupProject > 0 && (
                  <LineItem
                    label={`Group Project (${groupProject})`}
                    value={formatPrice(groupProject * 5000)}
                  />
                )}
              </Section>
            )}

            {/* Coaching */}
            {(satGroupCourse > 0 ||
              seniorAP5 > 0 ||
              seniorAP10 > 0 ||
              juniorAP5 > 0 ||
              juniorAP10 > 0 ||
              rrSATPopular > 0 ||
              rrSATPremium > 0) && (
              <Section title="Coaching">
                {satGroupCourse > 0 && (
                  <LineItem
                    label={`Group SAT Course (${satGroupCourse})`}
                    value={formatPrice(satGroupCourse * 2500)}
                  />
                )}
                {seniorAP5 > 0 && (
                  <LineItem
                    label={`Senior AP (5 hrs) x ${seniorAP5}`}
                    value={formatPrice(seniorAP5 * 1225)}
                  />
                )}
                {seniorAP10 > 0 && (
                  <LineItem
                    label={`Senior AP (10 hrs) x ${seniorAP10}`}
                    value={formatPrice(seniorAP10 * 1950)}
                  />
                )}
                {juniorAP5 > 0 && (
                  <LineItem
                    label={`Junior AP (5 hrs) x ${juniorAP5}`}
                    value={formatPrice(juniorAP5 * 725)}
                  />
                )}
                {juniorAP10 > 0 && (
                  <LineItem
                    label={`Junior AP (10 hrs) x ${juniorAP10}`}
                    value={formatPrice(juniorAP10 * 950)}
                  />
                )}
                {rrSATPopular > 0 && (
                  <LineItem
                    label={`R&R SAT Popular (${rrSATPopular})`}
                    value={formatPrice(rrSATPopular * 5460)}
                  />
                )}
                {rrSATPremium > 0 && (
                  <LineItem
                    label={`R&R SAT Premium (${rrSATPremium})`}
                    value={formatPrice(rrSATPremium * 6425)}
                  />
                )}
              </Section>
            )}

            {/* Discount Code */}
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-1">
                Discount Code
              </label>

              <input
                type="text"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    validateReferral();
                  }
                }}
                placeholder="Enter discount code"
                className="border rounded px-3 py-2 w-full"
              />

              {referralError && (
                <p className="text-red-500 text-sm mt-1">
                  {referralError}
                </p>
              )}

              {referralValid && (
                <p className="text-green-600 text-sm mt-1">
                  Discount code applied!
                </p>
              )}
            </div>

            {/* Subtotal */}
            <div className="pt-4 border-t border-gray-300">
              <div className="flex justify-between">
                <span className="font-semibold">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
            </div>

            {/* Discount */}
            {discountPercent > 0 && (
              <div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>
                    {addOnCategoryCount} add-on
                    {addOnCategoryCount > 1 ? "s" : ""} eligible
                  </span>
                  <span>-{discountPercent}%</span>
                </div>
                <div className="flex justify-between text-sm text-green-700">
                  <span>Discount</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              </div>
            )}

            {/* Total */}
            <div className="pt-4 border-t border-gray-300">
              <div className="flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold">{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="w-5 h-5 cursor-pointer"
            />
            <label className="text-sm text-gray-700 leading-snug cursor-pointer">
              I agree to the{" "}
              <a
                href="/terms"
                className="underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </label>
          </div>

          <button
            onClick={onCheckout}
            disabled={!selectedPackage || isLoading || !agreedToTerms}
            className="w-full py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: "#444",
              color: "#fff",
            }}
          >
            {isLoading ? "Processing..." : "Check Out"}
          </button>
        </>
      ) : (
        <p className="text-sm text-gray-600">
          Select a grade and base package to begin building your partnership.
        </p>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="pt-4 border-t border-gray-300">
      <div className="text-base font-semibold mb-1">{title}</div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function LineItem({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-700">{label}</span>
      <span>{value}</span>
    </div>
  );
}