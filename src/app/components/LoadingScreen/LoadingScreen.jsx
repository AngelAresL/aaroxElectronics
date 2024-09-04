'use client';

import logo from '../../assets/images/logo.svg';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useFirstSesionStore } from '../../stores/firstSesionStore';
import './loading.css';

export default function LoadingScreen({ setLoading }) {
  const firstSesion = useFirstSesionStore((state) => state.firstSesion);
  const toggleFirstSesion = useFirstSesionStore((state) => state.toggleFirstSesion);
  const loadingScreenRef = useRef(null);

  useEffect(() => {
    if (firstSesion) {
      const element = loadingScreenRef.current;

      const timer1 = setTimeout(() => {
        if (element) {
          element.classList.add('slide-up');
        }
      }, 1000);

      const timer2 = setTimeout(() => {
        setLoading(false);
        toggleFirstSesion(false);
      }, 1500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
    setLoading(false);
  }, [firstSesion, setLoading, toggleFirstSesion]);

  if(firstSesion) {
    return(
      <div className='loading-screen' ref={loadingScreenRef}>
        <div className='logo-loading'>
          <Image src={logo} alt='Logo Aarox Electronics' fill={true}/>
        </div>
      </div>
    );
  }

  return null;
}