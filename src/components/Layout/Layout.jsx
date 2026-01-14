import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

import { 
  FaPhoneAlt, FaWhatsapp, FaEnvelope, FaShip, 
  FaBars, FaTimes, FaChevronRight 
} from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  // Creamos una referencia para observar el banner
  const bannerObserverRef = useRef(null);
  const headerRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Efecto para observar cuando el banner sale de la vista
  useEffect(() => {
    // Buscamos el banner dentro de los children
    // Asumiendo que el primer child que tenga la clase 'hero-section' es el banner
    const banner = document.querySelector('.hero-section');
    
    if (!banner) return; // Si no hay banner, salimos

    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // Cuando el 10% del banner ya no es visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Si el banner NO está intersectando (no es visible en el viewport)
        if (!entry.isIntersecting) {
          setIsSticky(true); // Activamos sticky
        } else {
          setIsSticky(false); // Desactivamos sticky
        }
      });
    }, options);

    observer.observe(banner);
    bannerObserverRef.current = observer;

    return () => {
      if (bannerObserverRef.current) {
        bannerObserverRef.current.disconnect();
      }
    };
  }, []); // Solo se ejecuta una vez al montar

  // También podemos mantener el efecto de scroll para detectar si volvemos al top
  useEffect(() => {
    const handleScroll = () => {
      // Si estamos cerca del top, forzamos a que no sea sticky
      if (window.scrollY < 100) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <div className="sidebar-logo">RUDAMAR</div>
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        
        <ul className="sidebar-links">
          <li><Link to="/" onClick={closeSidebar}>Inicio <FaChevronRight size={12}/></Link></li>
          <li><Link to="/empresa" onClick={closeSidebar}>Empresa <FaChevronRight size={12}/></Link></li>
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
          HEADER PRINCIPAL - CON CLASE STICKY
         ======================= */}
      <header className={`main-header ${isSticky ? 'sticky' : ''}`} ref={headerRef}>
        <div className="container header-content">
          
          {/* Logo (Siempre visible) */}
          <div className="logo-area">
            <div className="logo-text">RUDAMAR</div>
          </div>

          {/* Grupo Contacto (SOLO ESCRITORIO) */}
          <div className="contact-group-desktop">
            
            <div className="info-item">
              <div className="icon-box"><FaPhoneAlt /></div>
              <div className="info-text">
                <span className="label">Teléfono</span>
                <span className="value"></span>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><FaWhatsapp /></div>
              <div className="info-text">
                <span className="label">Whatsapp</span>
                <span className="value"></span>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><FaEnvelope /></div>
              <div className="info-text">
                <span className="label">Email</span>
                <span className="value"></span>
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
          NAVBAR (SOLO ESCRITORIO) - AHORA SE QUEDA STICKY
         ======================= */}
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item active"><Link to="/">Inicio</Link></li>
            <li className="nav-item"><Link to="/empresa">Empresa</Link></li>
            <li className="nav-item"><a href="#servicios">Servicios</a></li>
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