import React, { Suspense } from 'react';
import PhotosPage from './PhotosPage';

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading photos...</div>}>
      <PhotosPage />
    </Suspense>
  );
}
