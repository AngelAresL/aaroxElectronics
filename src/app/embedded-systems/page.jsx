'use client';

import { useEffect, useRef, useState } from 'react';
import FirstSection from './firstSection/FirstSection';
import SecondSection from './secondSection/SecondSection';
import ThirdSection from './thirdSection/ThirdSection';
import FourthSection from './fourthSection/FourthSection';
import FifthSection from './fifthSection/FifthSection';
import NavBar from './navBar/NavBar';
import ScrollButton from './scroll/ScrollButton';
import './embedded.css';

export default function EmbeddedSystems() {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const fifthSectionRef = useRef(null);

  const [activeSection, setActiveSection] = useState('concept');
  const [nextSection, setNextSection] = useState('architecture');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: firstSectionRef, id: 'concept' },
        { ref: secondSectionRef, id: 'architecture' },
        { ref: thirdSectionRef, id: 'calculations' },
        { ref: fourthSectionRef, id: 'schematics' },
        { ref: fifthSectionRef, id: 'market-sw'}
      ];

      let foundActive = false;
      
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].ref.current?.getBoundingClientRect();
        if (rect?.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(sections[i].id);
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
    if (sectionRef === fifthSectionRef) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 500,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollSection = (section) => {
    switch (section) {
    case 'concept':
      scrollToSection(firstSectionRef);
      break;
    case 'architecture':
      scrollToSection(secondSectionRef);
      break;
    case 'calculations':
      scrollToSection(thirdSectionRef);
      break;
    case 'schematics':
      scrollToSection(fourthSectionRef);
      break;
    case 'market-sw':
      scrollToSection(fifthSectionRef);
    default:
      break;
    }
  };

  return(
    <main className='main-embedded'>
      <NavBar activeSection={activeSection} handleScrollSection={handleScrollSection}/>
      <div ref={firstSectionRef}><FirstSection /></div>
      <div ref={secondSectionRef}><SecondSection /></div>
      <div ref={thirdSectionRef}><ThirdSection /></div>
      <div ref={fourthSectionRef}><FourthSection /></div>
      <div ref={fifthSectionRef} className='fifthSection-embedded'><FifthSection/></div>
      <ScrollButton nextSection={nextSection} handleScrollSection={handleScrollSection}/>
    </main>
  );
}