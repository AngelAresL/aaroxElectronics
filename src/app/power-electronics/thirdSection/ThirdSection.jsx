import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import cost from '../../assets/images/power/thirdSection/icons/cost.svg';
import software from '../../assets/images/power/thirdSection/icons/software.svg';
import tested from '../../assets/images/power/thirdSection/icons/tested.svg';
import zvs from '../../assets/images/power/thirdSection/icons/zvs.svg';
import topology from '../../assets/images/power/thirdSection/topology.webp';
import Image from 'next/image';
import './thirdSection.css';
import { screenSizes } from '../../lib/screenSizes';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { useEffect, useRef } from 'react';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  weight: '700',
  subsets: ['latin']
});

export default function ThirdSection() {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();
  const sectionRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    let thresholdValue;

    if(width <= screenSizes.tablet) {
      thresholdValue = 0.2;
    } else if (width <= screenSizes.laptop) {
      thresholdValue = 0.3;
    } else {
      thresholdValue = 0.8;
    }

    const observerListItems = new IntersectionObserver((ul) => {
      ul.forEach(li => {
        const listItems = li.target.querySelectorAll('.list-thirdSection li');
        if (li.isIntersecting) {
          listItems.forEach((text, index) => {
            setTimeout(() => {
              text.classList.add('active');
            }, index * 300);
          });
        }
      });
    }, { threshold: thresholdValue });

    if (sectionRef.current) {
      observerListItems.observe(sectionRef.current);
    }

    return () => observerListItems.disconnect();
  }, []);

  return(
    <section ref={sectionRef} className='power-thirdSection'>
      <div>
        <ul className={`list-thirdSection ${workSans.className}`}>
          <li>
            <div>
              <Image 
                src={zvs} 
                width={screenWidth < screenSizes.laptop ? 36 : 60} 
                height={screenWidth < screenSizes.laptop ? 36 : 60} 
                alt='ZVS icon'
              />
            </div>
            <div className='list-text'>
              <p>{content[language].PowerElectronics.thirdSection.bucks.text}</p>
              <span>{content[language].PowerElectronics.thirdSection.bucks.highlighted}</span>
            </div>
          </li>
          <li>
            <div>
              <Image 
                src={tested} 
                width={screenWidth < screenSizes.laptop ? 36 : 60} 
                height={screenWidth < screenSizes.laptop ? 36 : 60} 
                alt='Tested icon'
              />
            </div>
            <div className='list-text'>
              <p>{content[language].PowerElectronics.thirdSection.projects.text}</p>
              <span>{content[language].PowerElectronics.thirdSection.projects.highlighted}</span>
            </div>
          </li>
          <li>
            <div>
              <Image 
                src={cost} 
                width={screenWidth < screenSizes.laptop ? 36 : 60} 
                height={screenWidth < screenSizes.laptop ? 36 : 60} 
                alt='Cost icon'
              />
            </div>
            <div className='list-text'>
              <p>{content[language].PowerElectronics.thirdSection.emc.text}</p>
              <span>{content[language].PowerElectronics.thirdSection.emc.highlighted}</span>
            </div>
          </li>
          <li>
            <div>
              <Image 
                src={software} 
                width={screenWidth < screenSizes.laptop ? 36 : 60} 
                height={screenWidth < screenSizes.laptop ? 36 : 60} 
                alt='Software icon'
              />
            </div>
            <div className='list-text'>
              <p>{content[language].PowerElectronics.thirdSection.sw.text}</p>
              <span>{content[language].PowerElectronics.thirdSection.sw.highlighted}</span>
            </div>
          </li>
        </ul>
      </div>
      <div className='container-imgDashboard'>
        <Image src={topology} alt='Topology Dashboard' fill={true}/>
        <div className="features-circles">
          <div className="circle0 circle"></div>
          <div className="circle1 circle"></div>
          <div className="circle2 circle"></div>
          <div className="circle3 circle"></div>
          <div className="circle4 circle"></div>
          <div className="circle5 circle"></div>
          <div className="circle6 circle"></div>
        </div>
      </div>
    </section>
  );
}