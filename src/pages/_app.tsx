import '../styles/globals.scss';
import { QueryProvider } from '@shared/lib/react-query';
import { Footer, Header } from '@widgets/index';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
        <QueryProvider pageProps={pageProps}>
          <Component {...pageProps} />
        </QueryProvider>
      <Footer />
    </>
  );
}
