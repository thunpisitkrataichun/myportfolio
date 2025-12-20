import React, { useState } from 'react';

interface FilterBarProps {
  onFilterChange?: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const categories = ["ทั้งหมด", "ป๊อป", "ร็อค", "ลูกทุ่ง", "อาร์แอนด์บี", "อินดี้", "แจ๊ส"];
  const [selected, setSelected] = useState("ทั้งหมด");

  const handleSelect = (category: string) => {
    setSelected(category);
    if (onFilterChange) onFilterChange(category);
  };

  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-24 bg-gray-50/50 rounded-3xl p-6 border border-gray-100">
        <h3 className="text-sm font-bold text-gray-900 mb-4 px-2 uppercase tracking-wider">
          ประเภทเพลง
        </h3>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleSelect(category)}
              className={`
                px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 text-left
                ${selected === category 
                  ? "bg-white text-emerald-600 shadow-sm border-emerald-100 border" 
                  : "text-gray-500 hover:bg-white hover:text-gray-900 border border-transparent"}
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;