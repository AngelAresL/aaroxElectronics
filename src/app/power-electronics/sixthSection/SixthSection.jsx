import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import schematicsImg from '../../assets/images/power/sixthSection/schematics.webp';
import pcbImg from '../../assets/images/power/sixthSection/pcb.webp';
import mechanicalImg from '../../assets/images/power/sixthSection/mechanical.webp';
import prototypingImg from '../../assets/images/power/sixthSection/prototyping.webp';
import debuggingImg from '../../assets/images/power/sixthSection/debugging.webp';
import validationImg from '../../assets/images/power/sixthSection/validation.webp';
import schematics from '../../assets/images/power/sixthSection/icons/schematics.svg';
import pcb from '../../assets/images/power/sixthSection/icons/pcb.svg';
import mechanical from '../../assets/images/power/sixthSection/icons/mechanical.svg';
import prototyping from '../../assets/images/power/sixthSection/icons/prototyping.svg';
import debugging from '../../assets/images/power/sixthSection/icons/debugging.svg';
import AsideSection from './asideSection/AsideSection';
import Image from 'next/image';
import Arrow from './Arrow';
import { Work_Sans } from 'next/font/google';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { screenSizes } from '../../lib/screenSizes';
import './sixthSection.css';
import { useEffect, useState } from 'react';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function SixthSection() {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);

  useEffect(() => {
    const handleScrollSixthSection = () => {
      const sixthSection = document.querySelector('.power-sixthSection');
      const arrow = document.querySelector('.st01');
           
      if(!sixthSection) return;

      const rect = sixthSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height - viewportHeight;
      const scrollTop = viewportHeight - (rect.top + 380);
      const visibleHeight = Math.max(0, Math.min(sectionHeight, scrollTop));
      const scrollFraction = (visibleHeight / sectionHeight);

      setStrokeDashoffset(3200 * scrollFraction);

      if(arrow) {
        if(strokeDashoffset >= 3200) {
          arrow.style.opacity = 1;
        } else {
          arrow.style.opacity = 0;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSixthSection);

    return () => {
      window.removeEventListener('scroll', handleScrollSixthSection);
    };
  }, [strokeDashoffset]);

  return(
    <section className={`power-sixthSection ${workSans.className}`}>
      {
        screenWidth >= screenSizes.laptop
          && <Arrow className="arrow" strokeDashoffset={strokeDashoffset}/>
      }
      <AsideSection 
        icon={schematics} 
        image={schematicsImg} 
        altIcon={'Schematics icon'} 
        altImg={'Schematics image'}
        title={content[language].PowerElectronics.sixthSection.schematic.title}
        text={content[language].PowerElectronics.sixthSection.schematic.subtitle}
      />
      <AsideSection 
        icon={pcb} 
        image={pcbImg} 
        altIcon={'PCB icon'} 
        altImg={'PCB image'}
        title={content[language].PowerElectronics.sixthSection.pcb.title}
        text={content[language].PowerElectronics.sixthSection.pcb.subtitle}
      />
      <AsideSection 
        icon={mechanical} 
        image={mechanicalImg} 
        altIcon={'Mechanical icon'} 
        altImg={'Mechanical image'}
        title={content[language].PowerElectronics.sixthSection.mechanical.title}
        text={content[language].PowerElectronics.sixthSection.mechanical.subtitle}
      />
      <AsideSection 
        icon={prototyping} 
        image={prototypingImg} 
        altIcon={'Prototyping icon'} 
        altImg={'Prototyping image'}
        title={content[language].PowerElectronics.sixthSection.prototype.title}
        text={content[language].PowerElectronics.sixthSection.prototype.subtitle}
      />
      <AsideSection 
        icon={debugging} 
        image={debuggingImg} 
        altIcon={'Debugging icon'} 
        altImg={'Debugging image'}
        title={content[language].PowerElectronics.sixthSection.debugging.title}
        text={content[language].PowerElectronics.sixthSection.debugging.subtitle}
      />
      <div className='last-section'>
        <h2>
          <span> {content[language].PowerElectronics.sixthSection.validation.title1} </span>
          {content[language].PowerElectronics.sixthSection.validation.title2}
          <span> {content[language].PowerElectronics.sixthSection.validation.title3} </span>
        </h2>
        <h3>{content[language].PowerElectronics.sixthSection.validation.subtitle}</h3>
        <div className='container-img-validation'>
          <Image src={validationImg} alt='Validation image' fill={true}/>
        </div>
      </div>
    </section>
  );
}