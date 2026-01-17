import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitch.css';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (e) => {
    const newLang = e.target.checked ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="language-switch-container">
      <span className={`lang-label ${i18n.language === 'es' ? 'active' : ''}`}>ES</span>
      
      <label className="switch">
        <input 
          type="checkbox" 
          onChange={toggleLanguage} 
          checked={i18n.language === 'en'} // Si es inglés, el switch está activado
        />
        <span className="slider round"></span>
      </label>
      
      <span className={`lang-label ${i18n.language === 'en' ? 'active' : ''}`}>EN</span>
    </div>
  );
};

export default LanguageSwitch;