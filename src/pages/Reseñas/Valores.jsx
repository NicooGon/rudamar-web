// src/pages/Reseñas/Valores.jsx
import React from 'react';
import { FaTools, FaSearch, FaHandshake, FaAward } from 'react-icons/fa';
import './Reseñas.css';

// 1. IMPORTAR EL HOOK
import { useTranslation } from 'react-i18next';

const Valores = () => {
  // 2. USAR EL HOOK
  const { t } = useTranslation();

  return (
    <section className="values-section">
      <div className="container values-container">
        
        <h2 
          className="values-title"
          data-aos="fade-up"
        >
          {t('values_title')}
        </h2>

        <div className="values-grid">
          
          {/* VALOR 1: EXCELENCIA */}
          <div 
            className="value-card"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div 
              className="value-icon-box"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <FaTools />
            </div>
            <h4>{t('val_tech_title')}</h4>
            <p>
              {t('val_tech_desc')}
            </p>
          </div>

          {/* VALOR 2: TRANSPARENCIA */}
          <div 
            className="value-card"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div 
              className="value-icon-box"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <FaSearch />
            </div>
            <h4>{t('val_trans_title')}</h4>
            <p>
              {t('val_trans_desc')}
            </p>
          </div>

          {/* VALOR 3: ASESORÍA */}
          <div 
            className="value-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div 
              className="value-icon-box"
              data-aos="fade-down"
              data-aos-delay="450"
            >
              <FaHandshake />
            </div>
            <h4>{t('val_advice_title')}</h4>
            <p>
              {t('val_advice_desc')}
            </p>
          </div>

          {/* VALOR 4: COMPROMISO */}
          <div 
            className="value-card"
            data-aos="zoom-in"
            data-aos-delay="450"
          >
            <div 
              className="value-icon-box"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <FaAward />
            </div>
            <h4>{t('val_commit_title')}</h4>
            <p>
              {t('val_commit_desc')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Valores;