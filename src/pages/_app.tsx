import '../styles/globals.scss';
import { QueryProvider } from '@shared/lib/react-query';
import { LoadingProvider } from '@shared/lib/loading';
import { Footer, Header, Navigation } from '@widgets/index';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <QueryProvider pageProps={pageProps}>
        <LoadingProvider>
          <Component {...pageProps} />
        </LoadingProvider>
      </QueryProvider>
      <Footer />
    </>
  );
}
