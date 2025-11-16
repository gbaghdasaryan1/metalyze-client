import { FC } from 'react';
import styles from './style.module.scss';
import backgroundImage from '@assets/images/hero-mens-jewelry-background.jpg';

export const Hero: FC = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className={styles.heroContent}>
        <h1>Bold. Refined. Masculine.</h1>
        <p>
          Discover our curated collection of premium men's jewelry, where
          strength meets sophistication
        </p>
        <button className={styles.ctaButton}>Explore Collection</button>
      </div>
    </section>
  );
};
