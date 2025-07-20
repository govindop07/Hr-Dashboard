'use client';
import { useState } from 'react';

const departments = ['Engineering', 'Design', 'HR', 'Sales'];
const ratings = [1, 2, 3, 4, 5];

export default function SearchFilter({ users, onUpdate }) {
  const [query, setQuery] = useState('');
  const [selectedDepts, setSelectedDepts] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    applyFilters(value, selectedDepts, selectedRatings);
  };

  const toggleDept = (dept) => {
    const updated = selectedDepts.includes(dept)
      ? selectedDepts.filter((d) => d !== dept)
      : [...selectedDepts, dept];
    setSelectedDepts(updated);
    applyFilters(query, updated, selectedRatings);
  };

  const toggleRating = (rating) => {
    const updated = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating];
    setSelectedRatings(updated);
    applyFilters(query, selectedDepts, updated);
  };

  const applyFilters = (searchQuery, deptList, ratingList) => {
    let filtered = [...users];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter((user) =>
        user.firstName?.toLowerCase().includes(q) ||
        user.lastName?.toLowerCase().includes(q) ||
        user.email?.toLowerCase().includes(q) ||
        user.department?.toLowerCase().includes(q)
      );
    }

    if (deptList.length > 0) {
      filtered = filtered.filter((user) =>
        deptList.includes(user.department)
      );
    }

    if (ratingList.length > 0) {
      filtered = filtered.filter((user) =>
        ratingList.includes(user.performance)
      );
    }

    onUpdate(filtered);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search by name, email, or department..."
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="flex flex-wrap gap-4">
        <div>
          <h4 className="font-semibold mb-1">Departments:</h4>
          <div className="flex gap-2 flex-wrap">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => toggleDept(dept)}
                className={`px-2 py-1 rounded ${
                  selectedDepts.includes(dept)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-1">Ratings:</h4>
          <div className="flex gap-2">
            {ratings.map((r) => (
              <button
                key={r}
                onClick={() => toggleRating(r)}
                className={`px-2 py-1 rounded ${
                  selectedRatings.includes(r)
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
