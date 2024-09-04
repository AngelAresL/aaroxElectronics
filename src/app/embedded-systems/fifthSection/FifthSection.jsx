import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import Image from 'next/image';
import npx from '../../assets/images/embedded/market/npx.webp';
import microchip from '../../assets/images/embedded/market/microchip.webp';
import infineon from '../../assets/images/embedded/market/infineon.webp';
import st from '../../assets/images/embedded/market/st.webp';
import renesas from '../../assets/images/embedded/market/renesas.webp';
import ti from '../../assets/images/embedded/market/ti.webp';
import yocto from '../../assets/images/embedded/sw/yocto.webp';
import qt from '../../assets/images/embedded/sw/qt.webp';
import grafana from '../../assets/images/embedded/sw/grafana.webp';
import docker from '../../assets/images/embedded/sw/docker.webp';
import wayland from '../../assets/images/embedded/sw/wayland.webp';
import buildRoot from '../../assets/images/embedded/sw/buildRoot.webp';
import CheckWindowWidth from '../../hooks/useWindowWidth';
import { screenSizes } from '../../lib/screenSizes';
import { Work_Sans } from 'next/font/google';
import './fifthSection.css';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function FifthSection() {
  const language = useLanguageStore((state) => state.language);
  const { screenWidth } = CheckWindowWidth();

  return(
    <>
      <section className='container-market'>
        <div className='market-logos'>
          <div className='container-logo'>
            <Image 
              src={npx} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
          <div className='container-logo'>
            <Image 
              src={microchip} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
          <div className='container-logo'>
            <Image 
              src={infineon} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
          <div className='container-logo'>
            <Image 
              src={st} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
          <div className='container-logo'>
            <Image 
              src={ti} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
          <div className='container-logo'>
            <Image 
              src={renesas} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
        </div>
        <div className='market'>
          <h2 className={workSans.className}>{content[language].EmbeddedSystems.fifthSection.market.title}</h2>
          <p>{content[language].EmbeddedSystems.fifthSection.market.text}</p>
        </div>
      </section>
      <section className='container-sw'>
        <div className='sw'>
          <h2 className={workSans.className}>{content[language].EmbeddedSystems.fifthSection.sw.title}</h2>
          <p>{content[language].EmbeddedSystems.fifthSection.sw.text}</p>
        </div>
        <div className='sw-logos'>
          <div className='container-logo'>
            <Image 
              src={yocto} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
          <div className='container-logo'>
            <Image 
              src={qt} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
          <div className='container-logo'>
            <Image 
              src={grafana} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
          <div className='container-logo'>
            <Image 
              src={buildRoot} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
          <div className='container-logo'>
            <Image 
              src={docker} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
          <div className='container-logo'>
            <Image 
              src={wayland} 
              alt='NPX logo' 
              height={screenWidth <= screenSizes.laptop ? 100 : 150} 
              width={screenWidth <= screenSizes.laptop ? 100 : 150}/>
          </div>
        </div>
      </section>
    </>
  );
}