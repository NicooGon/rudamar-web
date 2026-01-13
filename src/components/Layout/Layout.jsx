import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

// Importamos iconos. 
// CAMBIO: Quitamos FaCar y agregamos FaShip
import { 
  FaPhoneAlt, FaWhatsapp, FaEnvelope, FaShip, 
  FaBars, FaTimes, FaChevronRight 
} from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

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
          <li><Link to="/tienda" onClick={closeSidebar}>Tienda <FaChevronRight size={12}/></Link></li>
        </ul>

        <div className="sidebar-footer">
           {/* CAMBIO: Icono de barco en el botón móvil */}
           <button className="btn-sidebar-action">
             <FaShip style={{marginRight: '8px'}}/> Contactos
           </button>
        </div>
      </aside>

      {/* =======================
          HEADER PRINCIPAL
         ======================= */}
      <header className="main-header">
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

            {/* CAMBIO: Icono de barco en el botón de escritorio */}
            <button className="btn-presupuesto">
              Contactos <FaShip />
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
            <li className="nav-item"><Link to="/empresa">Empresa</Link></li>
            <li className="nav-item"><Link to="/servicios">Servicios</Link></li>
            <li className="nav-item"><Link to="/tienda">Tienda</Link></li>
            <li className="nav-item"><Link to="/galeria">Galería</Link></li>
            <li className="nav-item"><Link to="/noticias">Noticias</Link></li>
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