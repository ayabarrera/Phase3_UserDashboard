"use client";
import { useState } from "react";

export default function BoredActivity() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);

  const getActivity = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
      const data = await res.json();
      setActivity(data.text); // 'text' contains the random fact
    } catch (err) {
      setActivity("Oops, couldn't fetch a fact 😅");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-8">Want to learn a random fact?</h2>
      <button
        onClick={getActivity}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Get fact
      </button>

      {loading && <p className="mt-4">Loading something fun...</p>}

      {activity && !loading && (
        <p className="mt-4 text-lg font-semibold text-green-600">{activity}</p>
      )}
    </div>
  );
}
