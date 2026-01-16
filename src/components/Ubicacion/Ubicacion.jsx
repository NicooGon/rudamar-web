import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaDirections } from 'react-icons/fa';
import './Ubicacion.css';

const Ubicacion = () => {
  return (
    <section className="location-section">
      
      {/* 1. EL MAPA DE FONDO (Ocupa todo el ancho) */}
      <div className="map-background">
        {/* REEMPLAZA EL 'src' CON EL TUYO DE GOOGLE MAPS (Compartir -> Insertar mapa) */}
        <iframe 
          title="Ubicación Rudamar"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4656.923372868926!2d-4.473338597942474!3d36.69376887810722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9fc0e20734f%3A0x33a1948d7148b2b2!2sRudamar-Spain!5e0!3m2!1ses!2sve!4v1768516642354!5m2!1ses!2sve" 
          width="40%" 
          height="40%" 
          style={{ border: 0, filter: 'grayscale(0%)' }} // Puedes cambiar grayscale a 100% para un look blanco y negro moderno
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 2. LA TARJETA FLOTANTE (Glassmorphism / Moderna) */}
      <div className="container location-container">
        <div className="location-card">
          <div className="card-header">
            <h3 className="card-title">Visítanos</h3>
            <div className="card-line"></div>
          </div>

          <div className="card-content">
            <div className="info-row">
              <div className="icon-circle"><FaMapMarkerAlt /></div>
              <div>
                <h4>Dirección</h4>
                <p>Calle Diderot 15, Nave 165<br/>29004 Málaga, España</p>
              </div>
            </div>

            <div className="info-row">
              <div className="icon-circle"><FaClock /></div>
              <div>
                <h4>Horario</h4>
                <p>Lunes - Viernes: 8:00 - 18:00<br/>Sábados: Con Cita Previa</p>
              </div>
            </div>

            <div className="info-row">
              <div className="icon-circle"><FaPhoneAlt /></div>
              <div>
                <h4>Contacto</h4>
                <p>+34 928 417 651</p>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/jdvHxRb28WD3Kykb7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-directions"
          >
            <FaDirections /> Cómo llegar
          </a>
        </div>
      </div>

    </section>
  );
};

export default Ubicacion;