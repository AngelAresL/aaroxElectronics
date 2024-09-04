import content from '../../content.json';
import automotive from '../../assets/images/homePage/thirdSection/automotive.webp';
import industrial from '../../assets/images/homePage/thirdSection/industrial.webp';
import marine from '../../assets/images/homePage/thirdSection/marine.webp';
import consumer from '../../assets/images/homePage/thirdSection/consumer.webp';
import infrastructure from '../../assets/images/homePage/thirdSection/infrastructure.webp';
import motor from '../../assets/images/homePage/thirdSection/motor.webp';
import { useLanguageStore } from '../../stores/languageStore.jsx';
import './thirdSection.css';

export default function ThirdSection() {
  const language = useLanguageStore((state) => state.language);

  return(
    <section className='home-third-section'>
      <article className='sector' id='first-sector'>
        <div className='img-sector' style={{ backgroundImage: `url(${automotive.src})` }}>
          <div className='overlay-sector'></div>
        </div>
        <div className='container-content'>
          <div>
            <span className='number-sector'>01</span>
            <h2 className='title-sector'>{content[language].HomePage.thirdSection.title1}</h2>
          </div>
          <p className='content-sector'>{content[language].HomePage.thirdSection.paragraph1}</p>
        </div>
      </article>
      <article className='sector'>
        <div className='img-sector' style={{ backgroundImage: `url(${industrial.src})` }}>
          <div className='overlay-sector'></div>
        </div>
        <div className='container-content'>
          <div>
            <span className='number-sector'>02</span>
            <h2 className='title-sector'>{content[language].HomePage.thirdSection.title2}</h2>
          </div>
          <p className='content-sector'>{content[language].HomePage.thirdSection.paragraph2}</p>
        </div>
      </article>
      <article className='sector'>
        <div className='img-sector' style={{ backgroundImage: `url(${marine.src})` }}>
          <div className='overlay-sector'></div>
        </div>
        <div className='container-content'>
          <div>
            <span className='number-sector'>03</span>
            <h2 className='title-sector'>{content[language].HomePage.thirdSection.title3}</h2>
          </div>
          <p className='content-sector'>{content[language].HomePage.thirdSection.paragraph3}</p>
        </div>
      </article>
      <article className='sector'>
        <div className='img-sector' style={{ backgroundImage: `url(${consumer.src})` }}>
          <div className='overlay-sector'></div>
        </div>
        <div className='container-content'>
          <div>
            <span className='number-sector'>04</span>
            <h2 className='title-sector'>{content[language].HomePage.thirdSection.title4}</h2>
          </div>
          <p className='content-sector'>{content[language].HomePage.thirdSection.paragraph4}</p>
        </div>
      </article>
      <article className='sector'>
        <div className='img-sector' style={{ backgroundImage: `url(${infrastructure.src})` }}>
          <div className='overlay-sector'></div>
        </div>
        <div className='container-content'>
          <div>
            <span className='number-sector'>05</span>
            <h2 className='title-sector'>{content[language].HomePage.thirdSection.title5}</h2>
          </div>
          <p className='content-sector'>{content[language].HomePage.thirdSection.paragraph5}</p>
        </div>
      </article>
      <article className='sector'>
        <div className='img-sector' style={{ backgroundImage: `url(${motor.src})` }}>
          <div className='overlay-sector'></div>
        </div>
        <div className='container-content'>
          <div>
            <span className='number-sector'>06</span>
            <h2 className='title-sector'>{content[language].HomePage.thirdSection.title6}</h2>
          </div>
          <p className='content-sector'>{content[language].HomePage.thirdSection.paragraph6}</p>
        </div>
      </article>
    </section>
  );
}