import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import arrowDown from '../../assets/images/power/arrowDown.svg';
import Image from 'next/image';
import './scrollButton.css';
import { useSideMenuStore } from '../../stores/sideMenuStore';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { screenSizes } from '../../lib/screenSizes';

export default function ScrollButton({ nextSection, handleScrollSection }) {
  const language = useLanguageStore((state) => state.language);
  const menuActive = useSideMenuStore((state) => state.menuActive);
  const { screenWidth } = CheckWindowWidth();

  if (screenWidth >= screenSizes.tablet && nextSection && !menuActive) {
    return (
      <button className='scroll-down' onClick={() => handleScrollSection(nextSection)}>
        <p>{content[language].PowerElectronics.scroll}</p>
        <div className='arrow-down'>
          <Image src={arrowDown} alt='Scroll button' width={24} height={24}/>
        </div>
      </button>
    );
  }

  return null;
}