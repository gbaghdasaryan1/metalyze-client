import Image from 'next/image';
import styles from './style.module.scss';
import Img1 from '@assets/images/about/jewelry-workshop-artisan.jpg';
import { AboutHeroSection } from '@entities/about/ui/hero-section';
import { OurStory } from '@entities/about/ui/our-story';
import { Craftsmanship } from '@entities/about/ui/craftsmanship';
import { OurValues } from '@entities/about/ui/our-values';
import { Commitment } from '@entities/about/ui/commitment';
import { ExperienceDifference } from '@entities/about/ui/experience-difference';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Brand Story */}
      <OurStory />

      {/* Craftsmanship */}
      <Craftsmanship />

      {/* Values */}
      <OurValues />

      {/* Quality Commitment */}
      <Commitment />
      {/* CTA */}

      <ExperienceDifference />
    </div>
  );
}
