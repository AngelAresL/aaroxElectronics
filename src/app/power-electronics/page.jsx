'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollButton from './scrollButton/ScrollButton';
import FirstSection from './firstSection/FirstSection';
import SecondSection from './secondSection/SecondSection';
import ThirdSection from './thirdSection/ThirdSection';
import FourthSection from './fourthSection/FourthSection';
import FifthSection from './fifthSection/FifthSection';
import SixthSection from './sixthSection/SixthSection';

export default function PowerElectronics() {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const fifthSectionRef = useRef(null);
  const sixthSectionRef = useRef(null);

  const [nextSection, setNextSection] = useState('secondSection-power');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = [
        { ref: firstSectionRef, id: 'firstSection-power' },
        { ref: secondSectionRef, id: 'secondSection-power' },
        { ref: thirdSectionRef, id: 'thirdSection-power' },
        { ref: fourthSectionRef, id: 'fourthSection-power' },
        { ref: fifthSectionRef, id: 'fifthSection-power' },
        { ref: sixthSectionRef, id: 'sixthSection-power' },
      ];

      let foundActive = false;

      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].ref.current?.getBoundingClientRect();

        if (rect?.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setNextSection(sections[i + 1]?.id || null);
          foundActive = true;
          break;
        }
      }

      if (!foundActive) {
        setNextSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const handleScrollSection = (section) => {
    switch (section) {
    case 'firstSection-power':
      scrollToSection(firstSectionRef);
      break;
    case 'secondSection-power':
      scrollToSection(secondSectionRef);
      break;
    case 'thirdSection-power':
      scrollToSection(thirdSectionRef);
      break;
    case 'fourthSection-power':
      scrollToSection(fourthSectionRef);
      break;
    case 'fifthSection-power':
      scrollToSection(fifthSectionRef);
      break;
    case 'sixthSection-power':
      scrollToSection(sixthSectionRef);
      break;
    default:
      break;
    }
  };

  return(
    <main>
      <ScrollButton nextSection={nextSection} handleScrollSection={handleScrollSection}/>
      <div ref={firstSectionRef} className='firstSection-power'><FirstSection/></div>
      <div ref={secondSectionRef} className='secondSection-power'><SecondSection/></div>
      <div ref={thirdSectionRef} className='thirdSection-power'><ThirdSection/></div>
      <div ref={fourthSectionRef} className='fourthSection-power'><FourthSection/></div>
      <div ref={fifthSectionRef} className='fifthSection-power'><FifthSection/></div>
      <div ref={sixthSectionRef} className='sixthSection-power'><SixthSection/></div>
    </main>
  );
}