"use client";

import { Minus, Plus } from "lucide-react";

export default function Mentorship({
  competitions5,
  setCompetitions5,
  competitions10,
  setCompetitions10,
  internship,
  setInternship,
  soloProject,
  setSoloProject,
  groupProject,
  setGroupProject,
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-semibold">
          4
        </div>
        <h2 className="text-lg font-semibold">Mentorship</h2>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Mentorship add-ons are longer-term, project-based guidance that go on
        top of counseling.
      </p>

      <div className="space-y-4">
        {/* 5 & 10 Competitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 5 Competitions */}
          <div
            className="rounded-lg p-4 transition-all"
            style={{
              backgroundColor:
                competitions10 ? "#f3f3f3" : "#faf9f4",
              border: "1px solid #d0d0d0",
              opacity: competitions10 ? 0.6 : 1,
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="font-semibold">5 Competitions</div>
                <div className="text-xs text-gray-600 mb-1">
                  Selection, strategy, &amp; feedback.
                </div>
                <div className="font-semibold">$7,500</div>
              </div>
              <input
                type="checkbox"
                checked={competitions5}
                onChange={(e) => {
                  if (!competitions10) setCompetitions5(e.target.checked);
                }}
                disabled={competitions10}
                className="w-5 h-5 cursor-pointer disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* 10 Competitions */}
          <div
            className="rounded-lg p-4 transition-all"
            style={{
              backgroundColor:
                competitions5 ? "#f3f3f3" : "#faf9f4",
              border: "1px solid #d0d0d0",
              opacity: competitions5 ? 0.6 : 1,
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="font-semibold">10 Competitions</div>
                <div className="text-xs text-gray-600 mb-1">
                  Extended slate over 1–2 years.
                </div>
                <div className="font-semibold">$10,000</div>
              </div>
              <input
                type="checkbox"
                checked={competitions10}
                onChange={(e) => {
                  if (!competitions5) setCompetitions10(e.target.checked);
                }}
                disabled={competitions5}
                className="w-5 h-5 cursor-pointer disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Internship */}
        <CounterRow
          title="Internship & Research Search"
          subtitle="Search, writing, outreach templates, & guidance. Placement not guaranteed."
          priceLabel="$2,500 per year"
          value={internship}
          onChange={setInternship}
        />

        {/* Solo Project */}
        <CounterRow
          title="Solo Passion Project"
          subtitle="Custom project designed from the ground up for one student."
          priceLabel="$10,000 per project"
          value={soloProject}
          onChange={setSoloProject}
        />

       {/* Group Project */}
<CounterRow
  title="Group Project"
  subtitle="Student joins an existing or custom group project; mentorship & execution are shared across the group."
  priceLabel="$5,000 per student"
  value={groupProject}
  onChange={setGroupProject}
/>
      </div>
    </div>
  );
}

function CounterRow({ title, subtitle, priceLabel, value, onChange }) {
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