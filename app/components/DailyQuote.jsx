'use client';

import { useEffect, useState } from 'react';

export default function DailyQuote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch('/api/zenquote');
        const data = await res.json();
        setQuote(data[0]);
      } catch (err) {
        console.error('Failed to load quote', err);
      }
    };

    fetchQuote();
  }, []);

  if (!quote) return <p>Loading quote...</p>;

  return (
    <div style={{
      padding: '20px',
      borderRadius: '20px',
      background: '#7471a4dd',
      border: '1px solid #ddd',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.05)',
      marginTop: '30px'
    }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'white' }}>🧘‍♂️ Quote of the Day</h2>
      <p style={{ fontStyle: 'italic', color: 'white' }}>"{quote.q}"</p>
      <p style={{ fontWeight: 'bold', marginTop: '10px', textIndent: '20px', color: 'white', }}>– {quote.a}</p>
    </div>
  );
}
