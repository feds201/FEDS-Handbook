import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-N3TT9XBHV0', {
        page_path: url,
      });
    };
   
  }, []);

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N3TT9XBHV0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N3TT9XBHV0');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;