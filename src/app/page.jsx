'use client';

import { useEffect, useState } from 'react';
import FirstSection from './components/HomePage/FirstSection.jsx';
import SecondSection from './components/HomePage/SecondSection.jsx';
import ThirdSection from './components/HomePage/ThirdSection.jsx';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx';
import { useNotFoundStore } from './stores/notFoundStore.jsx';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const setNotFound = useNotFoundStore((state) => state.setNotFound);

  useEffect(() => {
    setNotFound(false);
  });

  useEffect(() => {
    if (!loading) {
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
    } else {
      const body = document.querySelector('body');
      body.style.overflow = 'hidden';
    }    
  }, [loading]);

  return (
    <main className='main-home'>
      {loading && <LoadingScreen setLoading={setLoading}/>}
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </main>
  );
}

