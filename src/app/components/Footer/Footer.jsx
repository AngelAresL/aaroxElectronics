'use client';

import Link from 'next/link';
import Image from 'next/image';
import content from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore.jsx';
import logo from '../../assets/images/logo.svg';
import Linkedin from './Linkedin';
import Email from './Email';
import './footer.css';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const language = useLanguageStore((state) => state.language);
  const pathname = usePathname();

  return(
    <footer className={`footer ${pathname === '/' ? 'footer-home' : ''}`}>
      <div className='container-logo-footer'>
        <Image src={logo} alt='Logo Aarox Electronics' width={200} height={60} className='logo-footer'/>
      </div>
      <div className='container-footer'>
        <div className='connect'>
          <span>{content[language].Footer.connect}</span>
          <div className='contact'>
            <Link href={'https://www.linkedin.com/company/aaroxelectronics/'} target='_blank' aria-label='Visit Linkedin'>
              <Linkedin />
            </Link>
            <Link href={'mailto:aarox@aaroxelectronics.es'} target='_blank' aria-label='Send email'>
              <Email />
            </Link>
          </div>
        </div>
        <div className='privacy-cookies'>
          <Link href={'/privacy-policy'}>{content[language].Footer.policy}</Link>
          <Link href={'/cookies'}>{content[language].Footer.cookies}</Link>
        </div>
        <div className='reserved'>
          <span>Copyright © 2024 Aarox Electronics. {content[language].Footer.reserved}</span>
        </div>
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </footer>
  );
}