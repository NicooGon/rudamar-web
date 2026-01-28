import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Layout.css';

// 1. IMPORTAR HashLink (Clave para solucionar tu problema)
import { HashLink } from 'react-router-hash-link';

// IMÁGENES
import logoImg from '../../images/logo_nuevo.png'; 

// COMPONENTES
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

// ICONOS
import { 
  FaPhoneAlt, FaWhatsapp, FaEnvelope, FaShip, 
  FaBars, FaTimes, FaChevronRight 
} from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { t } = useTranslation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const isHomePage = location.pathname === '/';

  // --- LÓGICA DE SCROLL (Sticky Header) ---
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (isHomePage) {
            const banner = document.querySelector('.hero-section'); // Asegúrate que tu banner tenga esta clase
            if (banner) {
              const bannerRect = banner.getBoundingClientRect();
              if (bannerRect.bottom <= 0) {
                setIsSticky(true);
              } else {
                setIsSticky(false);
              }
            }
          } else {
            // En otras páginas
            if (currentScrollY > 100 && currentScrollY > lastScrollY) {
              setIsSticky(true); // Bajando: ocultar (o mostrar sticky según tu CSS)
            } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
              setIsSticky(false); // Subiendo: mostrar normal
            }
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isHomePage]);

  // Resetear al cambiar de página
  useEffect(() => {
    setIsSticky(false);
    // window.scrollTo(0, 0); // HashLink maneja el scroll, a veces esto interfiere si no es necesario
  }, [location.pathname]);

  return (
    <div className="layout-container">
      
      {/* =======================
          SIDEBAR MÓVIL
         ======================= */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} 
        onClick={closeSidebar}
      ></div>

      <aside className={`sidebar-menu ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
             <img src={logoImg} alt="Rudamar" style={{height: '35px'}} />
          </div>
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        
        <ul className="sidebar-links">
          {/* USAMOS HashLink PARA NAVEGACIÓN SUAVE */}
          <li>
            <HashLink smooth to="/#top" onClick={closeSidebar}>
              {t('nav_inicio')} <FaChevronRight size={12}/>
            </HashLink>
          </li>
          <li>
            <Link to="/Historia" onClick={closeSidebar}>
              {t('nav_trayectoria')} <FaChevronRight size={12}/>
            </Link>
          </li>
          <li>
            {/* AQUÍ ESTÁ LA MAGIA: smooth to="/#servicios" */}
            <HashLink smooth to="/#servicios" onClick={closeSidebar}>
              {t('nav_servicios')} <FaChevronRight size={12}/>
            </HashLink>
          </li>
          <li>
            <Link to="/galeria" onClick={closeSidebar}>
              {t('nav_galeria')} <FaChevronRight size={12}/>
            </Link>
          </li>
          
          <li style={{marginTop: '20px', paddingLeft: '20px'}}>
             <LanguageSwitch />
          </li>
        </ul>
      </aside>

      {/* =======================
          HEADER PRINCIPAL
         ======================= */}
      <header className={`main-header ${isSticky ? 'sticky' : ''}`}>
        <div className="container header-content">
          
          {/* Logo */}
          <div className="logo-area">
             <HashLink smooth to="/#top" className="brand-link">
                <img 
                  src={logoImg} 
                  alt="Logo Rudamar" 
                  className="header-logo-img" 
                />
                <span className="logo-text">RUDAMAR</span>
             </HashLink>
          </div>

          {/* Grupo Contacto (Escritorio) */}
          <div className="contact-group-desktop">
            
            <LanguageSwitch />

            <div className="info-item">
              <div className="icon-box"><FaWhatsapp /></div>
              <div className="info-text">
                <span className="label">Whatsapp</span>
                <a
                  href="https://wa.me/34686794141?text=Hola,%20quiero%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="value"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  +34 686 79 41 41
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><FaEnvelope /></div>
              <div className="info-text">
                <span className="label">Email</span>
                <a
                  href="mailto:rudamarspain@gmail.com" // He corregido esto para que abra el correo
                  className="value"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  rudamarspain@gmail.com
                </a>
              </div>
            </div>

            <Link to="/galeria" className="btn-presupuesto">
              {t('btn_presupuesto')} <FaShip />
            </Link>
          </div>

          {/* Botón Hamburguesa */}
          <button className="hamburger-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </header>

      {/* =======================
          NAVBAR (Escritorio)
         ======================= */}
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-list">
            
            {/* INICIO: Apunta al tope de la página principal */}
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <HashLink smooth to="/#top">
                {t('nav_inicio')}
              </HashLink>
            </li>
            
            <li className={`nav-item ${location.pathname === '/Historia' ? 'active' : ''}`}>
              <Link to="/Historia">
                {t('nav_trayectoria')}
              </Link>
            </li>
            
            {/* SERVICIOS: Apunta a la sección ID en la home */}
            <li className="nav-item">
              <HashLink smooth to="/#servicios">
                {t('nav_servicios')}
              </HashLink>
            </li>
            
            <li className={`nav-item ${location.pathname === '/galeria' ? 'active' : ''}`}>
              <Link to="/galeria">
                {t('nav_galeria')}
              </Link>
            </li>

          </ul>
        </div>
      </nav>

      {/* CONTENIDO */}
      <main className="main-content">
        {children}
      </main>

    </div>
  );
};

export default Layout;