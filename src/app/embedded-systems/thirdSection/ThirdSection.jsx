import TechCarousel from './TechCarousel';
import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import { Work_Sans } from 'next/font/google';
import './thirdSection.css';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function ThirdSection() {
  const language = useLanguageStore((state) => state.language);

  return(
    <section className='embedded-thirdSection'>
      <h2 className={workSans.className}>{content[language].EmbeddedSystems.thirdSection.title} <span>{content[language].EmbeddedSystems.thirdSection.design}</span></h2>
      <h3>
        {content[language].EmbeddedSystems.thirdSection.subtitle}
      </h3>
      <TechCarousel/>
    </section>
  );
}