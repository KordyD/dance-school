import React from 'react';
import Direction, { DirectionProps } from './Direction/Direction';
import shrek from '@/public/shrek.jpeg'

const Directions = () => {
  const directions: DirectionProps[] = [
    {
      id: '0',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      image: shrek,
    },
    {
      id: '1',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      image: shrek,
    },
    {
      id: '2',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      image: shrek,
    },
    {
      id: '3',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      image: shrek,
    },
    {
      id: '4',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      image: shrek,
    },
    {
      id: '5',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      image: shrek,
    },
    {
      id: '6',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      image: shrek,
    },
  ];
  return (
    <div>
      {directions.map((item) => (
        <Direction
          header={item.header}
          text={item.text}
          image={item.image}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Directions;
