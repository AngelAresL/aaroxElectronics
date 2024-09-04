import { useEffect } from 'react';
import content from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore';
import { Work_Sans } from 'next/font/google';
import './firstSection.css';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function FirstSection() {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    const asideParagraphs = document.querySelectorAll('.embedded-firstSection aside p');

    const showParagraphsWithDelay = () => {
      asideParagraphs.forEach((paragraph, index) => {
        setTimeout(() => {
          paragraph.classList.add('show');
        }, index * 500);
      });
    };

    showParagraphsWithDelay();
  }, []);

  return(
    <section className='embedded-firstSection'>
      <h1 className={workSans.className}>
        {content[language].EmbeddedSystems.firstSection.title.text1}
        <span> {content[language].EmbeddedSystems.firstSection.title.concept} </span>
        {content[language].EmbeddedSystems.firstSection.title.to}
        <span> {content[language].EmbeddedSystems.firstSection.title.production}</span>
      </h1>
      <h2>
        {content[language].EmbeddedSystems.firstSection.subtitle}
        <span> {content[language].EmbeddedSystems.firstSection.support} </span>
        {content[language].EmbeddedSystems.firstSection.subtitle2}
      </h2>
      <aside>
        <p>{content[language].EmbeddedSystems.firstSection.application}</p>
        <p>{content[language].EmbeddedSystems.firstSection.industry}</p>
        <p>{content[language].EmbeddedSystems.firstSection.standards}</p>
        <p>{content[language].EmbeddedSystems.firstSection.dimensions}</p>
        <p>{content[language].EmbeddedSystems.firstSection.weight}</p>
        <p>{content[language].EmbeddedSystems.firstSection.cost}</p>
        <p>{content[language].EmbeddedSystems.firstSection.lifetime}</p>
      </aside>
    </section>
  );
}