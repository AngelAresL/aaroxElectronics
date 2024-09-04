import { useLanguageStore } from '../../../stores/languageStore';
import content from '../../../content.json';
import './components.css';

export default function ComponentsNav() {
  const language = useLanguageStore((state) => state.language);

  return(
    <ul className='components-nav'>
      <li id='layerStack'>{content[language].EmbeddedSystems.fourthSection.navComponents.layer}</li>
      <li id='signal'>{content[language].EmbeddedSystems.fourthSection.navComponents.signal}</li>
      <li id='impedance'>{content[language].EmbeddedSystems.fourthSection.navComponents.impedance}</li>
      <li id='ddr'>{content[language].EmbeddedSystems.fourthSection.navComponents.ddr}</li>
      <li id='antena'>{content[language].EmbeddedSystems.fourthSection.navComponents.antena}</li>
    </ul>
  );
}