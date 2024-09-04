import { useLanguageStore } from '../../../stores/languageStore';
import content from '../../../content.json';
import './schematics.css';

export default function SchematicsNav() {
  const language = useLanguageStore((state) => state.language);

  return(
    <ul className='schematics-nav'>
      <li id='diagrams'>{content[language].EmbeddedSystems.fourthSection.navSchematics.diagrams}</li>
      <li id='variants'>{content[language].EmbeddedSystems.fourthSection.navSchematics.variants}</li>
      <li id='net-classes'>{content[language].EmbeddedSystems.fourthSection.navSchematics.netClasses}</li>
      <li id='net-naming'>{content[language].EmbeddedSystems.fourthSection.navSchematics.netNaming}</li>
      <li id='detailing'>{content[language].EmbeddedSystems.fourthSection.navSchematics.detailing}</li>
    </ul>
  );
}