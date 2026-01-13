import React, { useState, useEffect } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa'; 
import Layout from '../../components/Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Galeria.css';

import headerBg from '../../images/banner.jpeg'; 

const Galeria = () => {
  const [imagesList, setImagesList] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(''); 
  const [selectedItem, setSelectedItem] = useState(null); 

  // --- DICCIONARIO ACTUALIZADO (Con Mayúsculas) ---
  // Las claves deben ser IGUALES al nombre de tu carpeta
  const categoryLabels = {
    '1NAUTICAS': 'Neumáticas y PVC',
    '2MOTORES': 'Motores',
    '3TALLER': 'Nuestro Taller',
    '4PADDLE_SURF': 'Paddle Surf',
    '5ANTES_DESPUES': 'Antes y Después'
  };

  useEffect(() => {
    const mediaGlob = import.meta.glob('../../images/Galeria/**/*.{png,jpg,jpeg,svg,mp4,webm}', { eager: true });

    const loadedMedia = [];
    const foundCategories = new Set(); 

    for (const path in mediaGlob) {
      const parts = path.split('/');
      const categoryName = parts[parts.length - 2]; 
      
      foundCategories.add(categoryName);
      
      const isVideo = path.endsWith('.mp4') || path.endsWith('.webm');

      loadedMedia.push({
        id: path,
        src: mediaGlob[path].default,
        category: categoryName,
        type: isVideo ? 'video' : 'image',
        alt: `Media de ${categoryName}`
      });
    }

    setImagesList(loadedMedia);
    
    // Ordenar categorías
    const sortedCategories = Array.from(foundCategories).sort();
    setCategories(sortedCategories);

    // Seleccionar la primera categoría automáticamente
    if (sortedCategories.length > 0) {
      const firstCat = sortedCategories[0];
      setActiveCategory(firstCat);
      const initialFilter = loadedMedia.filter(item => item.category === firstCat);
      setFilteredImages(initialFilter);
    }

  }, []); 

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    const filtered = imagesList.filter(img => img.category === category);
    setFilteredImages(filtered);
  };

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <Layout>
      <PageHeader title="Nuestra Galería" bgImage={headerBg} />

      <div className="gallery-container container">
        
        {/* BOTONES DE FILTRO */}
        <div className="gallery-filters">
          {categories.map((cat, index) => (
            <button 
              key={index} 
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleFilterClick(cat)}
            >
              {/* --- LA MAGIA ESTÁ AQUÍ --- */}
              {/* 1. Busca en el diccionario. 
                  2. Si no encuentra, toma el nombre de la carpeta y LE BORRA LOS NÚMEROS iniciales. 
                     Ej: "3TALLER" se convierte en "TALLER" automáticamente. */}
              {categoryLabels[cat] || cat.replace(/^[0-9]+/, '')}
            </button>
          ))}
        </div>

        {/* REJILLA */}
        <div className="gallery-grid">
          {filteredImages.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openModal(item)}
            >
              {item.type === 'video' ? (
                <>
                  <video src={item.src} muted loop={false} playsInline />
                  <div className="video-indicator"><FaPlay /></div>
                </>
              ) : (
                <img src={item.src} alt={item.alt} loading="lazy" />
              )}

              <div className="gallery-overlay">
                <span>Ver {item.type === 'video' ? 'Video' : 'Imagen'}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
            <div style={{textAlign: 'center', width: '100%', padding: '40px'}}>
              <p>Cargando galería...</p>
            </div>
        )}

      </div>

      {/* MODAL */}
      {selectedItem && (
        <div className="lightbox-overlay" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeModal}>
              <FaTimes />
            </button>

            {selectedItem.type === 'video' ? (
              <video 
                src={selectedItem.src} 
                controls 
                autoPlay 
                className="lightbox-media"
              />
            ) : (
              <img 
                src={selectedItem.src} 
                alt={selectedItem.alt} 
                className="lightbox-media"
              />
            )}
          </div>
        </div>
      )}

    </Layout>
  );
};

export default Galeria;