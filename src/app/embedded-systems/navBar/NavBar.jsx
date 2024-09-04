import conten from '../../content.json';
import { useLanguageStore } from '../../stores/languageStore';
import './navBar.css';

export default function NavBar({ activeSection, handleScrollSection }) {
  const language = useLanguageStore((state) => state.language);

  return(
    <nav className='nav-embedded'>
      <ul>
        <li className={activeSection === 'concept' ? 'active' : 'hidden'} onClick={() => handleScrollSection('concept')}>
          {conten[language].EmbeddedSystems.navBar.concept}
        </li>
        <li className={activeSection === 'architecture' ? 'active' : 'hidden'} onClick={() => handleScrollSection('architecture')}>
          {conten[language].EmbeddedSystems.navBar.architecture}
        </li>
        <li className={activeSection === 'calculations' ? 'active' : 'hidden'} onClick={() => handleScrollSection('calculations')}>
          {conten[language].EmbeddedSystems.navBar.calculations}
        </li>
        <li className={activeSection === 'schematics' ? 'active' : 'hidden'} onClick={() => handleScrollSection('schematics')}>
          {conten[language].EmbeddedSystems.navBar.schematic}
        </li>
        <li className={activeSection === 'market-sw' ? 'active' : 'hidden'} onClick={() => handleScrollSection('market-sw')}>
          {conten[language].EmbeddedSystems.navBar.marketSW}
        </li>
      </ul>
    </nav>
  );
}