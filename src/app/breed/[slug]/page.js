'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function BreedImages() {
  const { slug } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${slug.toLowerCase()}/images`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.message); 
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize">{slug} Images</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`${slug} image`} 
            className="w-full h-48 object-cover rounded-xl shadow"/>
        ))}
      </div>
    </div>
  );
}
