import { FC } from 'react';
import styles from './style.module.scss';
import { useSearchStore } from './store';

export const Search: FC = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  return (
    <div className={styles.searchContainer}>
      <input
        type='text'
        placeholder='Search jewelry...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
      <svg
        className={styles.searchIcon}
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
      >
        <path
          d='M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};
