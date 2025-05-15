// src/app/breed/[slug].js
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BreedImages() {
  const { slug } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    fetch(`https://dog.ceo/api/breed/${slug}/images`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.message.slice(0, 10)); // Show top 10 images
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="p-4 text-xl">Loading images...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize">Images of {slug}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${slug} dog`}
            className="w-full h-48 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
