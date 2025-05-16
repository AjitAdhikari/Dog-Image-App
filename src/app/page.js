'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BreedList() {
  const [breeds, setBreeds] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data.message);
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">List of Breed</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.keys(breeds).map((breed) => (
          <li key={breed}>
            <Link
              href={`/breed/${breed}`}
              className="block p-4 bg-blue-100 hover:bg-blue-300 rounded-xl text-center font-semibold capitalize">
              {breed}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

