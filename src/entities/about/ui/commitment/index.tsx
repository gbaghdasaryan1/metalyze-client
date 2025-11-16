import { FC } from 'react';
import styles from './style.module.scss';

export const Commitment: FC = () => {
  return (
    <section className={styles.commitment}>
      <div className={styles.container}>
        <div className={styles.commitmentContent}>
          <h2>Our Commitment to Excellence</h2>
          <div className={styles.commitmentGrid}>
            <div className={styles.commitmentItem}>
              <h4>Premium Materials</h4>
              <p>
                We use only the finest precious metals and ethically sourced
                gemstones in every piece.
              </p>
            </div>
            <div className={styles.commitmentItem}>
              <h4>Lifetime Warranty</h4>
              <p>
                Every piece comes with a lifetime warranty against manufacturing
                defects.
              </p>
            </div>
            <div className={styles.commitmentItem}>
              <h4>Expert Craftsmanship</h4>
              <p>
                Our master jewelers bring over 30 years of combined experience
                to every creation.
              </p>
            </div>
            <div className={styles.commitmentItem}>
              <h4>Personalized Service</h4>
              <p>
                From custom designs to repairs, we provide dedicated support for
                every customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
