'use client';

import { useEffect } from 'react';
import './not-found.css';
import { useNotFoundStore } from './stores/notFoundStore';
import arrowRight from './assets/images/homePage/secondSection/limeArrowRight.svg';
import CheckWindowWidth from './hooks/useWindowWidth';
import { screenSizes } from './lib/screenSizes';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  const setNotFound = useNotFoundStore((state) => state.setNotFound);
  const { screenWidth } = CheckWindowWidth();

  useEffect(() => {
    setNotFound(true);
  });

  return(
    <main className='notfound-main'>
      <h1>404</h1>
      <p>Oops, something went wrong</p>
      <Link href={'/'}>
        Back to Home
        <Image src={arrowRight} width={screenWidth < screenSizes.tablet ? 16 : 24} height={screenWidth < screenSizes.tablet ? 16 : 24} alt='Right arrow' className='bounce-arrow'/>
      </Link>
    </main>
  );
}