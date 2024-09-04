import Image from 'next/image';
import Link from 'next/link';
import content from '../../content.json';
import CheckWindowWidth from '../../hooks/useWindowWidth.jsx';
import { useLanguageStore } from '../../stores/languageStore.jsx';
import lineGreenLarge from '../../assets/images/homePage/secondSection/greenLineLarge.svg';
import lineGreenMedium from '../../assets/images/homePage/secondSection/greenLineMedium.svg';
import lineGreen from '../../assets/images/homePage/secondSection/greenLine.svg';
import limeArrow from '../../assets/images/homePage/secondSection/limeArrowRight.svg';
import { screenSizes } from '../../lib/screenSizes';
import './secondSection.css';

export default function SecondSection() {
  const { screenWidth } = CheckWindowWidth();
  const language = useLanguageStore((state) => state.language);

  return(
    <section className='home-second-section' id='second-section'>
      <div className='line-container'>
        <Image src={screenWidth >= screenSizes.laptop ? lineGreenLarge : screenWidth >= screenSizes.tablet ? lineGreenMedium : lineGreen} alt='Border Green' fill={true} className='green-line'/>
      </div>
      <div className='article-container'>
        <article className='first-article'>
          <h2>{content[language].HomePage.secondSection.title1}</h2>
          <p>{content[language].HomePage.secondSection.def1}</p>
          <p>{content[language].HomePage.secondSection.def2}</p>
          <Link href={'/power-electronics'}>
            <button>
              {content[language].HomePage.secondSection.textButton1}
              <Image src={limeArrow} width={16} height={16} alt='Right arrow' className='bounce'/>
            </button>
          </Link>
        </article>
        <article className='second-article'>
          <h2>{content[language].HomePage.secondSection.title2}</h2>
          <p>{content[language].HomePage.secondSection.def3}</p>
          <p>{content[language].HomePage.secondSection.def4}</p>
          <Link href={'/embedded-systems'}>
            <button>
              {content[language].HomePage.secondSection.textButton2}
              <Image src={limeArrow} width={16} height={16} alt='Right arrow' className='bounce'/>
            </button>
          </Link>
        </article>
      </div>
    </section>
  );
}