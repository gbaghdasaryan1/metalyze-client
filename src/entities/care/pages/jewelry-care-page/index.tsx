import Image from 'next/image';
import styles from './style.module.scss';
import Img1 from '@assets/images/care/care-1.jpg';
import Img2 from '@assets/images/care/care-2.jpg';
import Img3 from '@assets/images/care/care-3.jpg';
import Img4 from '@assets/images/care/care-4.jpg';

export default function CarePage() {
  return (
    <div className={styles.carePage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Jewelry Care Guide</h1>
          <p>
            Preserve the beauty and longevity of your fine jewelry with proper
            care
          </p>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.intro}>
          <h2>Caring for Your Investment</h2>
          <p>
            Quality men's jewelry is built to last, but proper care ensures your
            pieces maintain their brilliance and craftsmanship for years to
            come. Follow our expert guidelines to keep your jewelry looking its
            finest.
          </p>
        </section>

        <section className={styles.generalCare}>
          <h2>General Care Tips</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M12 2L2 7l10 5 10-5-10-5z' />
                  <path d='M2 17l10 5 10-5M2 12l10 5 10-5' />
                </svg>
              </div>
              <h3>Remove Before Activities</h3>
              <p>
                Take off jewelry before exercising, swimming, or engaging in
                physical activities to prevent damage.
              </p>
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <circle cx='12' cy='12' r='10' />
                  <path d='M12 6v6l4 2' />
                </svg>
              </div>
              <h3>Put On Last, Take Off First</h3>
              <p>
                Apply cologne, lotion, and hair products before wearing jewelry
                to avoid chemical exposure.
              </p>
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                  <polyline points='14 2 14 8 20 8' />
                </svg>
              </div>
              <h3>Regular Inspection</h3>
              <p>
                Check clasps, prongs, and settings regularly to ensure
                everything is secure and intact.
              </p>
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
                </svg>
              </div>
              <h3>Proper Storage</h3>
              <p>
                Store pieces separately in soft pouches or lined boxes to
                prevent scratching and tangling.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.materialCare}>
          <h2>Material-Specific Care</h2>

          <div className={styles.materialSection}>
            <div className={styles.materialContent}>
              <h3>Gold Jewelry</h3>
              <ul>
                <li>Clean with warm water and mild soap using a soft brush</li>
                <li>Dry thoroughly with a soft, lint-free cloth</li>
                <li>Avoid exposure to chlorine and harsh chemicals</li>
                <li>Polish occasionally with a jewelry polishing cloth</li>
                <li>Store in a fabric-lined box away from other metals</li>
              </ul>
            </div>
            <div className={styles.materialImage}>
              <Image
                src={Img1}
                alt='Gold jewelry care'
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.materialSection}>
            <div className={styles.materialImage}>
              <Image
                src={Img2}
                alt='Silver jewelry care'
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.materialContent}>
              <h3>Silver Jewelry</h3>
              <ul>
                <li>
                  Polish regularly with a silver polishing cloth to prevent
                  tarnish
                </li>
                <li>
                  Clean with silver-specific cleaning solution when needed
                </li>
                <li>Store in anti-tarnish bags or with anti-tarnish strips</li>
                <li>Wear frequently - natural oils help prevent tarnishing</li>
                <li>Remove before swimming or bathing</li>
              </ul>
            </div>
          </div>

          <div className={styles.materialSection}>
            <div className={styles.materialContent}>
              <h3>Stainless Steel</h3>
              <ul>
                <li>Wipe with a damp cloth after each wear</li>
                <li>Use mild soap and water for deeper cleaning</li>
                <li>Dry immediately to prevent water spots</li>
                <li>Highly durable and resistant to tarnish and corrosion</li>
                <li>Can be worn during most activities</li>
              </ul>
            </div>
            <div className={styles.materialImage}>
              <Image
                src={Img3}
                alt='Stainless steel jewelry care'
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.materialSection}>
            <div className={styles.materialImage}>
              <Image
                src={Img4}
                alt='Leather jewelry care'
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.materialContent}>
              <h3>Leather Bracelets</h3>
              <ul>
                <li>Keep dry - remove before washing hands or showering</li>
                <li>Condition occasionally with leather conditioner</li>
                <li>Avoid prolonged sun exposure to prevent fading</li>
                <li>Store flat in a cool, dry place</li>
                <li>Allow to air dry naturally if it gets wet</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.cleaning}>
          <h2>Cleaning Instructions</h2>
          <div className={styles.cleaningSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Prepare Solution</h3>
              <p>
                Mix warm water with a few drops of mild dish soap in a small
                bowl.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Soak Gently</h3>
              <p>
                Place jewelry in the solution and let soak for 5-10 minutes to
                loosen dirt.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Brush Softly</h3>
              <p>
                Use a soft-bristled brush to gently clean crevices and detailed
                areas.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Rinse Thoroughly</h3>
              <p>
                Rinse under lukewarm running water, ensuring all soap is
                removed.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <h3>Dry Completely</h3>
              <p>
                Pat dry with a soft cloth and allow to air dry completely before
                storing.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.avoid}>
          <h2>What to Avoid</h2>
          <div className={styles.avoidGrid}>
            <div className={styles.avoidCard}>
              <h3>Harsh Chemicals</h3>
              <p>
                Bleach, chlorine, and household cleaners can damage metals and
                stones.
              </p>
            </div>
            <div className={styles.avoidCard}>
              <h3>Extreme Temperatures</h3>
              <p>
                Sudden temperature changes can cause stones to crack or settings
                to loosen.
              </p>
            </div>
            <div className={styles.avoidCard}>
              <h3>Abrasive Materials</h3>
              <p>
                Rough surfaces and abrasive cleaners can scratch and damage
                jewelry.
              </p>
            </div>
            <div className={styles.avoidCard}>
              <h3>Prolonged Water Exposure</h3>
              <p>
                Extended contact with water can weaken adhesives and damage
                certain materials.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.professional}>
          <div className={styles.professionalContent}>
            <h2>Professional Maintenance</h2>
            <p>
              While regular at-home care is essential, professional maintenance
              ensures your jewelry remains in optimal condition. We recommend
              having your pieces professionally cleaned and inspected annually.
            </p>
            <h3>Our Services Include:</h3>
            <ul>
              <li>Deep ultrasonic cleaning</li>
              <li>Prong and setting inspection</li>
              <li>Clasp and chain repair</li>
              <li>Professional polishing and refinishing</li>
              <li>Stone tightening and replacement</li>
            </ul>
            <button className={styles.ctaButton}>Schedule Maintenance</button>
          </div>
        </section>
      </div>
    </div>
  );
}
