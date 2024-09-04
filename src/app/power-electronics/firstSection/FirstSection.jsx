import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import { Passion_One } from 'next/font/google';
import Image from 'next/image';
import smallDashboard from '../../assets/images/power/firstSection/smallDashboard.webp';
import './firstSection.css';
import { useEffect } from 'react';
import handleColorOpacity from '../../lib/scrollPowerElectronicsFirstSection';

const passion = Passion_One({
  weight: '400',
  subsets: ['latin']
});

export default function FirstSection() {
  const language = useLanguageStore((state) => state.language);
  
  useEffect(() => {
    handleColorOpacity();
 
    window.addEventListener('scroll', handleColorOpacity);
    return () => window.removeEventListener('scroll', handleColorOpacity);
  });

  return (
    <section className='power-firstSection'>
      <div className={`container-defs ${passion.className}`}>
        <span id='power' className='span-highlighted'>{content[language].PowerElectronics.firstSection.power}</span>
        <span id='battery'>{content[language].PowerElectronics.firstSection.battery}</span>
        <span id='ev'>{content[language].PowerElectronics.firstSection.ev}</span>
        <span id='wireless'>{content[language].PowerElectronics.firstSection.wireless}</span>
        <span id='bms'>{content[language].PowerElectronics.firstSection.bms}</span>
        <span id='inverters'>{content[language].PowerElectronics.firstSection.inverters}</span>
        <span id='controls'>{content[language].PowerElectronics.firstSection.controls}</span>
        <span id='lighting'>{content[language].PowerElectronics.firstSection.lighting}</span>
      </div>
      <div className='container-smallDashboard'>
        <Image src={smallDashboard} alt='Small Dashboard' />
      </div>
    </section>
  );
}