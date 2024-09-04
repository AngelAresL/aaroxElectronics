import { useLanguageStore } from '../../../stores/languageStore';
import content from '../../../content.json';
import './mechanical.css';

export default function MechanicalNav() {
  const language = useLanguageStore((state) => state.language);

  return(
    <ul className='mechanical-nav'>
      <li id='dfm'>{content[language].EmbeddedSystems.fourthSection.navMechanical.dfm}</li>
      <li id='mechanical'>{content[language].EmbeddedSystems.fourthSection.navMechanical.mechanical}</li>
      <li id='modeling'>{content[language].EmbeddedSystems.fourthSection.navMechanical.modeling}</li>
      <li id='prototyping'>{content[language].EmbeddedSystems.fourthSection.navMechanical.prototyping}</li>
      <li id='production'>{content[language].EmbeddedSystems.fourthSection.navMechanical.production}</li>
    </ul>
  );
}