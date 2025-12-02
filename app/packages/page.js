// app/packages/page.js
import React from "react";

export const metadata = {
  title: "Admissions Partners | Package Details",
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f4] py-16 px-4 font-[Montserrat]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900 mb-2">
          Partnership Packages
        </h1>
        <p className="text-gray-600">
          Compare the Essential, Comprehensive, and VIP counseling experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        {/* ESSENTIAL */}
        <div className="bg-white border border-gray-300 rounded-xl shadow-md flex flex-col">
          <div className="bg-blue-50 py-6 rounded-t-xl">
            <h2 className="text-xl font-semibold text-gray-900">Essential</h2>
          </div>

          <ul className="px-6 py-6 text-left text-sm text-gray-800 space-y-3 flex-1">
            <li>• Monthly 1:1 meetings</li>
            <li>• Four-year academic course plan</li>
            <li>• Basic activity map</li>
            <li>• Summer recommendation list</li>
            <li>• Monthly accountability</li>
            <li>• College list strategy for 5 schools</li>
            <li>• Common App idea, outline & 1 full review</li>
            <li>• 1 round of comments per supplement</li>
            <li>• Standard turnaround speed</li>
            <li>• Email-based parent communication</li>
            <li>• Waitlist & appeals not included</li>
          </ul>

          <div className="py-6 bg-[#faf9f4] rounded-b-xl text-center">
            <a
              href="/partnership"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              Build your Partnership
            </a>
          </div>
        </div>

        {/* COMPREHENSIVE — MOST POPULAR */}
        <div className="bg-white border border-gray-300 rounded-xl shadow-lg flex flex-col relative scale-105">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
            MOST POPULAR
          </div>

          <div className="bg-blue-600 py-6 rounded-t-xl text-white">
            <h2 className="text-xl font-semibold">Comprehensive</h2>
          </div>

          <ul className="px-6 py-6 text-left text-sm text-gray-900 space-y-3 flex-1">
            <li>• Biweekly 1:1 meetings</li>
            <li>• Full academic & testing plan</li>
            <li>• Leadership development plan</li>
            <li>• Curated summer shortlist</li>
            <li>• Biweekly accountability</li>
            <li>• College list refinement for 5 schools</li>
            <li>• Full Common App development (2–3 drafts)</li>
            <li>• Up to 2 rounds of comments per supplement</li>
            <li>• Faster turnaround speed</li>
            <li>• One parent update per semester</li>
            <li>• Waitlist & appeals not included</li>
          </ul>

          <div className="py-6 bg-[#faf9f4] rounded-b-xl text-center">
            <a
              href="/partnership"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              Build your Partnership
            </a>
          </div>
        </div>

        {/* VIP */}
        <div className="bg-white border border-gray-300 rounded-xl shadow-md flex flex-col">
          <div className="bg-blue-50 py-6 rounded-t-xl">
            <h2 className="text-xl font-semibold text-gray-900">VIP</h2>
          </div>

          <ul className="px-6 py-6 text-left text-sm text-gray-800 space-y-3 flex-1">
            <li>• Weekly 1:1 meetings</li>
            <li>• Competitive strategy for target schools</li>
            <li>• Advanced leadership & project planning</li>
            <li>• Fully customized summer strategy</li>
            <li>• Weekly accountability with task tracking</li>
            <li>• Deeper refinement for 5 schools</li>
            <li>• Common App fully integrated into weekly work</li>
            <li>• Multiple supplement rounds built into meetings</li>
            <li>• Priority turnaround</li>
            <li>• Parent strategy access with flexible check-ins</li>
            <li>• Waitlist & appeals included</li>
          </ul>

          <div className="py-6 bg-[#faf9f4] rounded-b-xl text-center">
            <a
              href="/partnership"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              Build your Partnership
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}