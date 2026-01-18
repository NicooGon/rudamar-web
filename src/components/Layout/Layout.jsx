import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importamos el hook de traducción
import './Layout.css';

// 1. IMPORTAMOS EL LOGO
import logoImg from '../../images/logo.png'; 

// 2. IMPORTAMOS EL SWITCH DE IDIOMA
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'; // Importamos el componente LanguageSwitch

// 3. IMPORTAMOS EL COMPONENTE FOOTER Y LOS BOTONES FLOTANTES
import Footer from '../../pages/VistaPrincipal/Footer'; // Importamos el nuevo Footer
import FloatingButtons from '../FloatingButtons/FloatingButtons'; // Importamos los FloatingButtons

import { 
  FaPhoneAlt, FaWhatsapp, FaEnvelope, FaShip, 
  FaBars, FaTimes, FaChevronRight 
} from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  
  // Usamos el hook de traducción
  const { t } = useTranslation(); // Inicializamos la traducción

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Detectar si estamos en la página principal
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // LÓGICA DIFERENTE PARA PÁGINA PRINCIPAL VS OTRAS PÁGINAS
          if (isHomePage) {
            // EN PÁGINA PRINCIPAL: Solo se oculta cuando el banner sale de vista
            const banner = document.querySelector('.hero-section');
            
            if (banner) {
              const bannerRect = banner.getBoundingClientRect();
              const bannerBottom = bannerRect.bottom;
              
              // Si el banner ha salido completamente de la vista
              if (bannerBottom <= 0) {
                setIsSticky(true);
              } else {
                setIsSticky(false);
              }
            }
          } else {
            // EN OTRAS PÁGINAS: Se oculta inmediatamente al bajar
            if (currentScrollY > 100 && currentScrollY > lastScrollY) {
              // Bajando: ocultar
              setIsSticky(true);
            } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
              // Subiendo o en top: mostrar
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isHomePage]);

  // Resetear sticky al cambiar de página
  useEffect(() => {
    setIsSticky(false);
    window.scrollTo(0, 0);
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
           {/* Logo en Sidebar también */}
          <div className="sidebar-logo">
             <img src={logoImg} alt="Rudamar" style={{height: '35px'}} />
          </div>
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        
        <ul className="sidebar-links">
          {/* Usamos t() para traducir los enlaces del sidebar */}
          <li><Link to="/" onClick={closeSidebar}>{t('nav_inicio')} <FaChevronRight size={12}/></Link></li>
          <li><Link to="/Historia" onClick={closeSidebar}>{t('nav_trayectoria')} <FaChevronRight size={12}/></Link></li>
          <li><a href="#servicios" onClick={closeSidebar}>{t('nav_servicios')} <FaChevronRight size={12}/></a></li>
          <li><Link to="/galeria" onClick={closeSidebar}>{t('nav_galeria')} <FaChevronRight size={12}/></Link></li>
          {/* Agregamos el switch de idioma al menú móvil también si lo deseas, o déjalo solo en desktop */}
          <li style={{marginTop: '20px', paddingLeft: '20px'}}>
             <LanguageSwitch />
          </li>
        </ul>

        <div className="sidebar-footer">
           <button className="btn-sidebar-action">
             <FaShip style={{marginRight: '8px'}}/> {t('btn_contacto')}
           </button>
        </div>
      </aside>

      {/* =======================
          HEADER PRINCIPAL - CON CLASE STICKY (TU LÓGICA)
         ======================= */}
      <header className={`main-header ${isSticky ? 'sticky' : ''}`}>
        <div className="container header-content">
          
          {/* Logo (Siempre visible) - AQUI IMPLEMENTAMOS LA IMAGEN */}
          <div className="logo-area">
             <Link to="/" className="brand-link">
                <img 
                  src={logoImg} 
                  alt="Logo Rudamar" 
                  className="header-logo-img" 
                />
                <span className="logo-text">RUDAMAR</span>
             </Link>
          </div>

          {/* Grupo Contacto (SOLO ESCRITORIO) */}
          <div className="contact-group-desktop">
            
            {/* 1. AQUÍ PONEMOS EL SWITCH (A la izquierda del primer info-item) */}
            <LanguageSwitch />

            <div className="info-item">
              <div className="icon-box">
                <FaWhatsapp />
              </div>
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
              <div className="icon-box">
                <FaEnvelope  />
              </div>
              <div className="info-text">
                <span className="label">Email</span>
              
                <a
                  href="https://wa.me/34686794141?text=Hola,%20quiero%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="value"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  rudamarspain@gmail.com
                </a>
              </div>
            </div>



            <button className="btn-presupuesto">
              {/* Usamos t() para traducir el botón */}
              {t('btn_presupuesto')} <FaShip />
            </button>
          </div>

          {/* Botón Hamburguesa (SOLO MÓVIL) */}
          <button className="hamburger-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </header>

      {/* =======================
          NAVBAR (SOLO ESCRITORIO)
         ======================= */}
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-list">
            {/* Usamos t() para traducir los enlaces del navbar */}
            <li className="nav-item active"><Link to="/">{t('nav_inicio')}</Link></li>
            <li className="nav-item"><Link to="/Historia">{t('nav_trayectoria')}</Link></li>
            <li className="nav-item"><a href="#servicios">{t('nav_servicios')}</a></li>
            <li className="nav-item"><Link to="/galeria">{t('nav_galeria')}</Link></li>
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