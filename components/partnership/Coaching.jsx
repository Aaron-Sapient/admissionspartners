"use client";

import { Minus, Plus } from "lucide-react";

export default function Coaching({
  satGroupCourse,
  setSatGroupCourse,
  rrSATPopular,
  setRrSATPopular,
  rrSATPremium,
  setRrSATPremium,
  seniorAP5,
  setSeniorAP5,
  seniorAP10,
  setSeniorAP10,
  juniorAP5,
  setJuniorAP5,
  juniorAP10,
  setJuniorAP10
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-semibold">
          5
        </div>
        <h2 className="text-lg font-semibold">Coaching</h2>
      </div>

      <div className="space-y-4">
        {/* Group SAT Course */}
        <CounterCard
          title="Group SAT Course"
          subtitle="Weekly two-hour group class with structured curriculum, homework, and practice tests."
          priceLabel="$2,500 per semester"
          value={satGroupCourse}
          onChange={setSatGroupCourse}
        />

 {/* Ryan SAT Popular Combo */}
<div className="border-2 border-gray-200 rounded-lg p-4">
  <div className="flex items-center justify-between">
    <div>
      <div className="font-semibold">Ryan 1:1 SAT Popular Combo</div>
      <div className="text-xs text-gray-600 mb-1">
        Balanced SAT one-on-one prep package with Ryan & his team.
      </div>
      <div className="font-semibold">$5,460</div>
    </div>
    <input
      type="checkbox"
      checked={rrSATPopular > 0}
      onChange={(e) => setRrSATPopular(e.target.checked)}
      className="w-5 h-5 cursor-pointer"
    />
  </div>
</div>

{/* Ryan & Ryan SAT Premium Combo */}
<div className="border-2 border-gray-200 rounded-lg p-4">
  <div className="flex items-center justify-between">
    <div>
      <div className="font-semibold">Ryan 1:1 SAT Premium Combo</div>
      <div className="text-xs text-gray-600 mb-1">
        Ryan's most premium 1:1 SAT experience.
      </div>
      <div className="font-semibold">$6,425</div>
    </div>
    <input
      type="checkbox"
      checked={rrSATPremium > 0}
      onChange={(e) => setRrSATPremium(e.target.checked)}
      className="w-5 h-5 cursor-pointer"
    />
  </div>
</div>
    {/* Senior AP Tutor (5 hrs) */}
<div className="border-2 border-gray-200 rounded-lg p-4">
  <div className="flex items-center justify-between">
    <div>
      <div className="font-semibold">Senior AP Tutor (5 hrs)</div>
      <div className="text-xs text-gray-600 mb-1">1:1 AP tutoring with senior instructor</div>
      <div className="font-semibold">$1,225</div>
    </div>
    <input
      type="checkbox"
      checked={seniorAP5 > 0}
      onChange={(e) => setSeniorAP5(e.target.checked)}
      className="w-5 h-5 cursor-pointer"
    />
  </div>
</div>

{/* Senior AP Tutor (10 hrs) */}
<div className="border-2 border-gray-200 rounded-lg p-4">
  <div className="flex items-center justify-between">
    <div>
      <div className="font-semibold">Senior AP Tutor (10 hrs)</div>
      <div className="text-xs text-gray-600 mb-1">Extended premium AP tutoring package</div>
      <div className="font-semibold">$1,950</div>
    </div>
    <input
      type="checkbox"
      checked={seniorAP10 > 0}
      onChange={(e) => setSeniorAP10(e.target.checked)}
      className="w-5 h-5 cursor-pointer"
    />
  </div>
</div>

{/* Junior AP Tutor (5 hrs) */}
<div className="border-2 border-gray-200 rounded-lg p-4">
  <div className="flex items-center justify-between">
    <div>
      <div className="font-semibold">Junior AP Tutor (5 hrs)</div>
      <div className="text-xs text-gray-600 mb-1">1:1 AP tutoring with junior instructor</div>
      <div className="font-semibold">$725</div>
    </div>
    <input
      type="checkbox"
      checked={juniorAP5 > 0}
      onChange={(e) => setJuniorAP5(e.target.checked)}
      className="w-5 h-5 cursor-pointer"
    />
  </div>
</div>

{/* Junior AP Tutor (10 hrs) */}
<div className="border-2 border-gray-200 rounded-lg p-4">
  <div className="flex items-center justify-between">
    <div>
      <div className="font-semibold">Junior AP Tutor (10 hrs)</div>
      <div className="text-xs text-gray-600 mb-1">Extended AP tutoring bundle</div>
      <div className="font-semibold">$950</div>
    </div>
    <input
      type="checkbox"
      checked={juniorAP10 > 0}
      onChange={(e) => setJuniorAP10(e.target.checked)}
      className="w-5 h-5 cursor-pointer"
    />
  </div>
</div>
    
      </div>
    </div>
  );
}

function CounterCard({ title, subtitle, priceLabel, value, onChange }) {
  return (
    <div
      className="rounded-lg p-4"
      style={{ backgroundColor: "#faf9f4", border: "1px solid #d0d0d0" }}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-gray-600 mb-1">{subtitle}</div>
          <div className="font-semibold">{priceLabel}</div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onChange(Math.max(0, value - 1))}
            className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50"
            style={{ borderColor: "#d0d0d0" }}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center font-semibold">{value}</span>
          <button
            onClick={() => onChange(value + 1)}
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