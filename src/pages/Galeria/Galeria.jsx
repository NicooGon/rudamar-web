import React, { useState, useEffect, useCallback } from 'react';
import { FaPlay, FaTimes, FaArrowsAltH, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Nuevos iconos
import Layout from '../../components/Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Galeria.css';

import { useTranslation } from 'react-i18next';
import headerBg from '../../images/banner.jpeg'; 
import Footer from '../VistaPrincipal/Footer.jsx';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Galeria = () => {
  const { t } = useTranslation();
  const [imagesList, setImagesList] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Antes_Despues'); 
  
  // CAMBIO: Ahora controlamos el índice, no solo el objeto
  // -1 significa que el modal está cerrado
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const FIXED_CATEGORIES = [
    { id: 'Antes_Despues', labelKey: 'cat_antes_despues' },
    { id: '1Nauticas',     labelKey: 'cat_nauticas' },
    { id: '2Motores',      labelKey: 'cat_motores' },
    { id: '3Taller',       labelKey: 'cat_taller' },
    { id: '4Paddle_Surf',  labelKey: 'cat_paddle' }
  ];

  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true });

    const mediaGlob = import.meta.glob(
      '../../images/Galeria/**/*.{png,jpg,jpeg,svg,mp4,webm}',
      { eager: true }
    );

    let loadedMedia = [];
    const beforeAfterPairs = {};

    for (const path in mediaGlob) {
      const parts = path.split('/');
      const categoryName = parts[parts.length - 2]; 
      const fileName = parts[parts.length - 1];
      const isVideo = path.endsWith('.mp4') || path.endsWith('.webm');

      if (categoryName === 'Antes_Despues' && !isVideo) {
        const prefix = fileName.split('_')[0];
        if (!beforeAfterPairs[prefix]) beforeAfterPairs[prefix] = {};

        if (fileName.includes('antes')) {
          beforeAfterPairs[prefix].before = mediaGlob[path].default;
        } else if (fileName.includes('despues')) {
          beforeAfterPairs[prefix].after = mediaGlob[path].default;
        }
      } else {
        loadedMedia.push({
          id: path,
          src: mediaGlob[path].default,
          category: categoryName,
          fileName: fileName,
          type: isVideo ? 'video' : 'image',
          alt: `Media de ${categoryName}`
        });
      }
    }

    for (const prefix in beforeAfterPairs) {
      const pair = beforeAfterPairs[prefix];
      if (pair.before && pair.after) {
        loadedMedia.push({
          id: prefix,
          srcBefore: pair.before,
          srcAfter: pair.after,
          category: 'Antes_Despues',
          type: 'beforeAfter',
          alt: `Antes y después de ${prefix}`
        });
      }
    }

    loadedMedia.sort((a, b) => a.fileName ? a.fileName.localeCompare(b.fileName) : 0);
    setImagesList(loadedMedia);

    const initialFilter = loadedMedia.filter(item => item.category === 'Antes_Despues');
    setFilteredImages(initialFilter);

  }, []); 

  const handleFilterClick = (categoryId) => {
    setActiveCategory(categoryId);
    setFilteredImages(imagesList.filter(img => img.category === categoryId));
    setSelectedIndex(-1); // Asegurar que se cierra el modal al cambiar filtro
  };

  // --- LÓGICA DE NAVEGACIÓN ---
  
  // Abrir modal en un índice específico
  const openModal = (index) => setSelectedIndex(index);
  
  // Cerrar modal
  const closeModal = () => setSelectedIndex(-1);

  // Siguiente imagen (circular)
  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  // Imagen anterior (circular)
  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  // Navegación con teclado (Flechas)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === -1) return; // Solo si está abierto
      if (e.key === 'ArrowRight') showNext(e);
      if (e.key === 'ArrowLeft') showPrev(e);
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredImages]);

  // Obtenemos el item actual basado en el índice
  const selectedItem = selectedIndex >= 0 ? filteredImages[selectedIndex] : null;

  return (
    <Layout>
      <PageHeader title={t('gallery_page_title')} bgImage={headerBg} />

      <div className="gallery-container container">
        
        <div className="gallery-filters">
          {FIXED_CATEGORIES.map((cat) => (
            <button 
              key={cat.id} 
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(cat.id)}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        <div className={`gallery-grid ${activeCategory === 'Antes_Despues' ? 'grid-before-after' : ''}`}>
          {filteredImages.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-item ${item.type === 'beforeAfter' ? 'item-before-after' : ''}`}
              data-aos="fade-up"
              // Pasamos el index al abrir
              onClick={() => openModal(index)}
            >
              {item.type === 'beforeAfter' ? (
                <div className="ba-thumbnail-container">
                  <img src={item.srcAfter} alt="Después" className="img-after" />
                  <img src={item.srcBefore} alt="Antes" className="img-before" />
                  <div className="ba-indicator"><FaArrowsAltH /></div>
                </div>
              ) : item.type === 'video' ? (
                <>
                  <video src={item.src} muted playsInline />
                  <div className="video-indicator"><FaPlay /></div>
                </>
              ) : (
                <img src={item.src} alt={item.alt} loading="lazy" />
              )}

              {item.type !== 'beforeAfter' && (
                <div className="gallery-overlay">
                  <span>{item.type === 'video' ? t('gallery_view_video') : t('gallery_view_image')}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
            <div style={{textAlign: 'center', width: '100%', padding: '60px'}}>
              <p style={{color: '#888', fontSize: '1.2rem'}}>{t('gallery_loading')}</p>
            </div>
        )}

      </div>

      {/* --- MODAL CON NAVEGACIÓN --- */}
      {selectedItem && (
        <div className="lightbox-overlay" onClick={closeModal}>
          
          {/* BOTÓN ANTERIOR (Solo si hay más de 1 imagen) */}
          {filteredImages.length > 1 && (
            <button className="nav-btn prev" onClick={showPrev}>
              <FaChevronLeft />
            </button>
          )}

          <div 
            className={`lightbox-content ${selectedItem.type === 'beforeAfter' ? 'lightbox-ba' : ''}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeModal}>
              <FaTimes />
            </button>

            {/* Renderizado Condicional del Contenido */}
            {selectedItem.type === 'beforeAfter' ? (
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={selectedItem.srcBefore} alt="Antes" />}
                itemTwo={<ReactCompareSliderImage src={selectedItem.srcAfter} alt="Después" />}
                style={{ width: '100%', height: '100%', borderRadius: '8px' }}
              />
            ) : selectedItem.type === 'video' ? (
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
            
            {/* Contador de imágenes (Opcional) */}
            <div className="lightbox-counter">
              {selectedIndex + 1} / {filteredImages.length}
            </div>
          </div>

          {/* BOTÓN SIGUIENTE */}
          {filteredImages.length > 1 && (
            <button className="nav-btn next" onClick={showNext}>
              <FaChevronRight />
            </button>
          )}

        </div>
      )}
      
      <FloatingButtons />
      <Footer />
    </Layout>
  );
};

export default Galeria;