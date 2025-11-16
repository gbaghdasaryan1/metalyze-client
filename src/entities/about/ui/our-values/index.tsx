import { FC } from 'react';
import styles from './style.module.scss';

export const OurValues: FC = () => {
  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <h2>Our Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>⚡</div>
            <h3>Quality First</h3>
            <p>
              We never compromise on materials or craftsmanship. Every piece is
              made to last a lifetime.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🎯</div>
            <h3>Authenticity</h3>
            <p>
              Our designs celebrate genuine masculinity and individual
              expression without pretense.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🌍</div>
            <h3>Sustainability</h3>
            <p>
              We source materials responsibly and maintain ethical practices
              throughout our supply chain.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🤝</div>
            <h3>Integrity</h3>
            <p>
              Transparency and honesty guide every interaction with our
              customers and partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
