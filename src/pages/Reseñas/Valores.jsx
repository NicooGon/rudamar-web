// src/pages/Reseñas/Valores.jsx
import React from 'react';
import { FaTools, FaSearch, FaHandshake, FaAward } from 'react-icons/fa';
import './Reseñas.css'; // Importamos los estilos (asegúrate de que estén ahí)

const Valores = () => {
  return (
    <section className="values-section">
      <div className="container values-container">
        <h2 className="values-title">Nuestros Valores</h2>
        
        <div className="values-grid">
          {/* Tarjeta 1 */}
          <div className="value-card">
            <div className="value-icon-box"><FaTools /></div>
            <h4>Excelencia Técnica</h4>
            <p>Comprometidos con la perfección técnica en cada reparación, utilizando materiales de primera calidad.</p>
          </div>

          {/* Tarjeta 2 */}
          <div className="value-card">
            <div className="value-icon-box"><FaSearch /></div>
            <h4>Transparencia</h4>
            <p>Valoramos la confianza. Diagnósticos claros y presupuestos sin sorpresas para cada cliente.</p>
          </div>

          {/* Tarjeta 3 */}
          <div className="value-card">
            <div className="value-icon-box"><FaHandshake /></div>
            <h4>Asesoría</h4>
            <p>No solo reparamos, aconsejamos para el mejor mantenimiento de tu embarcación a largo plazo.</p>
          </div>

          {/* Tarjeta 4 */}
          <div className="value-card">
            <div className="value-icon-box"><FaAward /></div>
            <h4>Compromiso</h4>
            <p>Tu seguridad en el mar es nuestra prioridad. Garantía y calidad en cada trabajo realizado.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Valores;