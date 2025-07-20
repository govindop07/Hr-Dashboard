export default function PerformanceBadge({ rating }) {
  const colorMap = {
    1: 'bg-red-500',
    2: 'bg-orange-500',
    3: 'bg-yellow-400',
    4: 'bg-green-500',
    5: 'bg-blue-600',
  };

  return (
    <span className={`px-2 py-1 text-white rounded ${colorMap[rating]}`}>
      {rating}/5 Performance
    </span>
  );
}
