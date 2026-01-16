import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

// 1. IMPORTAMOS EL LOGO
import logoImg from '../../images/logo.png'; 

import { 
  FaPhoneAlt, FaWhatsapp, FaEnvelope, FaShip, 
  FaBars, FaTimes, FaChevronRight 
} from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

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
          <li><Link to="/" onClick={closeSidebar}>Inicio <FaChevronRight size={12}/></Link></li>
          <li><Link to="/Historia" onClick={closeSidebar}>Trayectoria <FaChevronRight size={12}/></Link></li>
          <li><Link to="/servicios" onClick={closeSidebar}>Servicios <FaChevronRight size={12}/></Link></li>
          <li><Link to="/galeria" onClick={closeSidebar}>Galeria <FaChevronRight size={12}/></Link></li>
          <li><Link to="/tienda" onClick={closeSidebar}>Tienda <FaChevronRight size={12}/></Link></li>
        </ul>

        <div className="sidebar-footer">
           <button className="btn-sidebar-action">
             <FaShip style={{marginRight: '8px'}}/> Contactos
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
            
            <div className="info-item">
              <div className="icon-box"><FaPhoneAlt /></div>
              <div className="info-text">
                <a
                  href="tel:+34686794141"
                  className="label"
                >
                  Teléfono
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><FaWhatsapp /></div>
              <div className="info-text">
                <a
                  href="https://wa.me/34686794141?text=Hola,%20quiero%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label"
                >
                  Whatsapp
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><FaEnvelope /></div>
              <div className="info-text">
                <a
                  href="mailto:rudacid@yahoo.es"
                  className="label"
                >
                  Email
                </a>
              </div>
            </div>

            <button className="btn-presupuesto">
              Navegar <FaShip />
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
            <li className="nav-item active"><Link to="/">Inicio</Link></li>
            <li className="nav-item"><Link to="/Historia">Trayectoria</Link></li>
            <li className="nav-item"><Link to="/servicios">Servicios</Link></li>
            <li className="nav-item"><Link to="/tienda">Tienda</Link></li>
            <li className="nav-item"><Link to="/galeria">Galería</Link></li>
          </ul>
        </div>
      </nav>

      {/* CONTENIDO */}
      <main className="main-content">
        {children}
      </main>

      <footer style={{ background: '#1a252f', color: 'white', padding: '1px', textAlign: 'center', marginTop: 'auto' }}>
        <p>© 2026 Servicio Oficial RUDAMAR</p>
      </footer>
    </div>
  );
};

export default Layout;