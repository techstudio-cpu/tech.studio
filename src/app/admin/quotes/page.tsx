'use client';

import { useEffect, useState } from 'react';

export default function QuotesPage() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('/api/quotes')
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/quotes/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setQuotes(quotes.filter((quote: any) => quote.id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Quotes</h1>
      <div className="space-y-4">
        {quotes.map((quote: any) => (
          <div key={quote.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{quote.name}</h2>
            <p className="text-gray-500">{quote.email}</p>
            <p className="font-bold">{quote.service}</p>
            <p>{quote.message}</p>
            <p className="text-sm text-gray-400">{new Date(quote.createdAt).toLocaleString()}</p>
            <div className="mt-4">
              <button
                onClick={() => handleDelete(quote.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
