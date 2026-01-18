// src/pages/Reseñas/Reseñas.jsx
import React from 'react';
import Layout from '../../components/Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import { FaStar, FaGoogle, FaMapMarkerAlt } from 'react-icons/fa'; 
import './Reseñas.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../VistaPrincipal/Footer.jsx'

// IMPORTAMOS EL NUEVO COMPONENTE
import Valores from './Valores';

// 1. IMPORTAMOS EL HOOK DE TRADUCCIÓN
import { useTranslation } from 'react-i18next';

// IMÁGENES
import headerBg from '../../images/banner.jpeg'; 
import tallerImg from '../../images/banner.jpeg'; 
import suzukiImg from '../../images/Galeria/suzuki.jpg'; 
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons.jsx';

const Reseñas = () => {
  // 2. USAR EL HOOK
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  // --- DATOS DE TUS RESEÑAS (Ahora dentro del componente para usar 't') ---
  const reviewsData = [
    {
      id: 1,
      name: "Marisa Piano",
      date: t('review_1_date'), // Traducido
      photo: "https://lh3.googleusercontent.com/a/ACg8ocIxDSilnLShPLl2n_U8GmQqGc4_1WR5j_WZYI3xA6jexK74ZA=w45-h45-p-rp-mo-br100", 
      rating: 5,
      text: t('review_1_text'), // Traducido
      url: "https://maps.app.goo.gl/ycJbxnid26weoxBb7"
    },
    {
      id: 2,
      name: "José antonio Lara moyano",
      date: t('review_2_date'), // Traducido
      photo: "https://lh3.googleusercontent.com/a/ACg8ocJJlyjHMdEI1se4ipfNYioldGiymUDlUboZoxJ2Rn0MXvH7ig=w45-h45-p-rp-mo-br100",
      rating: 5,
      text: t('review_2_text'), // Traducido
      url: "https://maps.app.goo.gl/kkZHbTiiBjcKxcwa7"
    },
    {
      id: 3,
      name: "Sancho “Sancho a tope” Marbella",
      date: t('review_3_date'), // Traducido
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjX0Nr7OGJDPD0U8Z2HNv6hvRywydzIlRK58d4VWsPtkOGUbzp274g=w45-h45-p-rp-mo-ba2-br100",
      rating: 5,
      text: t('review_3_text'), // Traducido
      url: "https://maps.app.goo.gl/qaBXkhQFUG2Q1trw9"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} color={i < rating ? "#fbbc04" : "#e4e5e9"} />
    ));
  };

  return (
    <Layout>
      {/* Título Traducido */}
      <PageHeader title={t('reviews_page_title')} bgImage={headerBg} />

      {/* 1. SECCIÓN HISTORIA */}
      <section className="history-section">
        <div className="container">
          <div className="history-grid">
            <div className="history-images" data-aos="fade-right" data-aos-delay="300">
              <img src={tallerImg} alt="Taller Rudamar" className="img-main" />
              <div className="years-badge">
                <span className="years-number">23+</span>
                <span className="years-text">
                    {/* Salto de línea manual con split o CSS, o simplemente texto */}
                    {t('hist_years_text').split(' ').map((line, i) => (
                        <React.Fragment key={i}>
                            {line}<br/>
                        </React.Fragment>
                    ))}
                </span>
              </div>
            </div>
            <div className="history-content" data-aos="fade-left" data-aos-delay="300">
              <div className="subtitle-small">{t('hist_subtitle')}</div>
              <h2 className="history-title">{t('hist_title')}</h2>
              <p className="history-text">
                {/* Nota: Si quieres mantener 'RUDAMAR' en negrita dentro de la traducción,
                    puedes usar <Trans> o separar el texto. Aquí lo simplifico usando el texto completo. */}
                {t('hist_desc')}
              </p>
              <a href="/contacto" className="btn-history">{t('hist_btn')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPONENTE VALORES (Asegúrate de traducir este componente internamente también si tiene texto) */}
      <Valores />

      {/* 3. SECCIÓN SUZUKI (Experiencia) */}
      <section className="showcase-section">
        <div className="container">
          <div className="showcase-grid">
            
            <div className="showcase-text" data-aos="fade-right" data-aos-delay="300">
              <div className="subtitle-small" style={{justifyContent: 'flex-start'}}>{t('showcase_subtitle')}</div>
              <h3>{t('showcase_title')}</h3>
              <p>
                {t('showcase_text_1')}
              </p>
              <p>
                {t('showcase_text_2')}
              </p>
              <ul style={{listStyle: 'none', padding: 0, marginTop: '20px'}}>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                   <FaStar color="#5c86c4"/> {t('showcase_list_1')}
                </li>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                   <FaStar color="#5c86c4"/> {t('showcase_list_2')}
                </li>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                   <FaStar color="#5c86c4"/> {t('showcase_list_3')}
                </li>
              </ul>
            </div>

            <div className="showcase-img-container" data-aos="fade-left" data-aos-delay="300">
              <img src={suzukiImg} alt="Motor Suzuki Reparado" className="showcase-img" />
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN RESEÑAS */}
      <section className="reviews-section">
        <div className="container" data-aos="fade-up" data-aos-delay="300">
          <h2 className="section-title-center">
             {t('reviews_section_title')} <span style={{color:'#4285F4'}}>G</span><span style={{color:'#EA4335'}}>o</span><span style={{color:'#FBBC05'}}>o</span><span style={{color:'#4285F4'}}>g</span><span style={{color:'#34A853'}}>l</span><span style={{color:'#EA4335'}}>e</span>
          </h2>

          <div className="reviews-grid">
            {reviewsData.map((review) => (
              <a key={review.id} href={review.url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="review-card">
                  <div className="review-header">
                    <img src={review.photo} alt={review.name} className="reviewer-photo" />
                    <div className="reviewer-info">
                      <span className="reviewer-name">{review.name}</span>
                      <div className="review-meta-row">
                        <span className="review-date">{review.date}</span>
                        <div className="review-stars-mini">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <FaGoogle style={{color: '#4285F4', fontSize: '1.2rem', marginLeft: 'auto'}} />
                  </div>
                  <p className="review-text">"{review.text}"</p>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="https://www.google.com/maps/place/Rudamar-Spain/@36.6933417,-4.4748747,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9fc0e20734f:0x33a1948d7148b2b2!8m2!3d36.6933417!4d-4.4748747!16s%2Fg%2F11g01rsc5r?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D" target="_blank" rel="noopener noreferrer" className="btn-google-maps">
              <FaMapMarkerAlt color="#EA4335"/> {t('reviews_btn_maps')}
            </a>
          </div>

        </div>
      </section>
      <FloatingButtons />
      <Footer />
    </Layout>
  );
};

export default Reseñas;