import { useRouter } from 'next/navigation';
import { useBookmarks } from '@/hooks/useBookmarks';

export default function UserCard({ user }) {
  const router = useRouter();
  const { addBookmark } = useBookmarks();

  const handleBookmark = () => {
    addBookmark(user);
    alert(`${user.firstName} bookmarked!`);
  };

  const handleView = () => {
    router.push(`/employee/${user.id}`);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h3 className="text-lg font-bold">{user.firstName} {user.lastName}</h3>
      <p className="text-sm text-gray-500">{user.email}</p>
      <p className="text-sm">{user.age} • {user.department}</p>

      <div className="my-2">⭐ {user.performance}/5</div>

      <div className="flex gap-2">
        <button onClick={handleView} className="btn">View</button>
        <button onClick={handleBookmark} className="btn">Bookmark</button>
        <button onClick={() => alert('Promote triggered!')} className="btn">Promote</button>
      </div>
    </div>
  );
}
