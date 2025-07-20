'use client';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { enrichUser } from '@/lib/mockData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const departments = ['Engineering', 'Design', 'HR', 'Sales'];

export default function AnalyticsPage() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=20')
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.users.map(enrichUser);

        const departmentStats = departments.reduce((acc, dep) => {
          acc[dep] = { total: 0, count: 0 };
          return acc;
        }, {});

        enriched.forEach((user) => {
          const { department, performance } = user;
          if (departmentStats[department]) {
            departmentStats[department].total += performance;
            departmentStats[department].count += 1;
          }
        });

        const labels = departments;
        const datasetValues = labels.map((dep) => {
          const { total, count } = departmentStats[dep];
          return count === 0 ? 0 : Number((total / count).toFixed(2));
        });

        setChartData({
          labels,
          datasets: [
            {
              label: 'Average Performance Rating',
              data: datasetValues,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderRadius: 6,
            },
          ],
        });
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">📊 Analytics</h2>
      {chartData ? (
        <div className="w-full max-w-3xl h-[300px] relative">
          <Bar
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      ) : (
        <p className="text-gray-500">Loading analytics...</p>
      )}
    </div>
  );
}
