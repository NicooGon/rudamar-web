import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link si son rutas internas
import { FaShip, FaTools } from 'react-icons/fa'; // Iconos
import './Banner.css'; // Importante: ruta al CSS

const BannerPrincipal = () => {
  return (
    <div className="hero-section">
      {/* Capa oscura para que el texto resalte */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        {/* Subtítulo pequeño arriba */}
        <span className="hero-subtitle">Mecánica Naval & Mantenimiento</span>
        
        {/* Título Grande */}
        <h1 className="hero-title">
          Servicio Profesional para tu Embarcación
        </h1>
        
        {/* Botones de Acción */}
        <div className="hero-buttons">
          <Link to="/servicios" className="btn-hero btn-primary">
            <FaTools /> Nuestros Servicios
          </Link>
          
          <Link to="/galeria" className="btn-hero btn-outline">
            <FaShip /> Navega a la Galeria
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerPrincipal;