'use client';
import { useBookmarks } from '@/hooks/useBookmarks';
import RatingStars from '@/components/RatingStars';
import PerformanceBadge from '@/components/PerformanceBadge';

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bookmarked Employees</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-500">You have not bookmarked anyone yet.</p>
      ) : (
        <ul className="space-y-4">
          {bookmarks.map((user) => (
            <li
              key={user.id}
              className="border p-4 rounded-lg shadow-sm bg-white dark:bg-gray-900"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-lg font-semibold">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <PerformanceBadge rating={user.performance} />
              </div>

              <div className="flex items-center justify-between mt-2">
                <RatingStars rating={user.performance} />
                <div className="flex gap-2">
                  <button
                    onClick={() => removeBookmark(user.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() =>
                      alert(`${user.firstName} has been promoted 🎉`)
                    }
                    className="px-3 py-1 bg-green-600 text-white rounded"
                  >
                    Promote
                  </button>
                  <button
                    onClick={() =>
                      alert(`${user.firstName} assigned to new project 🚀`)
                    }
                    className="px-3 py-1 bg-blue-600 text-white rounded"
                  >
                    Assign to Project
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
