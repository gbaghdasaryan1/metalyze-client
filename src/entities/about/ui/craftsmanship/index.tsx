import { FC } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Img1 from '@assets/images/about/jewelry-workshop-artisan.jpg';

export const Craftsmanship: FC = () => {
  return (
    <section className={styles.craftsmanship}>
      <div className={styles.container}>
        <h2>The Art of Craftsmanship</h2>
        <p className={styles.subtitle}>
          Every piece is meticulously handcrafted by master artisans
        </p>

        <div className={styles.craftGrid}>
          <div className={styles.craftCard}>
            <Image src={Img1} alt='Jewelry design process' />
            <h3>Design</h3>
            <p>
              Each design begins with careful consideration of form, function,
              and aesthetic appeal, ensuring timeless elegance.
            </p>
          </div>

          <div className={styles.craftCard}>
            <Image src={Img1} alt='Metalwork process' />
            <h3>Metalwork</h3>
            <p>
              Our artisans shape precious metals with precision, using
              time-honored techniques passed down through generations.
            </p>
          </div>

          <div className={styles.craftCard}>
            <Image src={Img1} alt='Stone setting' />
            <h3>Setting</h3>
            <p>
              Gemstones are carefully selected and set by hand, ensuring perfect
              alignment and lasting security.
            </p>
          </div>

          <div className={styles.craftCard}>
            <Image src={Img1} alt='Finishing process' />
            <h3>Finishing</h3>
            <p>
              The final polish brings out the brilliance of each piece,
              revealing its true character and beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
