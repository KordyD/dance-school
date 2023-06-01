import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import styles from './Direction.module.scss';

export interface DirectionProps {
  id: string;
  header: string;
  text: string;
  image: StaticImageData;
}

const Direction: FC<DirectionProps> = ({ header, text, image }) => {
  return (
    <div className={styles.card}>
      <h4>{header}</h4>
      <p>{text}</p>
      <Image
        src={image}
        alt={header}
        style={{ objectFit: 'cover', zIndex: '-1' }}
        fill
      />
    </div>
  );
};

export default Direction;
