'use client';
import { useState } from 'react';

export default function FeedbackForm({ userId }) {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === '') return;
    // Optionally send to API
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter feedback..."
        className="w-full p-2 border rounded"
        rows={4}
        required
      />
      <button type="submit" className="btn">Submit</button>
      {submitted && <p className="text-green-600">✅ Feedback submitted!</p>}
    </form>
  );
}
