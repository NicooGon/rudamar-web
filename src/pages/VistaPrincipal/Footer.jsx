import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF, FaShip } from 'react-icons/fa';
import './Footer.css';

// Importa una imagen oscura de fondo (puede ser una del taller o el banner oscurecido)
import footerBg from '../../images/banner.jpeg'; 
// Importa tu logo si quieres usar imagen, o usa texto
import logoImg from '../../images/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer-section" style={{ backgroundImage: `url(${footerBg})` }}>
      {/* Overlay oscuro para que el texto se lea bien sobre la imagen */}
      <div className="footer-overlay"></div>

      <div className="container footer-content">
        
        {/* COLUMNA 1: MARCA Y LLAMADA A LA ACCIÓN */}
        <div className="footer-brand">
            {/* Puedes usar img o texto */}
            <div className="footer-logo-area">
                 <h2 className="brand-title">RUDAMAR</h2>
                 <span className="brand-subtitle">Servicio Oficial Narwhal</span>
            </div>
            
            <p className="brand-desc">
                En nuestro taller nos caracterizamos por tener un equipo altamente cualificado. 
                Ofrecemos soluciones integrales en mecánica naval, fibra de vidrio y mantenimiento de embarcaciones en la Costa del Sol.
            </p>

            <a href="/contacto" className="btn-footer-action">
                Solicitar Presupuesto <FaShip />
            </a>
        </div>

        {/* COLUMNA 2: CONTACTO (Alineado a la derecha visualmente) */}
        <div className="footer-contact">
            <h3 className="footer-heading">Contacto</h3>
            <div className="heading-line"></div>

            <ul className="contact-list">
                <li>
                    <div className="icon-wrap"><FaMapMarkerAlt /></div>
                    <div className="text-wrap">
                        <span className="label">Dirección</span>
                        <p>Calle Diderot 15, Nave 165<br/>29004 Málaga, España</p>
                    </div>
                </li>

                <li>
                    <div className="icon-wrap"><FaPhoneAlt /></div>
                    <div className="text-wrap">
                        <span className="label">Teléfono</span>
                        <p>928 417 651 - 625 195 905</p>
                    </div>
                </li>

                <li>
                    <div className="icon-wrap"><FaEnvelope /></div>
                    <div className="text-wrap">
                        <span className="label">Email</span>
                        <p>info@rudamar.com</p>
                    </div>
                </li>
            </ul>

            <div className="footer-socials">
                <a href="#" className="social-btn"><FaWhatsapp /></a>
                <a href="#" className="social-btn"><FaInstagram /></a>
                <a href="#" className="social-btn"><FaFacebookF /></a>
            </div>
        </div>

      </div>

      {/* BARRA INFERIOR COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2026 Servicio Oficial RUDAMAR. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;