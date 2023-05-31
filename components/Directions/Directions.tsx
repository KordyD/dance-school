import React from 'react';
import Direction, { DirectionProps } from './Direction';

const Directions = () => {
  const directions: DirectionProps[] = [
    {
      id: '0',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    },
    {
      id: '1',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    },
    {
      id: '2',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    },
    {
      id: '3',
      header: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
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
