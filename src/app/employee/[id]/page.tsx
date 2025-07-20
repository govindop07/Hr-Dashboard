'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { mockEmployeeDetails } from '@/lib/mockData';
import RatingStars from '@/components/RatingStars';
import PerformanceBadge from '@/components/PerformanceBadge';
import Tabs from '@/components/Tabs';

export default function EmployeePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      const user = mockEmployeeDetails(id);
      setData(user);
    }
  }, [id]);

  if (!data) return <div className="p-6">Loading profile...</div>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
      <p className="text-sm text-gray-500 mb-2">📍 {data.address} | 📞 {data.phone}</p>
      <div className="flex items-center gap-3 mb-4">
        <RatingStars rating={data.performance} />
        <PerformanceBadge rating={data.performance} />
      </div>
      <Tabs data={data} />
    </main>
  );
}
