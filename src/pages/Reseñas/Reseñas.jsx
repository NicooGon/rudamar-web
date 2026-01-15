import React from 'react';
import Layout from '../../components/Layout/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import { FaStar, FaGoogle, FaMapMarkerAlt } from 'react-icons/fa'; 
import './Reseñas.css';

import headerBg from '../../images/banner.jpeg'; 
import tallerImg from '../../images/banner.jpeg'; 

const Reseñas = () => {

  // --- DATOS DE TUS RESEÑAS ---
  const reviewsData = [
    {
      id: 1,
      name: "Marisa Piano",
      date: "hace 5 meses",
      // He puesto una imagen genérica de Google, pero si tienes la URL real de la foto, ponla aquí
      photo: "https://lh3.googleusercontent.com/a/ACg8ocIxDSilnLShPLl2n_U8GmQqGc4_1WR5j_WZYI3xA6jexK74ZA=w45-h45-p-rp-mo-br100", 
      rating: 5,
      text: "Valoración muy positiva: mi tabla estaba lista antes de tiempo. el precio por la reparación me parece el justo. Rubén muy amablemente nos ha dado una serie de indicaciones para cuidar la tabla que nunca nadie nos había dado. Lo recomiendo.",
      url: "https://maps.app.goo.gl/ycJbxnid26weoxBb7" // Enlace a la reseña 1
    },
    {
      id: 2,
      name: "José antonio Lara moyano",
      date: "hace 4 meses",
      photo: "https://lh3.googleusercontent.com/a/ACg8ocJJlyjHMdEI1se4ipfNYioldGiymUDlUboZoxJ2Rn0MXvH7ig=w45-h45-p-rp-mo-br100",
      rating: 5,
      text: "Mi amigo Rubén me lo recomendó un gran amigo yeyo y a día de hoy como profesional y buena persona de 10 aparte una persona que no engaña a nadie en su profesión te aconseja y te dices las cosas claras sin engaños ojalá hubiera muchas personas como el y habría menos engaños .....bueno amigo a sido un placer conocerte y que sea por muchos años más ➕️🤗🤗🤗🤗",
      url: "https://maps.app.goo.gl/kkZHbTiiBjcKxcwa7" // Enlace a la reseña 2
    },
    {
      id: 3,
      name: "Sancho “Sancho a tope” Marbella",
      date: "hace 5 meses",
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjX0Nr7OGJDPD0U8Z2HNv6hvRywydzIlRK58d4VWsPtkOGUbzp274g=w45-h45-p-rp-mo-ba2-br100",
      rating: 5,
      text: "Me los recomendó un amigo y no puedo estar más contento con la reparación. Bien hecha, en poco tiempo y a buen precio, y además te dan consejos sobre que hacer para que no te pase más. Una atención de 10!",
      url: "https://maps.app.goo.gl/qaBXkhQFUG2Q1trw9" // Enlace a la reseña 3
    }
  ];

  // Función para estrellas
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} color={i < rating ? "#fbbc04" : "#e4e5e9"} />
    ));
  };

  return (
    <Layout>
      <PageHeader title="Reseñas y Trayectoria" bgImage={headerBg} />

      {/* SECCIÓN HISTORIA */}
      <section className="history-section">
        <div className="container">
          <div className="history-grid">
            <div className="history-images">
              <img src={tallerImg} alt="Taller Rudamar" className="img-main" />
              <div className="years-badge">
                <span className="years-number">23+</span>
                <span className="years-text">Años de<br/>Experiencia</span>
              </div>
            </div>
            <div className="history-content">
              <div className="subtitle-small">Mecánica Naval Profesional</div>
              <h2 className="history-title">Un poco de nuestra historia</h2>
              <p className="history-text">
                El Taller <strong>RUDAMAR</strong> fue fundado con la visión de ofrecer un servicio náutico integral de la más alta calidad en la Costa del Sol. Desde nuestros inicios, nos hemos especializado en la reparación de embarcaciones neumáticas y semirrígidas.
              </p>
              <a href="/contacto" className="btn-history">Contáctanos</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN RESEÑAS */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="section-title-center">
            Lo que dicen nuestros clientes <span style={{color:'#4285F4'}}>G</span><span style={{color:'#EA4335'}}>o</span><span style={{color:'#FBBC05'}}>o</span><span style={{color:'#4285F4'}}>g</span><span style={{color:'#34A853'}}>l</span><span style={{color:'#EA4335'}}>e</span>
          </h2>

          <div className="reviews-grid">
            {reviewsData.map((review) => (
              /* Hacemos que toda la tarjeta sea clickeable hacia la reseña específica */
              <a 
                key={review.id} 
                href={review.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{textDecoration: 'none', color: 'inherit'}}
              >
                <div className="review-card">
                  
                  {/* CABECERA MODIFICADA: Estrellas al lado de la fecha */}
                  <div className="review-header">
                    <img src={review.photo} alt={review.name} className="reviewer-photo" />
                    
                    <div className="reviewer-info">
                      <span className="reviewer-name">{review.name}</span>
                      
                      {/* NUEVA FILA: Fecha + Estrellas Pequeñas */}
                      <div className="review-meta-row">
                        <span className="review-date">{review.date}</span>
                        <div className="review-stars-mini">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>

                    <FaGoogle style={{color: '#4285F4', fontSize: '1.2rem', marginLeft: 'auto'}} />
                  </div>

                  {/* El bloque de estrellas grande de abajo SE ELIMINÓ y se movió arriba */}

                  <p className="review-text">"{review.text}"</p>
                </div>
              </a>
            ))}
          </div>

          {/* Botón GENERAL para ir al perfil de Rudamar en Maps */}
          <div style={{ textAlign: 'center' }}>
            <a 
              href="https://maps.app.goo.gl/ChIJT3MgDvz5cg0RsrJIcY2UoTM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-google-maps"
            >
              <FaMapMarkerAlt color="#EA4335"/> Ver todas las reseñas en Google Maps
            </a>
          </div>

        </div>
      </section>

    </Layout>
  );
};

export default Reseñas;