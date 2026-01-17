import React, { useState, useEffect } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa'; 
import Layout from '../../components/Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Galeria.css';

// 1. IMPORTAR HOOK
import { useTranslation } from 'react-i18next';

import headerBg from '../../images/banner.jpeg'; 
import Footer from '../VistaPrincipal/Footer.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Galeria = () => {
  // 2. USAR EL HOOK
  const { t } = useTranslation();

  const [imagesList, setImagesList] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
    });

    const mediaGlob = import.meta.glob(
      '../../images/Galeria/**/*.{png,jpg,jpeg,svg,mp4,webm}',
      { eager: true }
    );

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
        alt: `Media de ${categoryName}`,
      });
    }

    const sortedCategories = Array.from(foundCategories).sort();
    setImagesList(loadedMedia);
    setCategories(sortedCategories);

    if (sortedCategories.length > 0) {
      const firstCat = sortedCategories[0];
      setActiveCategory(firstCat);
      setFilteredImages(
        loadedMedia.filter(item => item.category === firstCat)
      );
    }
  }, []);

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    setFilteredImages(
      imagesList.filter(img => img.category === category)
    );
  };

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <Layout>
      {/* TÍTULO TRADUCIDO */}
      <PageHeader title={t('gallery_page_title')} bgImage={headerBg} />

      <div className="gallery-container container">
        
        {/* BOTONES DE FILTRO TRADUCIDOS */}
        <div className="gallery-filters">
          {categories.map((cat, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleFilterClick(cat)}
            >
              {/* TRUCO: Usamos la clave 'cat_' + el nombre de tu carpeta para buscar la traducción */}
              {/* Ej: Si la carpeta es '1NAUTICAS', buscará t('cat_1NAUTICAS') */}
              {t(`cat_${cat}`, { defaultValue: cat.replace(/^[0-9]+/, '') })}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="gallery-grid">
          {filteredImages.map((item, index) => (
            <div 
              key={item.id}
              className="gallery-item"
              data-aos="fade-up"
              onClick={() => openModal(item)}
            >
              {item.type === 'video' ? (
                <>
                  <video src={item.src} muted playsInline />
                  <div className="video-indicator"><FaPlay /></div>
                </>
              ) : (
                <img src={item.src} alt={item.alt} loading="lazy" />
              )}

              <div className="gallery-overlay">
                {/* TEXTO TRADUCIDO AL HACER HOVER */}
                <span>{item.type === 'video' ? t('gallery_view_video') : t('gallery_view_image')}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
            <div style={{textAlign: 'center', width: '100%', padding: '40px'}}>
              <p>{t('gallery_loading')}</p>
            </div>
        )}
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div 
          className="lightbox-overlay"
          onClick={closeModal}
          data-aos="fade"
        >
          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
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

      <Footer />
    </Layout>
  );
};

export default Galeria;
