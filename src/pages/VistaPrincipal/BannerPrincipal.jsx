import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShip, FaTools } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css';

// 1. IMPORTAR EL HOOK
import { useTranslation } from 'react-i18next';

const BannerPrincipal = () => {
  // 2. USAR EL HOOK
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="hero-section">

      <div 
        className="hero-overlay"
        data-aos="fade"
      ></div>

      <div className="hero-content">

        <span
          className="hero-subtitle"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {/* TEXTO TRADUCIDO */}
          {t('banner_subtitle')}
        </span>

        <h1
          className="hero-title"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          {/* TEXTO TRADUCIDO */}
          {t('banner_title')}
        </h1>

        <div className="hero-buttons">

          <a
            href="#servicios"
            className="btn-hero btn-primary"
            data-aos="zoom-in"
            data-aos-delay="550"
          >
            {/* TEXTO TRADUCIDO */}
            <FaTools /> {t('banner_btn_services')}
          </a>

          <Link
            to="/galeria"
            className="btn-hero btn-outline"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            {/* TEXTO TRADUCIDO */}
            <FaShip /> {t('banner_btn_gallery')}
          </Link>

        </div>
      </div>
    </div>
  );
};

export default BannerPrincipal;