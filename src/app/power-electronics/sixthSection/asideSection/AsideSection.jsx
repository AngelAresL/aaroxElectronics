import Image from 'next/image';
import SmallArrow from '../SmallArrow';
import CheckWindowWidth from '../../../hooks/useWindowWidth';
import { screenSizes } from '../../../lib/screenSizes';
import './asideSection.css';

export default function AsideSection({ icon, image, altIcon, altImg, title, text }) {
  const { screenWidth } = CheckWindowWidth();
  return(
    <>
      <aside className='aside-section'>
        <div className='container-text'>
          <Image
            src={icon}
            width={60}
            height={60}
            alt={altIcon}
            className='aside-icon'/>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className='container-img-schematics'>
          <Image src={image} alt={altImg} fill={true}/>
        </div>
      </aside>
      {
        screenWidth < screenSizes.laptop
          && <div className='container-smallArrow'>
            <SmallArrow width={'100%'} height={'100%'}/>
          </div>
      }
    </>
  );
}