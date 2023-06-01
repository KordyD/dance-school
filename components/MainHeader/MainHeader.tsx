import Image from 'next/image';
import shrek from '@/public/shrek.jpeg';
import styles from './MainHeader.module.scss';

const MainHeader = () => {
  return (
    <div className={styles.wrapper}>

      <Image className={styles.mainImage} style={{objectFit: 'cover'}} src={shrek} alt='shrek' fill />

      <div className={styles.textWrapper}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

      <button>Lorem ipsum dolor sit amet.</button>
      
    </div>
  );
};

export default MainHeader;
