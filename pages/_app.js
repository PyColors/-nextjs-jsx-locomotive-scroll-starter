import * as React from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css';

// Pure CSS
import '../node_modules/purecss/build/pure-min.css';
import '../node_modules/purecss/build/grids-responsive-min.css';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <RLSProvider
      options={{
        smooth: true,
        direction: 'horizontal',
        smartphone: {
          smooth: true,
          direction: 'vertical',
        },
        // ... all available Locomotive Scroll instance options
        
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      location={asPath}
      onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </div>
    </RLSProvider>
  );
}

export default MyApp;
