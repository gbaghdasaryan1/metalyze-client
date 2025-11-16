import { FC } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Img1 from '@assets/images/jewelry-artisan-crafting-mens-ring.jpg';

export const AboutHomeSection: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2>Crafted with Precision</h2>
          <p>
            Each piece in our collection is meticulously crafted for the modern
            man who values quality, style, and authenticity.
          </p>
          <p>
            We believe men's jewelry is more than an accessory—it's a statement
            of character, confidence, and personal style.
          </p>
          <button className={styles.ctaButton}>Our Story</button>
        </div>
        <div className={styles.aboutImage}>
          <Image src={Img1} alt='Craftsmanship' />
        </div>
      </div>
    </section>
  );
};
