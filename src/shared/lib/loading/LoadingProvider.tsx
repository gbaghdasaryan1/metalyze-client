'use client';

import { ReactNode } from 'react';
import { useLoading } from './context';
import styles from './LoadingProvider.module.scss';

type LoadingProviderProps = {
  children: ReactNode;
};

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const isLoading = useLoading((state) => state.isLoading);
  const message = useLoading((state) => state.message);

  return (
    <>
      {children}
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinner}>
            <div className={styles.spinner}></div>
            {message && <p className={styles.loadingMessage}>{message}</p>}
          </div>
        </div>
      )}
    </>
  );
};
