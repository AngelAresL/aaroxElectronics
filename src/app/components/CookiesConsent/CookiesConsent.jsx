'use client';

import { useLanguageStore } from '../../stores/languageStore';
import { useCookiesStore } from '../../stores/cookiesStore';
import content from '../../content.json';
import Link from 'next/link';
import Cookies from 'js-cookie';
import './cookiesConsent.css';
import { useEffect } from 'react';

export default function CookiesConsent() {
  const language = useLanguageStore((state) => state.language);
  const isAccept = useCookiesStore((state) => state.isAccept);
  const acceptCookies = useCookiesStore((state) => state.acceptCookies);

  useEffect(() => {
    const isAcceptCookie = Cookies.get('accept-cookies');
    if (isAcceptCookie === 'true') {
      acceptCookies(true);
    }
  }, [acceptCookies]);

  const handleAccept = () => {
    acceptCookies(true);
    Cookies.set('accept-cookies', 'true', { expires: 365 });
  };

  if (!isAccept) {
    return (
      <div className='cookies-manage'>
        <p>
          {content[language].ConsentCookies}{' '}
          <Link href='/cookies'>{content[language].link}</Link>.{' '}
          {content[language].ConsentCookies2}
        </p>
        <div className='cookies-buttons'>
          <button className='accept-cookies' onClick={handleAccept}>
            {content[language].cookiesAccept}
          </button>
          <Link href='/cookies'>
            <button className='showmore-cookies'>
              {content[language].cookiesMore}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return null;
}