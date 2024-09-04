import { useLanguageStore } from '../../stores/languageStore';
import content from '../../content.json';
import components from '../../assets/images/power/fifthSection/components.webp';
import Image from 'next/image';
import { Work_Sans } from 'next/font/google';
import './fifthSection.css';

const workSans = Work_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

export default function FifthSection() {
  const language = useLanguageStore((state) => state.language);

  return(
    <section className={`power-fifthSection ${workSans.className}`}>
      <h2 className='power-fifthSection-title'>
        {content[language].PowerElectronics.fifthSection.title.text1}
        <span> {content[language].PowerElectronics.fifthSection.title.components} </span>
        {content[language].PowerElectronics.fifthSection.title.text2}
        <span> {content[language].PowerElectronics.fifthSection.title.toolbox} </span>
      </h2>
      <h3 className='power-fifthSection-subtitle'>{content[language].PowerElectronics.fifthSection.subtitle}</h3>
      <ol className='fifthSection-list'>
        <li>{content[language].PowerElectronics.fifthSection.listItems.siSiC}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.mosfets}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.nonIsolated}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.isolated}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.magnetics}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.cmcs}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.pfc}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.flyback}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.llc}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.bidirectional}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.psfb}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.resonant}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.costEffec}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.emc}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.controllers}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.pfcCont}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.pfcyllc}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.llcCont}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.psfbcont}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.multiphase}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.buck}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.orIng}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.sensors}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.opAmp}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.shortCirc}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.ti}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.thermal}</li>
        <li>{content[language].PowerElectronics.fifthSection.listItems.water}</li>
      </ol>
      <aside className='aside-calculations'> 
        <div className='container-calculations'>
          <Image src={components} alt='Calculations Dashboard' fill={true}/>
        </div>
      </aside>
    </section>
  );
}