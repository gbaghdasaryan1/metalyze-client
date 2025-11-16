import { FC } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import Img1 from '@assets/images/about/jewelry-workshop-artisan.jpg';

export const OurStory: FC = () => {
  return (
    <section className={styles.story}>
      <div className={styles.container}>
        <div className={styles.storyGrid}>
          <div className={styles.storyImage}>
            <Image src={Img1} alt='Master jeweler at work' />
          </div>
          <div className={styles.storyContent}>
            <h2>Our Story</h2>
            <p>
              Founded in the heart of New York City, Lumière began with a simple
              vision: to create jewelry that embodies strength, sophistication,
              and individuality for the modern man.
            </p>
            <p>
              For over three decades, we've been dedicated to the art of fine
              jewelry making, combining traditional techniques with contemporary
              design. Each piece tells a story of dedication, precision, and
              passion.
            </p>
            <p>
              Our master craftsmen bring decades of experience, ensuring every
              ring, chain, and bracelet meets the highest standards of quality
              and artistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
