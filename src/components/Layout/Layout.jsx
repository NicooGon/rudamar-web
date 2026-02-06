import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Layout.css';

// 1. IMPORTAR HashLink
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

  // --- FUNCIÓN PARA EL OFFSET DEL SCROLL (IMPORTANTE PARA MENU PEGAJOSO) ---
  // Esto evita que el menú tape el título cuando navegas a #servicios
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -100; // Ajusta este valor según la altura de tu header (ej. -80 o -100)
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  // --- LÓGICA DE SCROLL RESTORATION (SOLUCIÓN A TU PROBLEMA DE "MITAD DE PÁGINA") ---
  useEffect(() => {
    // 1. Resetear estado sticky al cambiar de ruta
    setIsSticky(false); 

    // 2. Si la URL NO tiene un hash (como #servicios), SUBIR AL INICIO (0,0)
    // Esto arregla que aparezcas a mitad de página al cambiar de vista.
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
    // Si TIENE hash, HashLink se encargará del scroll, así que no hacemos nada aquí.
    
  }, [location]); // Se ejecuta cada vez que cambias de ruta o hash


  // --- LÓGICA DE STICKY HEADER ---
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (isHomePage) {
            const banner = document.querySelector('.hero-section'); 
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
              setIsSticky(true); 
            } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
              setIsSticky(false); 
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
            {/* Usamos scrollWithOffset para un ajuste perfecto */}
            <HashLink to="/#servicios" scroll={scrollWithOffset} onClick={closeSidebar}>
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
                  href="mailto:rudamarspain@gmail.com" 
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
            
            {/* INICIO */}
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <HashLink smooth to="/#top">
                {t('nav_inicio')}
              </HashLink>
            </li>
            
            {/* TRAYECTORIA */}
            <li className={`nav-item ${location.pathname === '/Historia' ? 'active' : ''}`}>
              <Link to="/Historia">
                {t('nav_trayectoria')}
              </Link>
            </li>
            
            {/* SERVICIOS - Usamos scrollWithOffset */}
            <li className="nav-item">
              <HashLink to="/#servicios" scroll={scrollWithOffset}>
                {t('nav_servicios')}
              </HashLink>
            </li>
            
            {/* GALERÍA */}
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