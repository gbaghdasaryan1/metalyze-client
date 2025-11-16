import { FC } from 'react';
import styles from './style.module.scss';

import Img1 from '@assets/images/mens-chains-gold-silver.webp';
import Img2 from '@assets/images/mens-rings-gold-silver.jpg';
import Img3 from '@assets/images/mens-bracelets-leather-metal.jpg';
import Image from 'next/image';

export const Collections: FC = () => {
  return (
    <section className={styles.collections}>
      <h2 className={styles.sectionTitle}>Featured Collections</h2>
      <div className={styles.collectionGrid}>
        <div className={styles.collectionCard}>
          <Image src={Img1} alt='Chains' />
          <div className={styles.collectionOverlay}>
            <h3>Chains</h3>
            <p>Bold statement pieces and classic links</p>
          </div>
        </div>

        <div className={styles.collectionCard}>
          <Image src={Img2} alt='Rings' />
          <div className={styles.collectionOverlay}>
            <h3>Rings</h3>
            <p>Signet rings, bands, and statement pieces</p>
          </div>
        </div>

        <div className={styles.collectionCard}>
          <Image src={Img3} alt='Bracelets' />
          <div className={styles.collectionOverlay}>
            <h3>Bracelets</h3>
            <p>Leather, metal, and beaded designs</p>
          </div>
        </div>
      </div>
    </section>
  );
};
