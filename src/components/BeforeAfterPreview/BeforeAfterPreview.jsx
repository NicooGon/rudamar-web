import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

import './BeforeAfterPreview.css';

// IMPORTAMOS LAS IMÁGENES DEL CLIENTE B
import imgAntes from '../../images/Galeria/Antes_Despues/clienteB_01_antes.jpg';
import imgDespues from '../../images/Galeria/Antes_Despues/clienteB_02_despues.jpg';

const BeforeAfterPreview = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section 
      className="ba-section relative w-full py-20 bg-gradient-to-b from-white to-sky-200 overflow-hidden"
    >
      {/* Elementos decorativos sutiles para unir con la siguiente sección */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-[10%] w-[30%] h-[30%] bg-sky-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container ba-grid relative z-10">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="ba-content" data-aos="fade-right">
          <span className="block text-base lg:text-lg font-bold uppercase tracking-widest text-[var(--color-brand-primary)] font-oswald mb-3">
            {t('ba_preview_subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-main)] font-oswald uppercase leading-tight mb-6">
            {t('ba_preview_title')}
          </h2>
          <p className="text-[var(--color-text-main)] text-lg leading-relaxed font-roboto mb-8 max-w-xl">
            {t('ba_preview_desc')}
          </p>
          <Link to="/galeria" className="btn-ba-action font-oswald tracking-wide">
            {t('ba_preview_btn')} <FaArrowRight />
          </Link>
        </div>

        {/* COLUMNA DERECHA: SLIDER */}
        <div className="ba-visual" data-aos="fade-left">
          <span className="ba-badge left font-oswald uppercase tracking-wider">{t('ba_label_before')}</span>
          <span className="ba-badge right font-oswald uppercase tracking-wider">{t('ba_label_after')}</span>

          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage 
                src={imgAntes} 
                srcSet={imgAntes} 
                alt="Antes de la reparación" 
              />
            }
            itemTwo={
              <ReactCompareSliderImage 
                src={imgDespues} 
                srcSet={imgDespues} 
                alt="Después de la reparación" 
              />
            }
            style={{ width: '100%', height: '100%' }}
          />
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterPreview;