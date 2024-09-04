import Image from 'next/image';
import altium from '../../../assets/images/embedded/pcbTools/altium.webp';
import blender from '../../../assets/images/embedded/pcbTools/blender.webp';
import solidWorks from '../../../assets/images/embedded/pcbTools/solidWorks.webp';
import zuken from '../../../assets/images/embedded/pcbTools/zuken.webp';
import CheckWindowWidth from '../../../hooks/useWindowWidth';
import { screenSizes } from '../../../lib/screenSizes';
import './pcbTools.css';

export default function PcbTools() {
  const { screenWidth } = CheckWindowWidth();

  return(
    <>
      <div>
        <Image 
          src={altium} 
          height={screenWidth >= screenSizes.laptop ? 100 : 50} 
          width={screenWidth >= screenSizes.laptop ? 300 : 150} 
          alt='Altium logo'/>
      </div>
      <div>
        <Image 
          src={zuken} 
          height={screenWidth >= screenSizes.laptop ? 100 : 50} 
          width={screenWidth >= screenSizes.laptop ? 300 : 150} 
          alt='Zuken logo'/>
      </div>
      <div>
        <Image 
          src={solidWorks} 
          height={screenWidth >= screenSizes.laptop ? 100 : 50} 
          width={screenWidth >= screenSizes.laptop ? 300 : 150} 
          alt='SolidWorks logo'/>
      </div>
      <div>
        <Image 
          src={blender} 
          height={screenWidth >= screenSizes.laptop ? 100 : 50} 
          width={screenWidth >= screenSizes.laptop ? 300 : 150} 
          alt='Blender logo'/>
      </div>
    </>
  );
}