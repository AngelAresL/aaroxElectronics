'use client';

import Link from 'next/link';
import './sideMenu.css';
import { useSideMenuStore } from '../../stores/sideMenuStore.jsx';
import CheckWindowWidth from '../../hooks/useWindowWidth.jsx';
import { useLanguageStore } from '../../stores/languageStore.jsx';
import content from '../../content.json';
import { useEffect } from 'react';
import { screenSizes } from '../../lib/screenSizes';

export default function SideMenu() {
  const menuActive = useSideMenuStore((state) => state.menuActive);
  const closeMenu = useSideMenuStore((state) => state.toggleActive);
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuActive]);

  const handleClose = () => {
    closeMenu();
  };

  return (
    <>
      {menuActive && screenWidth >= screenSizes.laptop && <div className="overlay" onClick={handleClose}></div>}
      {menuActive && (
        <nav
          className={`side-menu ${screenWidth < screenSizes.laptop ? '' : 'side-menu-lg'}`}
        >
          <ul>
            <Link href={'/'} onClick={handleClose}>
              <li>{content[language].SideMenu.home}</li>
            </Link>
            <Link href={'/power-electronics'} onClick={handleClose}>
              <li>{content[language].SideMenu.powerElectronics}</li>
            </Link>
            <Link href={'/embedded-systems'} onClick={handleClose}>
              <li>{content[language].SideMenu.embeddedSystems}</li>
            </Link>
            <Link href={'https://www.cobaltomodules.com/'} onClick={handleClose}>
              <li className='cobaltoModules'>{content[language].SideMenu.cobaltoModules}</li>
            </Link>
            <Link href={'/contact'} onClick={handleClose}>
              <li>{content[language].SideMenu.contact}</li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
}