"use client";
import { useState } from "react";

export default function BoredActivity() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);

  const getActivity = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://www.boredapi.com/api/activity");
      const data = await res.json();
      setActivity(data.activity);
    } catch (err) {
      setActivity("Oops, couldn't fetch anything fun 😅");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Feeling Bored?</h2>
      <button
        onClick={getActivity}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Get a random activity
      </button>

      {loading && <p className="mt-4">Loading something fun...</p>}

      {activity && !loading && (
        <p className="mt-4 text-lg font-semibold text-green-600">{activity}</p>
      )}
    </div>
  );
}
