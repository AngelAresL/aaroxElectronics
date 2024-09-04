import { useLanguageStore } from '../../stores/languageStore';
import { useSideMenuStore } from '../../stores/sideMenuStore';
import content from '../../content.json';
import './scrollButton.css';

export default function ScrollButton({ nextSection, handleScrollSection }) {
  const language = useLanguageStore((state) => state.language);
  const menuActive = useSideMenuStore((state) => state.menuActive);

  if (nextSection && !menuActive) {
    return (
      <div className='scroll' onClick={() => handleScrollSection(nextSection)}>
        <p>{content[language].EmbeddedSystems.scroll}</p>
        <span></span>
      </div>
    );
  }

  return null;
}