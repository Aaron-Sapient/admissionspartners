"use client";

import { Minus, Plus } from "lucide-react";

export default function AddOns({
  selectedPackage,
  extraColleges,
  setExtraColleges,
  getExtraCollegePrice,
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-semibold">
          3
        </div>
        <h2 className="text-lg font-semibold">Application</h2>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Add more colleges beyond your base 5 (max 25).
      </p>

      <div
        className="rounded-lg p-4 flex items-center justify-between"
        style={{ backgroundColor: "#faf9f4", border: "1px solid #d0d0d0" }}
      >
        <div>
          <div className="font-semibold">Extra Colleges</div>
          {selectedPackage && (
            <div className="text-xs text-gray-600">
              ${getExtraCollegePrice()} per school
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setExtraColleges(Math.max(0, extraColleges - 1))}
            className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50"
            style={{ borderColor: "#d0d0d0" }}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center font-semibold">
            {extraColleges}
          </span>
          <button
            onClick={() => setExtraColleges(Math.min(20, extraColleges + 1))}
            className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50"
            style={{ borderColor: "#d0d0d0" }}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}