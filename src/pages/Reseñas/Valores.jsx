// src/pages/Reseñas/Valores.jsx
import React from 'react';
import { FaTools, FaSearch, FaHandshake, FaAward } from 'react-icons/fa';
import './Reseñas.css';

const Valores = () => {
  return (
    <section className="values-section">
      <div className="container values-container">
        
        <h2 
          className="values-title"
          data-aos="fade-up"
        >
          Nuestros Valores
        </h2>

        <div className="values-grid">
          
          <div 
            className="value-card"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div 
              className="value-icon-box"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <FaTools />
            </div>
            <h4>Excelencia Técnica</h4>
            <p>
              Comprometidos con la perfección técnica en cada reparación, utilizando materiales de primera calidad.
            </p>
          </div>

          <div 
            className="value-card"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div 
              className="value-icon-box"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <FaSearch />
            </div>
            <h4>Transparencia</h4>
            <p>
              Valoramos la confianza. Diagnósticos claros y presupuestos sin sorpresas para cada cliente.
            </p>
          </div>

          <div 
            className="value-card"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div 
              className="value-icon-box"
              data-aos="fade-down"
              data-aos-delay="450"
            >
              <FaHandshake />
            </div>
            <h4>Asesoría</h4>
            <p>
              No solo reparamos, aconsejamos para el mejor mantenimiento de tu embarcación a largo plazo.
            </p>
          </div>

          <div 
            className="value-card"
            data-aos="zoom-in"
            data-aos-delay="450"
          >
            <div 
              className="value-icon-box"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <FaAward />
            </div>
            <h4>Compromiso</h4>
            <p>
              Tu seguridad en el mar es nuestra prioridad. Garantía y calidad en cada trabajo realizado.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Valores;
