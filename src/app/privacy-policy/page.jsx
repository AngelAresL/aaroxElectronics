'use client';

import { useEffect } from 'react';
import privacy from '../privacy.json';
import { useLanguageStore } from '../stores/languageStore';
import { useNotFoundStore } from '../stores/notFoundStore';
import './privacy-policy.css';

export default function PrivacyPolicy() {
  const language = useLanguageStore((state) => state.language);
  const setNotFound = useNotFoundStore((state) => state.setNotFound);
    
  useEffect(() => {
    setNotFound(false);
  });

  return(
    <main className='privacy-main'>
      <div className='privacy-header'>
        <h1>{privacy[language].title}</h1>
        <h2>{privacy[language].subtitle}</h2>
      </div>
      <section className='privacy-section'>
        <h2>{privacy[language].title}</h2>
        <p>{privacy[language].firstParagraph}</p>
        <p>{privacy[language].secondParagraph}</p>
        <p>{privacy[language].thirdParagraph}</p>
        <h3>{privacy[language].controller.title}</h3>
        <span>{privacy[language].controller.who}</span>
        <span>{privacy[language].controller.address}</span>
        <span>{privacy[language].controller.phone}</span>
        <span>{privacy[language].controller.email}</span>
        <h3>{privacy[language].purpose.title}</h3>
        <p>{privacy[language].purpose.firstParagraph}</p>    
        <p>{privacy[language].purpose.listTitle}</p>
        <ul className='privacy-list'>
          <li>{privacy[language].purpose.list.first}</li>
          <li>{privacy[language].purpose.list.second}</li>
          <li>{privacy[language].purpose.list.third}</li>
        </ul>
        <p>{privacy[language].purpose.secondParagraph}</p>
        <p>{privacy[language].purpose.thirdParagraph}</p>
        <p>{privacy[language].purpose.fourthParagraph}</p>
        <p>{privacy[language].purpose.fifthParagraph}</p>
        <h3>{privacy[language].disclosed.title}</h3>
        <p>{privacy[language].disclosed.firstParagraph}</p>
        <p>{privacy[language].disclosed.secondParagraph}</p>
        <p>{privacy[language].disclosed.thirdParagraph}</p>
        <h3>{privacy[language].rights.title}</h3>
        <p>{privacy[language].rights.firstParagraph}</p>
        <p>{privacy[language].rights.secondParagraph}</p>
        <p>{privacy[language].rights.thirdParagraph}</p>
        <p>{privacy[language].rights.fourthParagraph}</p>
        <p>{privacy[language].rights.fifthParagraph}</p>
        <p>{privacy[language].rights.sixthParagraph}</p>
        <p>{privacy[language].rights.seventhParagraph}</p>
        <p>{privacy[language].rights.eigthParagraph}</p>
      </section>
    </main>
  );
}