import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF, FaShip } from 'react-icons/fa';
import './Footer.css';

// 1. IMPORTAR EL HOOK DE TRADUCCIÓN
import { useTranslation } from 'react-i18next';

// Importa una imagen oscura de fondo (puede ser una del taller o el banner oscurecido)
import footerBg from '../../images/banner.jpeg'; 
// Importa tu logo si quieres usar imagen, o usa texto
import logoImg from '../../images/logo.png'; 

const Footer = () => {
  // 2. USAR EL HOOK
  const { t } = useTranslation();

  return (
    <footer className="footer-section" style={{ backgroundImage: `url(${footerBg})` }}>
      {/* Overlay oscuro para que el texto se lea bien sobre la imagen */}
      <div className="footer-overlay"></div>

      <div className="container footer-content">
        
        {/* COLUMNA 1: MARCA Y LLAMADA A LA ACCIÓN */}
        <div className="footer-brand">
            <div className="footer-logo-area">
                 {/* Si prefieres usar la imagen del logo: */}
                 {/* <img src={logoImg} alt="Rudamar Logo" className="footer-logo-img" /> */}
                 <h2 className="brand-title">RUDAMAR</h2>
                 <span className="brand-subtitle">{t('footer_subtitle')}</span>
            </div>
            
            <p className="brand-desc">
                {t('footer_desc')}
            </p>

            <a href="/menu#contactanos" className="btn-footer-action">
                {t('footer_btn_quote')} <FaShip />
            </a>
        </div>

        {/* COLUMNA 2: CONTACTO */}
        <div className="footer-contact">
            <h3 className="footer-heading">{t('footer_contact_heading')}</h3>
            <div className="heading-line"></div>

            <ul className="contact-list">
                <li>
                    <div className="icon-wrap"><FaMapMarkerAlt /></div>
                    <div className="text-wrap">
                        <span className="label">{t('footer_label_address')}</span>
                        <p>Calle Diderot 15, Nave 165<br/>29004 Málaga, España</p>
                    </div>
                </li>

                <li>
                    <div className="icon-wrap"><FaPhoneAlt /></div>
                    <div className="text-wrap">
                        <span className="label">{t('footer_label_phone')}</span>
                        <p>928 417 651 - 625 195 905</p>
                    </div>
                </li>

                <li>
                    <div className="icon-wrap"><FaEnvelope /></div>
                    <div className="text-wrap">
                        <span className="label">{t('footer_label_email')}</span>
                        <p>rudamarspain@gmail.com</p>
                    </div>
                </li>
            </ul>

            <div className="footer-socials">
                <a href="https://wa.me/34686794141" className="social-btn"><FaWhatsapp /></a>
                <a href="https://www.instagram.com/rudamar_spain_/" className="social-btn"><FaInstagram /></a>
                <a href="https://www.facebook.com/share/14SiM2fDXZz/" className="social-btn"><FaFacebookF /></a>
            </div>
        </div>

      </div>

      {/* BARRA INFERIOR COPYRIGHT */}
      <div className="footer-bottom">
        <p>{t('footer_copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;