import { FC } from 'react';
import styles from './style.module.scss';

export const AboutHeroSection: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Crafting Excellence Since 1987</h1>
        <p>Where timeless craftsmanship meets modern masculinity</p>
      </div>
    </section>
  );
};
