"use client";

export default function BasePackageSelector({
  packages,
  selectedGrade,
  selectedPackage,
  onSelect,
  getPackagePriceForDisplay,
  formatPrice,
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-semibold">
          2
        </div>
    <h2 className="text-lg font-semibold">
  Choose your{" "}
  <a
    href="https://www.admissions.partners/#packages"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline hover:text-blue-800 transition"
  >
    base counseling package
  </a>
</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {packages.map((pkg) => {
          const price =
            selectedGrade && getPackagePriceForDisplay(pkg.id, selectedGrade);

          return (
            <button
              key={pkg.id}
              onClick={() =>
                onSelect(selectedPackage === pkg.id ? null : pkg.id)
              }
              className={`p-6 border rounded-lg text-center transition-all ${
                selectedPackage === pkg.id
                  ? "border-black bg-[#faf9f4]"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              style={{ borderWidth: 1 }}
            >
              <div className="font-semibold mb-1 text-sm sm:text-base break-words text-center">
  {pkg.label}
</div>
              {pkg.subtitle && (
                <div className="text-xs text-gray-600 mb-2">
                  {pkg.subtitle}
                </div>
              )}
              {price && (
                <div className="text-sm font-semibold">
                  {formatPrice(price)}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}