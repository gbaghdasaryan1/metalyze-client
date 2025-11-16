import Link from 'next/link';
import styles from './style.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <h3 className={styles.logo}>Lumière</h3>
            <p className={styles.tagline}>
              Timeless elegance crafted for the modern gentleman
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href='/products'>Products</Link>
              </li>

              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className={styles.links}>
            <h4>Customer Service</h4>
            <ul>
              <li>
                <Link href='/shipping'>Shipping Info</Link>
              </li>
              <li>
                <Link href='/returns'>Returns</Link>
              </li>
              <li>
                <Link href='/faq'>FAQ</Link>
              </li>
              <li>
                <Link href='/care'>Jewelry Care</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className={styles.social}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
                </svg>
              </a>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                </svg>
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
                </svg>
              </a>
              <a
                href='https://pinterest.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Pinterest'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10' />
                  <path d='M8.5 14.5c.5 2 2 3.5 4.5 3.5 3.5 0 5.5-2.5 5.5-6 0-3-2-5.5-5.5-5.5-3 0-5.5 2-5.5 5 0 1.5.5 2.5 1.5 3' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} Lumière Jewelry. All rights
            reserved.
          </p>
          <div className={styles.legal}>
            <Link href='/privacy'>Privacy Policy</Link>
            <Link href='/terms'>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
