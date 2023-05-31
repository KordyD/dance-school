import Image, { StaticImageData } from 'next/image';
import React from 'react';
import ShrekImage from '@/public/shrek.jpeg';

interface Photo {
  url: StaticImageData;
  alt: string;
  id: string;
}

const Photos = () => {
  const photos: Photo[] = [
    {
      url: ShrekImage,
      alt: 'Shrek',
      id: '0',
    },
    {
      url: ShrekImage,
      alt: 'Shrek',
      id: '1',
    },
    {
      url: ShrekImage,
      alt: 'Shrek',
      id: '2',
    },
    {
      url: ShrekImage,
      alt: 'Shrek',
      id: '3',
    },
    {
      url: ShrekImage,
      alt: 'Shrek',
      id: '4',
    },
  ];
  return (
    <div>
      {photos.map((item) => (
        <Image src={item.url} key={item.id} alt={item.alt} width={200}/>
      ))}
    </div>
  );
};

export default Photos;
