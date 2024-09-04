'use client';

import Image from 'next/image';
import Link from 'next/link';
import './header.css';
import smallLogo from '../../assets/images/smallLogo.svg';
import { useSideMenuStore } from '../../stores/sideMenuStore.jsx';
import CheckWindowWidth from '../../hooks/useWindowWidth.jsx';
import ToggleLanguage from '../ToggleLanguage/ToggleLanguage.jsx';
import { screenSizes } from '../../lib/screenSizes';
import { useNotFoundStore } from '../../stores/notFoundStore';

export default function Header() {
  const menuActive = useSideMenuStore((state) => state.menuActive);
  const toggleActive = useSideMenuStore((state) => state.toggleActive);
  const { screenWidth } = CheckWindowWidth();
  const notFound = useNotFoundStore((state) => state.notFound);

  if(!notFound) {
    return (
      <header className='header'>
        <Link href={'/'}>
          <Image src={smallLogo} alt='Logo Aarox Electronics' width={`${screenWidth < screenSizes.tablet ? 36 : 64}`} height={`${screenWidth < screenSizes.tablet ? 36 : 64}`}/>
        </Link>
        <div className='language-menu-container'>
          <ToggleLanguage/>
          <div className={`menu ${menuActive ? 'active' : ''}`} onClick={toggleActive}>
            <span></span>
          </div>
        </div>
      </header>
    );
  }

  return null;
}
