import { useState } from 'react';
import FeedbackForm from './FeedbackForm';

export default function Tabs({ data }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <div className="flex gap-3 mb-4">
        {['overview', 'projects', 'feedback'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize px-3 py-1 rounded ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {activeTab === 'overview' && (
          <>
            <p className="mb-2">{data.bio}</p>
            <h4 className="font-semibold mt-4 mb-2">Past Performance History:</h4>
            <ul className="list-disc ml-6">
              {data.history.map((entry, i) => (
                <li key={i}>
                  {entry.year}: {entry.rating}/5
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === 'projects' && (
          <ul className="list-disc ml-6">
            {data.projects.map((project, i) => (
              <li key={i}>{project}</li>
            ))}
          </ul>
        )}

        {activeTab === 'feedback' && <FeedbackForm userId={data.id} />}
      </div>
    </>
  );
}
