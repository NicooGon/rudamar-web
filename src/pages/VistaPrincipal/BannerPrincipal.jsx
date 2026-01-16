import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShip, FaTools } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css';

const BannerPrincipal = () => {

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
          Mecánica Naval & Mantenimiento
        </span>

        <h1
          className="hero-title"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          Servicio Profesional para tu Embarcación
        </h1>

        <div className="hero-buttons">

          <Link
            to="/servicios"
            className="btn-hero btn-primary"
            data-aos="zoom-in"
            data-aos-delay="550"
          >
            <FaTools /> Nuestros Servicios
          </Link>

          <Link
            to="/galeria"
            className="btn-hero btn-outline"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <FaShip /> Navega a la Galeria
          </Link>

        </div>
      </div>
    </div>
  );
};

export default BannerPrincipal;
