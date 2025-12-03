"use client";

export default function GradeSelector({ grades, selectedGrade, onSelect }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-semibold">
          1
        </div>
        <h2 className="text-lg font-semibold">What grade is your student?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {grades.map((grade) => (
          <button
            key={grade.id}
            onClick={() => onSelect(grade.id)}
            className={`p-6 border rounded-lg text-center transition-all ${
              selectedGrade === grade.id
                ? "border-black bg-[#faf9f4]"
                : "border-gray-300 hover:border-gray-400"
            }`}
            style={{ borderWidth: 1 }}
          >
            <div className="font-semibold mb-1">{grade.label}</div>
            <div className="text-xs text-gray-600">{grade.subtitle}</div>
          </button>
        ))}
      </div>
    </div>
  );
}