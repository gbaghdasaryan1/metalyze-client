import Link from 'next/link';
import styles from './style.module.scss';
import { FC } from 'react';
import { Navigation } from '@widgets/navigation';
import useCartStore from '@entities/cart/model/store';
import { useRouter } from 'next/router';

export const Header: FC = () => {
  const navigation = useRouter();
  // subscribe to the computed count so the header updates when cart changes
  const itemCount = useCartStore((state) => state.getCount());

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          Metalyze
        </Link>

        <Navigation />

        <div className={styles.actions}>
          <button>Search</button>
          <button onClick={() => navigation.push('/cart')}>
            Cart ({itemCount})
          </button>
        </div>
      </div>
    </header>
  );
};
