"use client";

export default function BasePackageSelector({
  packages,
  selectedGrade,
  selectedPackage,
  onSelect,
  getPackagePriceForDisplay,
  getDisplayPricePair,   // <-- comes from page.js
  formatPrice,
}) {
  return (
    <div className="mb-8">
      {/* Row containing step number + heading only */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-semibold">
          2
        </div>
        <h2 className="text-lg font-semibold">
          Choose your{" "}
          <a
            href="https://www.admissions.partners/packages"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            base counseling package
          </a>
        </h2>
      </div>

      {/* Discount note BELOW heading */}
<p className="text-gray-800 text-center mb-4">
  🍂 <em>Late Fall Start discount applied</em>
</p>

      {/* Responsive grid — 1 column on mobile, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {packages.map((pkg) => {
          const pair = selectedGrade ? getDisplayPricePair(pkg.id) : null;

          return (
            <button
              key={pkg.id}
              onClick={() =>
                onSelect(selectedPackage === pkg.id ? null : pkg.id)
              }
              className={`p-6 border rounded-lg text-center transition-all w-full ${
                selectedPackage === pkg.id
                  ? "border-black bg-[#faf9f4]"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              style={{ borderWidth: 1 }}
            >
              {/* Package Name */}
              <div className="font-semibold mb-1 text-sm sm:text-base break-words text-center">
                {pkg.label}
              </div>

              {/* Subtitle */}
              {pkg.subtitle && (
                <div className="text-xs text-gray-600 mb-2">
                  {pkg.subtitle}
                </div>
              )}

              {/* Price Display */}
              {pair && (
                <div className="text-sm font-semibold mt-2">
                  {pair.original > pair.discount ? (
                    <>
                      <span className="line-through text-gray-500 mr-2">
                        {formatPrice(pair.original)}
                      </span>
                      <span className="font-bold text-black">
                        {formatPrice(pair.discount)}
                      </span>
                    </>
                  ) : (
                    <span>{formatPrice(pair.discount)}</span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}