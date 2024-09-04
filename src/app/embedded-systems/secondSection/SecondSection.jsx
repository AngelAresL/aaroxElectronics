import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import './secondSection.css';
import { useEffect, useState, useRef } from 'react';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function SecondSection({ refSection }) {
  const language = useLanguageStore((state) => state.language);
  const [embeddedSection, setEmbeddedSection] = useState(null);
  const [title, setTitle] = useState(null);
  const canvasRef = useRef(null);
  const totalFrames = 12;
  let ticking = false;

  useEffect(() => {
    const start = () => {
      const embeddedSectionSelected = document.querySelector('.embedded-secondSection');
      const h2Title = document.querySelector('.title-secondSection');
      setEmbeddedSection(embeddedSectionSelected);
      setTitle(h2Title);

      if (!embeddedSection || !canvasRef.current) return;

      function preloadImages() {
        for (let i = 1; i <= totalFrames; i++) {
          const img = new Image();
          img.src = currentFrame(i);
        }
      }

      preloadImages();
      window.addEventListener('scroll', onScroll);
    };

    start();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  function currentFrame(frame) {
    return `../embedded/pyramid/pyramid${frame}.webp`;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        getFrameRates();
        ticking = false;
      });
      ticking = true;
    }
  }

  function getFrameRates() {
    const rect = embeddedSection?.getBoundingClientRect();
    const positiveTop = rect?.top <= 0 ? Math.abs(rect?.top) : 0;
    const height = rect.height - window.innerHeight;

    const finalPercentage = Math.floor((totalFrames * positiveTop) / height);
    let frames = finalPercentage <= totalFrames ? finalPercentage : totalFrames;

    if (!frames) frames = 1;

    const imgSrc = currentFrame(frames);

    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const context = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const canvasWidth = canvas.clientWidth;
      const canvasHeight = window.innerHeight * 0.8;

      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;

      context.scale(dpr, dpr);
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    };

    const opacity = 1 - ((positiveTop / height) * 1.5);

    if (title) {
      title.style.opacity = opacity;
    }
  }

  return (
    <section className="embedded-secondSection" ref={refSection}>
      <h2 className={`title-secondSection ${workSans.className}`}>
        {content[language].EmbeddedSystems.secondSection.text1}{' '}
        <span>{content[language].EmbeddedSystems.secondSection.texthighlighted}</span>{' '}
        {content[language].EmbeddedSystems.secondSection.text2}
      </h2>
      <div className="container-pyramid">
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>
      </div>
    </section>
  );
}

