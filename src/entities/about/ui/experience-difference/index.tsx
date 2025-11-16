import { FC } from 'react';
import styles from './style.module.scss';

export const ExperienceDifference: FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <h2>Experience the Difference</h2>
        <p>Discover jewelry that defines your legacy</p>
        <div className={styles.ctaButtons}>
          <a href='/products' className={styles.primaryButton}>
            Shop Collection
          </a>
          <a href='/contact' className={styles.secondaryButton}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};
