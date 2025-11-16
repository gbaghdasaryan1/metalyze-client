'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.scss';
import useCartStore from '@entities/cart/model/store';
import { useRouter } from 'next/router';

export const Navigation = () => {
  const itemCount = useCartStore((state) => state.getCount());
  const navigation = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          Lumière
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div className={styles.actions}>
          <Link href='/cart' className={styles.cartButton}>
            Cart ({itemCount})
          </Link>

          <button
            className={styles.burgerButton}
            onClick={toggleMobileMenu}
            aria-label='Toggle menu'
          >
            <span className={isMobileMenuOpen ? styles.burgerOpen : ''}></span>
            <span className={isMobileMenuOpen ? styles.burgerOpen : ''}></span>
            <span className={isMobileMenuOpen ? styles.burgerOpen : ''}></span>
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <ul className={styles.mobileNavLinks}>
          <li>
            <Link href='/' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/products' onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link href='/about' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu} />
      )}
    </nav>
  );
};
