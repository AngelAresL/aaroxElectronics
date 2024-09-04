import topology from '../../assets/images/power/fourthSection/topology.webp';
import magnetics from '../../assets/images/power/fourthSection/magentics.webp';
import modeling from '../../assets/images/power/fourthSection/modeling.webp';
import simulations from '../../assets/images/power/fourthSection/simulations.webp';
import control from '../../assets/images/power/fourthSection/control.webp';
import Image from 'next/image';
import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import { Work_Sans } from 'next/font/google';
import './fourthSection.css';
import { useEffect, useRef, useState } from 'react';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { screenSizes } from '../../lib/screenSizes';

const workSans = Work_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin']
});

const images = [topology, magnetics, modeling, simulations, control];

export default function FourthSection() {
  const language = useLanguageStore((state) => state.language);
  const [isFixed, setFixed] = useState(false);
  const topRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { screenWidth } = CheckWindowWidth();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      });
    }, { threshold: [0, 1] });

    if (topRef.current) {
      observer.observe(topRef.current);
    }

    return () => observer.disconnect();
  });

  useEffect(() => {
    const handleScrollFourthSection = () => {
      const section = document.querySelector('.power-fourthSection');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollPosition = windowHeight - sectionTop;

      const scrollPercentage = (scrollPosition / sectionHeight) * 100;
      const currentPart = Math.floor((scrollPercentage / 100) * 6);
      const widthLinePercenetage = ((scrollPercentage / 100) * 6).toFixed(2).split('.')[1];
      const indexLineWidth = ((scrollPercentage / 100) * 6).toFixed(2).split('.')[0];
      const widhtLinePercentageDesktop = ((((scrollPercentage / 100) * 6) - 1) / 5) * 100;
           
      if(screenWidth < screenSizes.desktop) {
        const line = document.querySelectorAll('.light-line');

        if(indexLineWidth >= 1) {
          line.forEach((item) => {
            item.style.width = `${widthLinePercenetage}%`;
          });
        }

        if(indexLineWidth > 5) {
          line.forEach((item) => {
            item.style.width = '100%';
          });
        }
      } else {
        const line = document.querySelector('.light-line');
        line.style.width = `${widhtLinePercentageDesktop}%`;
      }

      let index;

      if (currentPart === 0 || currentPart === 1) index = 0;
      else if (currentPart === 2) index = 1;
      else if (currentPart === 3) index = 2;
      else if (currentPart === 4) index = 3;
      else index = 4;
      
      setActiveIndex(index);
      
      const imgContainer = document.querySelector('.container-img-fourthSection');
      const listItems = document.querySelector('.list-fourthSection');

      if (isFixed && sectionTop <= 0) {
        imgContainer.classList.add('fixed');
        listItems.classList.add('fixed');
      } else {
        imgContainer.classList.remove('fixed');
        listItems.classList.remove('fixed');
      }    
    };
    
    window.addEventListener('scroll', handleScrollFourthSection);
    return () => {
      window.removeEventListener('scroll', handleScrollFourthSection);
    };
  }, [isFixed, screenWidth]);

  return (
    <section className={`power-fourthSection ${workSans.className}`} ref={topRef}>
      <div className='container-img-fourthSection'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-wrapper ${activeIndex === index ? 'active' : ''} ${index === (activeIndex - 1) ? 'initial' : ''}`}
          >
            <Image src={image} alt={`Dashboard ${index}`} fill={true} />
          </div>
        ))}
      </div>
      <ol className='list-fourthSection'>
        {
          screenWidth >= screenSizes.desktop &&
          <div className='container-line'>
            <span className='line'></span>
            <span className='light-line'></span>
          </div>
        }
        {['topology', 'magnetics', 'modeling', 'simulations', 'control'].map((id, index) => (
          <li
            key={id}
            id={id}
            className={(screenWidth >= screenSizes.desktop) ? [
              index <= activeIndex ? 'active' : '',
              index === 4 ? 'last' : '',
              index > activeIndex ? 'inactive' : ''
            ].join(' ') : [
              index === activeIndex ? 'active' : '',
              index === 4 ? 'last' : '',
              index !== activeIndex ? 'inactive' : ''
            ].join(' ')}
          >
            <span>{index + 1}. {content[language].PowerElectronics.fourthSection[`${index + 1}`].title}</span>
            {
              screenWidth < screenSizes.desktop &&
              <div className='container-line'>
                <span className='line'></span>
                <span className='light-line'></span>
              </div>
            }
            <p>{content[language].PowerElectronics.fourthSection[`${index + 1}`].text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}