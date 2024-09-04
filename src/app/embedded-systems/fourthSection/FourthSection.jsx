import { useEffect, useState, useRef } from 'react';
import content from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore';
import PcbTools from './pcbTools/PcbTools';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { screenSizes } from '../../lib/screenSizes';
import handleVisibility from '../../lib/scrollEmbedded3dsection';
import SchematicsNav from './schematics/SchematicsNav';
import ComponentsNav from './componentsPcb/ComponentsNav';
import MechanicalNav from './mechanical/MechanicalNav';
import { Work_Sans } from 'next/font/google';
import './fourthSection.css';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function FourthSection() {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();
  const [embeddedSection, setEmbeddedSection] = useState(null);
  const [containerPcb3d, setContainerPcb3d] = useState(null);
  const totalFrames = 169;
  const shrinkStartFrame = 157;
  const minScale = 0.6;
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.embedded-fourthSection');
      const textElements = section?.querySelectorAll('.fourthSection-title, .fourthSection-subtitle');
      
      const rect = section?.getBoundingClientRect();
      const sectionTop = rect?.top;
      const windowHeight = window.innerHeight;

      if (sectionTop <= 0 && sectionTop >= -windowHeight) {
        const opacity = 1 + ((sectionTop / windowHeight) * 2);
        textElements.forEach(el => {
          el.style.opacity = opacity;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const start = () => {
      const embeddedSectionSelected = document.querySelector('.embedded-fourthSection');
      const containerPcb3d = document.querySelector('.container-pcb3d');
      setEmbeddedSection(embeddedSectionSelected);
      setContainerPcb3d(containerPcb3d);
      
      if (!embeddedSection || !containerPcb3d) return;

      function preloadImages() {
        for (let i = 1; i <= totalFrames; i++) {
          const img = new Image();
          img.src = currentFrame(i);
        }
      }

      preloadImages();
      window.addEventListener('scroll', getFrameRates);
    };

    start();

    return () => {
      window.removeEventListener('scroll', getFrameRates);
    };
  });

  function currentFrame(frame) {
    if(screenWidth >= screenSizes.laptop) {
      return `../embedded/pcb3d/pcb3d${frame}.webp`;
    }

    if(screenWidth >= screenSizes.tablet) {
      return `../embedded/pcb3dTablet/pcb3d${frame}.webp`;
    }

    if(screenWidth >= screenSizes.mobile) {
      return `../embedded/pcb3dMobile/pcb3d${frame}.webp`;
    }
  }

  function getFrameRates() {
    const rect = embeddedSection?.getBoundingClientRect();
    const positiveTop = rect?.top <= 0 ? Math.abs(rect?.top) : 0;
    const height = rect.height - window.innerHeight;

    const finalPercentage = Math.floor((totalFrames * positiveTop) / height);
    let frames = finalPercentage <= totalFrames ? finalPercentage : totalFrames;

    if (!frames) frames = 1;

    const img = new Image();
    img.src = currentFrame(frames);
    img.onload = () => {
      const canvas = canvasRef.current;

      if(!canvas) return;
      
      const context = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;

      context.scale(dpr, dpr);
      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      const imgAspectRatio = img.width / img.height;
      const canvasAspectRatio = canvas.clientWidth / canvas.clientHeight;
      let drawWidth, drawHeight;

      if (canvasAspectRatio > imgAspectRatio) {
        drawWidth = canvas.clientWidth;
        drawHeight = canvas.clientWidth / imgAspectRatio;
      } else {
        drawHeight = canvas.clientHeight;
        drawWidth = canvas.clientHeight * imgAspectRatio;
      }

      const drawX = (canvas.clientWidth - drawWidth) / 2;
      const drawY = (canvas.clientHeight - drawHeight) / 2;

      context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    const canvasElement = document.querySelector('#canvas-pcb3d');

    if (frames >= shrinkStartFrame) {     
      const scrollPosition = positiveTop - ((shrinkStartFrame / totalFrames) * height);
      const maxScrollPosition = (height * (1 - (shrinkStartFrame / totalFrames))) * 0.6;
      const actualScrollPosition = Math.min(scrollPosition, maxScrollPosition);
      let scaleValue;

      if(screenWidth >= screenSizes.tablet) {
        scaleValue = Math.max(minScale, 1 - (actualScrollPosition / maxScrollPosition) * 0.4);
      } else {
        scaleValue = Math.max(0.9, 1 - (actualScrollPosition / maxScrollPosition) * 0.4);
      }
      const translateYValue = ((1 - scaleValue) / 2) * 100;

      if(canvasElement) {
        canvasElement.style.borderRadius = '1.2rem';
      }
      containerPcb3d.style.transform = `translateY(-${translateYValue}%) scale(${scaleValue})`;
      containerPcb3d.style.borderRadius = '1.2rem';
      containerPcb3d.style.boxShadow = '0px 2px 100px 0px #1e5a38c5';
    } else {
      if(canvasElement) {
        canvasElement.style.borderRadius = 'initial';
      }
      containerPcb3d.style.transform = 'initial';
      containerPcb3d.style.borderRadius = 'initial';
      containerPcb3d.style.boxShadow = 'initial';
    }

    handleVisibility(frames, screenWidth, screenSizes);
  }

  return (
    <section className="embedded-fourthSection">
      <h2 className={`fourthSection-title ${workSans.className}`}>
        {content[language].EmbeddedSystems.fourthSection.title}
        <span> {content[language].EmbeddedSystems.fourthSection.toolbox}</span>
      </h2>
      <h3 className='fourthSection-subtitle'>
        {content[language].EmbeddedSystems.fourthSection.text1}
        <span> {content[language].EmbeddedSystems.fourthSection.tested} </span>
        <p>{content[language].EmbeddedSystems.fourthSection.and}</p>
        <span> {content[language].EmbeddedSystems.fourthSection.proven} </span>
      </h3>
      <div className='pcb-tools-container container-tools tools'>
        <PcbTools />
      </div>
      <div className='pcb-schematics'>
        <SchematicsNav />
      </div>
      <div className='pcb-components'>
        <ComponentsNav />
      </div>
      <div className='pcb-mechanical'>
        <MechanicalNav />
      </div>
      <div className="container-pcb3d">
        <canvas id="canvas-pcb3d" ref={canvasRef}></canvas>
      </div>
    </section>
  );
}