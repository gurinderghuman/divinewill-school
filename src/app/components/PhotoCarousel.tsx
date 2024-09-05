'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PhotoCarousel.module.css';

const PhotoCarousel: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    // Fetch photos from Wikimedia Commons
    fetch('https://commons.wikimedia.org/w/api.php?action=query&generator=random&grnnamespace=6&prop=imageinfo&iiprop=url&format=json&origin=*&grnlimit=10')
      .then(response => response.json())
      .then(data => {
        const fetchedPhotos = Object.values(data.query.pages).map((page: any) => page.imageinfo[0].url);
        setPhotos(fetchedPhotos);
      })
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [photos]);

  if (photos.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.carouselContainer}>
      <Image
        src={photos[currentPhotoIndex]}
        alt={`Carousel photo ${currentPhotoIndex + 1}`}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default PhotoCarousel;