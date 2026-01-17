import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar botón si bajamos más de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calcular progreso del scroll para el círculo
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="floating-container">
      
      {/* BOTÓN WHATSAPP (Siempre visible) */}
      <a 
        href="https://wa.me/34686794141" // TU NÚMERO AQUÍ
        target="_blank" 
        rel="noopener noreferrer" 
        className="float-btn whatsapp-btn"
        title="Contactar por WhatsApp"
      >
        <FaWhatsapp />
        <span className="whatsapp-pulse"></span>
      </a>
    </div>
  );
};

export default FloatingButtons;