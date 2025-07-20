'use client';
import { useState } from 'react';

const departments = ['Engineering', 'Design', 'HR', 'Sales'];
const ratings = [1, 2, 3, 4, 5];

export default function FilterDropdown({ onFilter }) {
  const [selectedDepts, setDepts] = useState([]);
  const [selectedRatings, setRatings] = useState([]);

  const toggleSelection = (type, value) => {
    const updater = type === 'dept' ? setDepts : setRatings;
    const current = type === 'dept' ? selectedDepts : selectedRatings;
    updater(current.includes(value) ? current.filter(v => v !== value) : [...current, value]);
  };

  return (
    <div className="flex gap-4 mt-4">
      <div>
        <label className="font-semibold">Departments</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {departments.map(dep => (
            <button
              key={dep}
              onClick={() => toggleSelection('dept', dep)}
              className={`px-2 py-1 rounded ${
                selectedDepts.includes(dep) ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              {dep}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="font-semibold">Ratings</label>
        <div className="flex gap-2 mt-2">
          {ratings.map(r => (
            <button
              key={r}
              onClick={() => toggleSelection('rating', r)}
              className={`px-2 py-1 rounded ${
                selectedRatings.includes(r) ? 'bg-yellow-400 text-white' : 'bg-gray-100'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => onFilter(selectedDepts, selectedRatings)}
        className="btn mt-6"
      >
        Apply Filters
      </button>
    </div>
  );
}
