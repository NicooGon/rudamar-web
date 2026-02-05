// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// AQUÍ TUS TRADUCCIONES
const resources = {
  es: {
    translation: {
      "nav_inicio": "Inicio",
      "nav_trayectoria": "Trayectoria",
      "nav_servicios": "Servicios",
      "nav_galeria": "Galería",
      "btn_presupuesto": "Navegar",
      "btn_contacto": "Contactos",

      // SECCIÓN BANNER PRINCIPAL
      "banner_subtitle": "Mecánica Naval & Mantenimiento",
      "banner_title": "Servicio Profesional para tu Embarcación",
      "banner_btn_services": "Nuestros Servicios",
      "banner_btn_gallery": "Navega a la Galería",

      // SECCIÓN CONTACTO
      "contact_header": "CONTÁCTANOS",
      "contact_sub": "Cuéntanos qué necesitas y te responderemos hoy mismo.",
      "form_name": "Nombre",
      "form_lastname": "Apellido",
      "form_phone": "Teléfono móvil",
      "form_email": "Correo electrónico",
      "form_message": "Detalles de la reparación o servicio...",
      "form_btn_send": "Enviar Solicitud",
      
      // MAPA Y ALERTAS
      "map_hours_title": "Horario Taller",
      "map_btn_directions": "Cómo llegar",
      "alert_received": "¡Recibido!",
      "alert_msg": "Gracias por escribirnos. Revisaremos tu caso lo antes posible.",
      "alert_close": "Cerrar",

      // FOOTER
      "footer_subtitle": "Servicio Oficial Narwhal",
      "footer_desc": "En nuestro taller nos caracterizamos por tener experiencia altamente cualificado. Ofrecemos soluciones integrales en mecánica naval, fibra de vidrio y mantenimiento de embarcaciones en la Costa del Sol.",
      "footer_btn_quote": "Solicitar Presupuesto",
      "footer_contact_heading": "Contacto",
      "footer_label_address": "Dirección",
      "footer_label_phone": "Teléfono",
      "footer_label_email": "Email",
      "footer_copyright": "© 2026 Servicio Oficial RUDAMAR. Todos los derechos reservados.",

      // SECCIÓN SERVICIOS
      "services_title": "Nuestros Servicios",
      "services_desc": "Más de 23 años de experiencia en la Costa del Sol ofreciendo soluciones profesionales con garantía de calidad.",
      
      "serv_boat_title": "Botes y Neumáticas",
      "serv_boat_items": [
        "Hinchables, semirrígidos y desmontables",
        "Reparación de pinchazos y rajas",
        "Sustitución de flotadores",
        "Trabajos en PVC, Neopreno e Hypalon",
        "Cambio de válvulas",
        "Colocación de accesorios",
        "Limpieza de tubulares"
      ],

      "serv_fiber_title": "Fibra de Vidrio",
      "serv_fiber_items": [
        "Reparaciones en fibra de vidrio",
        "Venta de consolas patroneras",
        "Acabados profesionales y duraderos"
      ],

      "gallery_page_title": "Nuestra Galería",
      "gallery_loading": "Cargando imágenes...",
      "gallery_view_video": "Ver Video",
      "gallery_view_image": "Ver Imagen",

      // GALERÍA - Categorías Fijas
      "cat_antes_despues": "Antes y Después", // Principal
      "cat_nauticas": "Botes y Neumáticas",
      "cat_motores": "Motores",
      "cat_taller": "Nuestro Taller",
      "cat_paddle": "Paddle Surf",

      "serv_paddle_title": "Paddle Surf",
      "serv_paddle_items": [
        "Reparación de tablas de paddle surf",
        "Todos los tamaños y modelos",
        "Restauración segura y eficiente"
      ],

      // PÁGINA RESEÑAS & TRAYECTORIA
      "reviews_page_title": "Reseñas y Trayectoria",
      
      // Sección Historia
      "hist_years_text": "Años de Experiencia",
      "hist_subtitle": "Mecánica Naval Profesional",
      "hist_title": "Un poco de nuestra historia",
      "hist_desc": "El Taller RUDAMAR fue fundado con la visión de ofrecer un servicio náutico integral de la más alta calidad en la Costa del Sol. Nos especializamos en la reparación de embarcaciones neumáticas y semirrígidas.",
      "hist_btn": "Contáctanos",

      // Sección Showcase (Suzuki)
      "showcase_subtitle": "Resultados Reales",
      "showcase_title": "Experiencia y Prestigio",
      "showcase_text_1": "En Rudamar, cada motor y cada casco cuentan una historia. Como esta reparación integral de un motor Suzuki, donde aplicamos nuestros protocolos más exigentes.",
      "showcase_text_2": "Nuestras habilidades técnicas se mantienen en constante formación para dominar las últimas tecnologías en motores fueraborda y reparación de fibra.",
      "showcase_list_1": "Reparaciones Garantizadas",
      "showcase_list_2": "Materiales Homologados",
      "showcase_list_3": "Servicio Oficial",

      // Sección Grid de Reseñas
      "reviews_section_title": "Lo que dicen nuestros clientes",
      "reviews_btn_maps": "Ver todas las reseñas en Google Maps",

      // Los testimonios (Para que también cambien de idioma)
      "review_1_date": "hace 5 meses",
      "review_1_text": "Valoración muy positiva: mi tabla estaba lista antes de tiempo. el precio por la reparación me parece el justo. Rubén muy amablemente nos ha dado una serie de indicaciones para cuidar la tabla que nunca nadie nos había dado. Lo recomiendo.",
      
      "review_2_date": "hace 4 meses",
      "review_2_text": "Mi amigo Rubén me lo recomendó un gran amigo yeyo y a día de hoy como profesional y buena persona de 10 aparte una persona que no engaña a nadie en su profesión te aconseja y te dices las cosas claras sin engaños.",
      
      "review_3_date": "hace 5 meses",
      "review_3_text": "Me los recomendó un amigo y no puedo estar más contento con la reparación. Bien hecha, en poco tiempo y a buen precio, y además te dan consejos sobre que hacer para que no te pase más. Una atención de 10!",

      // SECCIÓN VALORES
      "values_title": "Nuestros Valores",
      
      "val_tech_title": "Excelencia Técnica",
      "val_tech_desc": "Comprometidos con la perfección técnica en cada reparación, utilizando materiales de primera calidad.",
      
      "val_trans_title": "Transparencia",
      "val_trans_desc": "Valoramos la confianza. Diagnósticos claros y presupuestos sin sorpresas para cada cliente.",
      
      "val_advice_title": "Asesoría",
      "val_advice_desc": "No solo reparamos, aconsejamos para el mejor mantenimiento de tu embarcación a largo plazo.",
      
      "val_commit_title": "Compromiso",
      "val_commit_desc": "Tu seguridad en el mar es nuestra prioridad. Garantía y calidad en cada trabajo realizado.",
      
      // GALERÍA
      "gallery_page_title": "Nuestra Galería",
      "gallery_view_image": "Ver Imagen",
      "gallery_view_video": "Ver Video",
      "gallery_loading": "Cargando galería...",
      
      // Categorías de la Galería (Las claves deben coincidir con tus carpetas, pero en minúsculas y limpias si quieres, o usar un mapeo directo)
      // Mapeo sugerido:
      "cat_1NAUTICAS": "Neumáticas y PVC",
      "cat_2MOTORES": "Motores",
      "cat_3TALLER": "Nuestro Taller",
      "cat_4PADDLE_SURF": "Paddle Surf",
      "cat_5ANTES_DESPUES": "Antes y Después",

      "about_label": "Acerca de nosotros",
      "about_title_line1": "Taller de confianza",
      "about_title_line2": "en Málaga",
      "about_desc_1": "En Rudamar no hacemos promesas vacías. Ofrecemos trabajo bien hecho, ingeniería de calidad y precios justos. Nos especializamos en la reparación y el mantenimiento de lanchas, priorizando siempre la transparencia y la comunicación con cada cliente.",
      "about_desc_2": "Antes de realizar cualquier trabajo importante, te consultamos y te explicamos cada paso. Nuestro servicio es ágil y eficiente, para que tu lancha vuelva al agua en el menor tiempo posible.",
      "about_check_1": "Taller de fácil acceso",
      "about_check_2": "Habilidades técnicas altamente capacitadas",
      "about_check_3": "Servicio seguro, profesional y duradero",
      "about_btn_contact": "Contáctenos",
      "about_years_exp": "Años de experiencia",

      "ba_preview_subtitle": "Restauración Impecable",
      "ba_preview_title": "Devolvemos la vida a tu embarcación",
      "ba_preview_desc": "No te conformes con que te lo cuenten. Desliza y comprueba tú mismo la calidad de nuestros acabados. De lo desgastado a lo reluciente en un solo paso.",
      "ba_preview_btn": "Ver Galería Completa",
      "ba_label_before": "Antes",
      "ba_label_after": "Después",
      
      "modal_title": "Elige tu medio preferido",
      "modal_subtitle": "Estamos disponibles para atenderte rápidamente.",
      
      "modal_wa_sub": "Respuesta inmediata",
      
      "modal_email_label": "Formulario / Email",
      "modal_email_sub": "Envíanos un correo",
      "modal_email_sub_go": "Ir a página de contacto", // Variación para cuando es un enlace
      
      "modal_insta_sub": "Síguenos",
      "modal_fb_sub": "Visita nuestra página"
      // ... aquí irás agregando todos tus textos en español
    }
  },
  en: {
    translation: {
      "nav_inicio": "Home",
      "nav_trayectoria": "Trajectory",
      "nav_servicios": "Services",
      "nav_galeria": "Gallery",
      "btn_presupuesto": "Set Sail",
      "btn_contacto": "Contact",

      "ba_preview_subtitle": "Flawless Restoration",
      "ba_preview_title": "We bring your boat back to life",
      "ba_preview_desc": "Don't just take our word for it. Slide and see for yourself the quality of our finishes. From worn out to shining in just one step.",
      "ba_preview_btn": "View Full Gallery",
      "ba_label_before": "Before",
      "ba_label_after": "After",

      // BANNER SECTION
      "banner_subtitle": "Naval Mechanics & Maintenance",
      "banner_title": "Professional Service for your Boat",
      "banner_btn_services": "Our Services",
      "banner_btn_gallery": "Browse Gallery",

      // GALLERY
      "gallery_page_title": "Our Gallery",
      "gallery_loading": "Loading images...",
      "gallery_view_video": "Watch Video",
      "gallery_view_image": "View Image",

      // Categories
      "cat_antes_despues": "Before & After", // Main
      "cat_nauticas": "Boats & Inflatables",
      "cat_motores": "Engines",
      "cat_taller": "Our Workshop",
      "cat_paddle": "Paddle Surf",

      // CONTACT SECTION
      "contact_header": "CONTACT US",
      "contact_sub": "Tell us what you need and we will answer you today.",
      "form_name": "Name",
      "form_lastname": "Last Name",
      "form_phone": "Mobile Phone",
      "form_email": "Email Address",
      "form_message": "Repair or service details...",
      "form_btn_send": "Send Request",

      // MAP AND ALERTS
      "map_hours_title": "Workshop Hours",
      "map_btn_directions": "Get Directions",
      "alert_received": "Received!",
      "alert_msg": "Thank you for writing to us. We will review your case as soon as possible.",
      "alert_close": "Close",

      // FOOTER
      "footer_subtitle": "Official Narwhal Service",
      "footer_desc": "In our workshop, we are known for having highly qualified experience. We offer comprehensive solutions in naval mechanics, fiberglass, and boat maintenance on the Costa del Sol.",
      "footer_btn_quote": "Request Quote",
      "footer_contact_heading": "Contact",
      "footer_label_address": "Address",
      "footer_label_phone": "Phone",
      "footer_label_email": "Email",
      "footer_copyright": "© 2026 Official Service RUDAMAR. All rights reserved.",

        // SERVICES SECTION
      "services_title": "Our Services",
      "services_desc": "Over 23 years of experience on the Costa del Sol offering professional solutions with quality guarantee.",
      
      "serv_boat_title": "Boats & Inflatables",
      "serv_boat_items": [
        "Inflatable, semi-rigid and detachable",
        "Puncture and tear repair",
        "Float replacement",
        "PVC works",
        "Valve replacement",
        "Accessory installation",
        "Tubular cleaning"
      ],

      "serv_fiber_title": "Fiberglass",
      "serv_fiber_items": [
        "Fiberglass repairs",
        "Sale of helm consoles",
        "Professional and durable finishes"
      ],

      "serv_paddle_title": "Paddle Surf",
      "serv_paddle_items": [
        "Paddle surf board repair",
        "All sizes and models",
        "Safe and efficient restoration"
      ],

      // REVIEWS & TRAJECTORY PAGE
      "reviews_page_title": "Reviews and History",

      // History Section
      "hist_years_text": "Years of Experience",
      "hist_subtitle": "Professional Naval Mechanics",
      "hist_title": "A bit of our history",
      "hist_desc": "The RUDAMAR Workshop was founded with the vision of offering the highest quality integral nautical service on the Costa del Sol. We specialize in the repair of inflatable and semi-rigid boats.",
      "hist_btn": "Contact Us",

      "gallery_page_title": "Our Gallery",
      "gallery_view_image": "View Image",
      "gallery_view_video": "View Video",
      "gallery_loading": "Loading gallery...",
      
      // Gallery Categories
      "cat_1NAUTICAS": "Inflatables & PVC",
      "cat_2MOTORES": "Engines",
      "cat_3TALLER": "Our Workshop",
      "cat_4PADDLE_SURF": "Paddle Surf",
      "cat_5ANTES_DESPUES": "Before & After",

      // Showcase Section (Suzuki)
      "showcase_subtitle": "Real Results",
      "showcase_title": "Experience and Prestige",
      "showcase_text_1": "At Rudamar, every engine and every hull tells a story. Like this comprehensive repair of a Suzuki engine, where we apply our most demanding protocols.",
      "showcase_text_2": "Our technical skills are constantly being developed to master the latest technologies in outboard motors and fiberglass repair.",
      "showcase_list_1": "Guaranteed Repairs",
      "showcase_list_2": "Approved Materials",
      "showcase_list_3": "Official Service",

      "modal_title": "Choose your preferred method",
      "modal_subtitle": "We are available to assist you quickly.",
      
      "modal_wa_sub": "Immediate response",
      
      "modal_email_label": "Form / Email",
      "modal_email_sub": "Send us an email",
      "modal_email_sub_go": "Go to contact page",
      
      "modal_insta_sub": "Follow us",
      "modal_fb_sub": "Visit our page",

      // Reviews Grid Section
      "reviews_section_title": "What our clients say",
      "reviews_btn_maps": "See all reviews on Google Maps",

      // Testimonials translated
      "review_1_date": "5 months ago",
      "review_1_text": "Very positive assessment: my board was ready ahead of time. The price for the repair seems fair. Rubén very kindly gave us a series of indications to take care of the board that no one had ever given us. I recommend it.",

      "review_2_date": "4 months ago",
      "review_2_text": "My friend Rubén was recommended to me by a great friend Yeyo and today as a professional and a good person he is a 10. Besides being a person who does not deceive anyone in his profession, he advises you and tells you things clearly without deception.",

      "review_3_date": "5 months ago",
      "review_3_text": "A friend recommended them to me and I couldn't be happier with the repair. Well done, in a short time and at a good price, and they also give you advice on what to do so it doesn't happen again. 10/10 attention!",

      "values_title": "Our Values",
      
      "val_tech_title": "Technical Excellence",
      "val_tech_desc": "Committed to technical perfection in every repair, using top quality materials.",
      
      "val_trans_title": "Transparency",
      "val_trans_desc": "We value trust. Clear diagnoses and budgets without surprises for every client.",
      
      "val_advice_title": "Advisory",
      "val_advice_desc": "We don't just repair, we advise for the best long-term maintenance of your boat.",
      
      "val_commit_title": "Commitment",
      "val_commit_desc": "Your safety at sea is our priority. Guarantee and quality in every job performed.",




      "about_label": "About Us",
      "about_title_line1": "Trusted Workshop",
      "about_title_line2": "in Malaga",
      "about_desc_1": "At Rudamar we don't make empty promises. We offer well-done work, quality engineering, and fair prices. We specialize in the repair and maintenance of boats, always prioritizing transparency and communication with every client.",
      "about_desc_2": "Before performing any major work, we consult with you and explain every step. Our service is agile and efficient, so your boat returns to the water in the shortest time possible.",
      "about_check_1": "Easy access workshop",
      "about_check_2": "Highly skilled technical abilities",
      "about_check_3": "Safe, professional, and lasting service",
      "about_btn_contact": "Contact Us",
      "about_years_exp": "Years of experience",

       
      // ... aquí irás agregando todos tus textos en inglés
    }
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es', // Si falla, usa español
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;