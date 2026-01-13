import React from 'react';
import './PageHeader.css';

// Este componente recibe "title" (el texto) y "bgImage" (la imagen de fondo)
const PageHeader = ({ title, bgImage }) => {
  return (
    <div 
      className="page-header"
      // Si pasas una imagen, la usa. Si no, usa un color gris por defecto.
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'background-color: #333' }}
    >
      <div className="page-header-overlay"></div>
      <h1 className="page-header-title">{title}</h1>
    </div>
  );
};

export default PageHeader;