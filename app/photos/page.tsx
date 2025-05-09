'use client';

import React from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';

export default function PhotosPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const photos = [
    { src: '/images/cheese_bread.jpeg', alt: 'cheese bread', caption:'Micro Bakery' },
    { src: '/images/french_toast.jpeg', alt: 'french toast', caption:'June Coffee' },
    { src: '/images/pies.jpeg', alt: 'pies', caption:'Elijah Pies' },
    { src: '/images/pizza.jpeg', alt: 'pizza', caption:'Folk Yard' },
    { src: '/images/tarts.jpeg', alt: 'tarts', caption:"Lola's Cafe" },
    { src: '/images/cheesecake.jpeg', alt: 'cheesecake', caption:"Lola's Cafe" },
    { src: '/images/turkish_breakfast.jpeg', alt: 'turkish breakfast', caption:'Glasshouse'},
  ];

  const photosPerPage = 4;
  const totalPages = Math.ceil(photos.length / photosPerPage);

  const pageParam = searchParams.get('page');
  const currentPage = Math.max(1, Math.min(Number(pageParam) || 1, totalPages));
  const startIndex = (currentPage - 1) * photosPerPage;
  const selectedPhotos = photos.slice(startIndex, startIndex + photosPerPage);

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`/photos?${params.toString()}`);
  };

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">My Favourite Food!</h2>
      <p className="mb-4">
          Outside of lab, I love visiting bakeries and dessert shops, trying out new foods!
        </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {selectedPhotos.map((photo) => (
          <div key={photo.alt} className="group relative overflow-hidden rounded shadow-md">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
            <p className="absolute bottom-0 w-full h-10 bg-black/60 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">{photo.caption}</p>

          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
}
