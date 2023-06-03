import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '@/public/logo.png';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons';

// TODO: position sticky

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} alt='logo' height={120} />
      <div>
        <div className={styles.contacts}>
          <a href='tel:+79532606874' className={styles.number}>
            +7 (953) 260-68-74
          </a>
          <a href='#' className={styles.vk}>
            <FontAwesomeIcon icon={faVk} />
          </a>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='#' className={styles.links}>
                Главная
              </Link>
            </li>
            <li>
              <Link href='#' className={styles.links}>
                Акции
              </Link>
            </li>
            <li>
              <Link href='#' className={styles.links}>
                Услуги
              </Link>
            </li>
            <li>
              <Link href='#' className={styles.links}>
                Фото
              </Link>
            </li>
            <li>
              <Link href='#' className={styles.links}>
                Педагоги
              </Link>
            </li>
            <li>
              <Link href='#' className={styles.links}>
                Отзывы
              </Link>
            </li>
            <li>
              <Link href='#' className={styles.links}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
