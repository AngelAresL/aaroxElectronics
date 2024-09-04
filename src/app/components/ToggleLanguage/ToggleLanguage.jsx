import './toggleLanguage.css';
import { useLanguageStore } from '../../stores/languageStore.jsx';

export default function ToggleLanguage() {
  const language = useLanguageStore((state) => state.language);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);

  return (
    <div className="check-language">
      <input className="toggle" id="toggle" type="checkbox" checked={language === 'EN'} onChange={toggleLanguage}/>
      <label className="toggle-btn" htmlFor="toggle"></label>
    </div>
  );
}