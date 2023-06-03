'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Photos.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

//TODO: add dots styling

interface Photo {
  url: string;
  alt: string;
  id: string;
}

const Photos = () => {
  const photos: Photo[] = [
    {
      url: '/shrek.jpeg',
      alt: 'Shrek',
      id: '0',
    },
    {
      url: 'shrek_1.jpeg',
      alt: 'Shrek',
      id: '1',
    },
    {
      url: 'shrek_2.jpeg',
      alt: 'Shrek',
      id: '2',
    },
    {
      url: 'shrek_3.jpeg',
      alt: 'Shrek',
      id: '3',
    },
    {
      url: 'shrek_4.jpeg',
      alt: 'Shrek',
      id: '4',
    },
    {
      url: 'shrek_5.jpeg',
      alt: 'Shrek',
      id: '5',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    currentIndex === 0
      ? setCurrentIndex(photos.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const goToNext = useCallback(() => {
    currentIndex === photos.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  }, [currentIndex, photos.length]);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [goToNext]);

  const parentWidth = 500;

  const getBackgroundUrl = (photoIndex: number) => ({
    backgroundImage: `url(${photos[photoIndex].url})`,
    width: `${parentWidth}px`,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.slidesContainer}>
        <div
          className={styles.slider}
          style={{
            width: `${parentWidth * photos.length}px`,
            transform: `translateX(${-currentIndex * 500}px)`,
          }}
        >
          {photos.map((_, photoIndex) => (
            <div
              key={photoIndex}
              className={styles.photo}
              id={photoIndex.toString()}
              style={getBackgroundUrl(photoIndex)}
            ></div>
          ))}
        </div>
      </div>
      <button className={styles.arrowLeft} onClick={goToPrevious}>
        <FontAwesomeIcon icon={faArrowLeft} className='fa-2x' />
      </button>
      <button className={styles.arrowRight} onClick={goToNext}>
        <FontAwesomeIcon icon={faArrowRight} className='fa-2x' />
      </button>
      <div className={styles.dotsContainer}>
        {photos.map((photo, photoIndex) => (
          <button
            className={styles.dot}
            key={photoIndex}
            onClick={() => setCurrentIndex(photoIndex)}
            id={`${photoIndex}`}
          >
            •
          </button>
        ))}
      </div>
    </div>
  );
};

export default Photos;
