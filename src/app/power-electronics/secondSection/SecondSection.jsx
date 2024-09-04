import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import Image from 'next/image';
import largeDashboard from '../../assets/images/power/secondSection/largeDashboard.webp';
import './secondSection.css';
import { Work_Sans } from 'next/font/google';
import { useEffect, useState } from 'react';

const workSans = Work_Sans({
  weight: '700',
  subsets: ['latin']
});

export default function SecondSection() {
  const language = useLanguageStore((state) => state.language);

  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const handleScrollImage = () => {
      const section = document.querySelector('.power-secondSection');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.1 && rect.bottom >= 0) {
        setIsImageVisible(true);
      }
    };

    window.addEventListener('scroll', handleScrollImage);
    return () => {
      window.removeEventListener('scroll', handleScrollImage);
    };
  }, []);

  return(
    <section className='power-secondSection'>
      <div className='container-title'>
        <h2 className={`title-power-secondSection ${workSans.className}`}>
          {content[language].PowerElectronics.secondSection.text1}
          <span> {content[language].PowerElectronics.secondSection.spec}</span>
        </h2>
        <h2 className={`title-power-secondSection ${workSans.className}`}>
          {content[language].PowerElectronics.secondSection.text2}
          <span> {content[language].PowerElectronics.secondSection.sheet}</span>
        </h2>
      </div>
      <div className={`container-largeDashboard ${isImageVisible ? 'visible' : ''}`}>
        <Image src={largeDashboard} alt='Small Dashboard' />
      </div>
    </section>
  );
}