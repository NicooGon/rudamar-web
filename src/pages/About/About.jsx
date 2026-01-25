import { useEffect, useState } from "react";
import Imagen1 from '@/images/Imagen1.jpeg'; // Asegúrate que la ruta sea correcta
import { GiAutoRepair } from 'react-icons/gi';
import { GrContact } from "react-icons/gr";
// 1. IMPORTAMOS NUEVOS ICONOS PARA EL MODAL
import { FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from 'react-i18next';

function AnimatedNumber({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 900;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 16);

    return () => clearInterval(counter);
  }, [target])

  return <span>{count}+</span>;
}

export default function About() {
  const { t } = useTranslation();
  
  // 2. ESTADO PARA CONTROLAR EL MODAL
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Función para evitar scroll cuando el modal está abierto
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  return (
    <section className="relative bg-gradient-to-b from-white via-white via-[50%] to-sky-50 py-12 pb-48 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center" >

        <div className="order-1 lg:order-2">

          <div className="flex items-center mb-4 gap-4 mt-16" data-aos="fade-left" data-aos-delay="200">
            <GiAutoRepair className="text-[var(--color-brand-primary)] text-3xl" />
            <div className="text-base lg:text-lg font-bold uppercase tracking-widest text-[var(--color-brand-primary)] font-oswald">
              {t('about_label')}
            </div>
          </div>

          <h2 className="mb-6 lg:mb-8 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-main)] leading-tight font-oswald" data-aos="fade-left" data-aos-delay="300">
            {t('about_title_line1')} <br /> {t('about_title_line2')}
          </h2>

          <p className="mb-4 lg:mb-6 text-[var(--color-text-main)] text-base sm:text-lg leading-relaxed font-roboto" data-aos="fade-left" data-aos-delay="450">
            {t('about_desc_1')}
          </p>

          <p className="mb-4 lg:mb-6 text-[var(--color-text-main)] text-base sm:text-lg leading-relaxed font-roboto" data-aos="fade-left" data-aos-delay="450">
            {t('about_desc_2')}
          </p>

          <ul className="space-y-3 mb-8 lg:mb-10 font-medium font-roboto" data-aos="fade-left" data-aos-delay="450">
            <li className="flex items-center gap-3 text-base sm:text-lg text-[var(--color-text-main)]">
              <span className="text-[var(--color-brand-primary)] text-xl">✔</span>
              {t('about_check_1')}
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg text-[var(--color-text-main)]">
              <span className="text-[var(--color-brand-primary)] text-xl">✔</span>
              {t('about_check_2')}
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg text-[var(--color-text-main)]">
              <span className="text-[var(--color-brand-primary)] text-xl">✔</span>
              {t('about_check_3')}
            </li>
          </ul>

          {/* 3. BOTÓN MODIFICADO PARA ABRIR MODAL */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-hover)] text-[var(--color-white)] font-semibold px-10 py-4 rounded-md transition font-oswald flex items-center gap-3 text-lg cursor-pointer"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <GrContact className="text-white text-xl" />
            {t('about_btn_contact')}
          </button>
        </div>

        <div className="relative ml-6 order-2 lg:order-1">
          <div
            className="absolute -bottom-14 -left-8 w-36 sm:w-44 md:w-60 lg:w-64 h-36 sm:h-24 md:h-46 lg:h-58 bg-[var(--color-brand-primary)] z-0"
            style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }}
          />
          <div className="overflow-hidden rounded-xl shadow-2xl relative z-10">
            <img
              src={Imagen1}
              alt="Taller Rudamar"
              className="w-full h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 left-4 sm:left-6 md:left-8 bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl shadow-lg z-20" data-aos="fade-right" data-aos-delay="20">
            <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-brand-primary)] font-oswald">
              <AnimatedNumber target={20} />
            </p>
            <p className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-[var(--color-text-light)] font-roboto">
              {t('about_years_exp')}
            </p>
          </div>
        </div>

      </div>

      {/* 4. MODAL DE CONTACTO */}
      {showModal && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                {/* Overlay */}
                <div 
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
                  onClick={() => setShowModal(false)}
                ></div>
      
                {/* Contenido */}
                <div 
                  className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all scale-100"
                  data-aos="zoom-in" 
                  data-aos-duration="300"
                >
                  <button 
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                  >
                    <FaTimes size={20} />
                  </button>
      
                  <div className="text-center mb-6">
                    {/* TÍTULO TRADUCIDO */}
                    <h3 className="text-2xl font-oswald font-bold text-[var(--color-text-main)] uppercase tracking-wide">
                      {t('modal_title')}
                    </h3>
                    {/* SUBTÍTULO TRADUCIDO */}
                    <p className="text-gray-500 text-sm mt-2 font-roboto">
                      {t('modal_subtitle')}
                    </p>
                  </div>
      
                  <div className="grid grid-cols-1 gap-3">
                    
                    {/* WhatsApp */}
                    <a 
                      href="https://wa.me/34686794141?text=Hola,%20quiero%20información" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl border border-gray-100 bg-green-50 hover:bg-green-100 transition group"
                      style={{textDecoration: 'none'}}
                    >
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-4 shadow-sm group-hover:scale-110 transition">
                        <FaWhatsapp size={20} />
                      </div>
                      <div>
                        <span className="block font-bold text-gray-800 font-oswald">WhatsApp</span>
                        {/* TEXTO PEQUEÑO TRADUCIDO */}
                        <span className="text-xs text-gray-500">{t('modal_wa_sub')}</span>
                      </div>
                    </a>
      
                    {/* Email / Formulario */}
                    {/* NOTA: Verifica el href según el archivo donde estés (About=#contactanos o Reseñas=/contacto) */}
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=rudamarspain@gmail.com&su=Consulta%20desde%20la%20web" 
                      onClick={() => setShowModal(false)}
                      className="flex items-center p-4 rounded-xl border border-gray-100 bg-blue-50 hover:bg-blue-100 transition group"
                      style={{textDecoration: 'none'}}
                    >
                      <div className="w-10 h-10 bg-[#5c86c4] rounded-full flex items-center justify-center text-white mr-4 shadow-sm group-hover:scale-110 transition">
                        <FaEnvelope size={18} />
                      </div>
                      <div>
                        {/* ETIQUETA TRADUCIDA */}
                        <span className="block font-bold text-gray-800 font-oswald">{t('modal_email_label')}</span>
                        {/* TEXTO PEQUEÑO TRADUCIDO (Lógica para variar el texto según la página) */}
                        <span className="text-xs text-gray-500">
                          {window.location.pathname.includes('resenas') ? t('modal_email_sub_go') : t('modal_email_sub')}
                        </span>
                      </div>
                    </a>
      
                    {/* Instagram */}
                    <a 
                      href="https://www.instagram.com/rudamar_spain_/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl border border-gray-100 bg-pink-50 hover:bg-pink-100 transition group"
                      style={{textDecoration: 'none'}}
                    >
                      <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 shadow-sm group-hover:scale-110 transition">
                        <FaInstagram size={20} />
                      </div>
                      <div>
                        <span className="block font-bold text-gray-800 font-oswald">Instagram</span>
                        {/* TEXTO PEQUEÑO TRADUCIDO */}
                        <span className="text-xs text-gray-500">{t('modal_insta_sub')}</span>
                      </div>
                    </a>
      
                    {/* Facebook */}
                    <a 
                      href="https://www.facebook.com/share/14SiM2fDXZz/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl border border-gray-100 bg-indigo-50 hover:bg-indigo-100 transition group"
                      style={{textDecoration: 'none'}}
                    >
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4 shadow-sm group-hover:scale-110 transition">
                        <FaFacebookF size={20} />
                      </div>
                      <div>
                        <span className="block font-bold text-gray-800 font-oswald">Facebook</span>
                        {/* TEXTO PEQUEÑO TRADUCIDO */}
                        <span className="text-xs text-gray-500">{t('modal_fb_sub')}</span>
                      </div>
                    </a>
      
                  </div>
                </div>
              </div>
            )}
            
    </section>
  );
}