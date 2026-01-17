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
      "footer_desc": "En nuestro taller nos caracterizamos por tener un equipo altamente cualificado. Ofrecemos soluciones integrales en mecánica naval, fibra de vidrio y mantenimiento de embarcaciones en la Costa del Sol.",
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
        "Trabajos en PVC",
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

      "serv_paddle_title": "Paddle Surf",
      "serv_paddle_items": [
        "Reparación de tablas de paddle surf",
        "Todos los tamaños y modelos",
        "Restauración segura y eficiente"
      ],

      "about_label": "Acerca de nosotros",
      "about_title_line1": "Taller de confianza",
      "about_title_line2": "en Málaga",
      "about_desc_1": "En Rudamar no hacemos promesas vacías. Ofrecemos trabajo bien hecho, ingeniería de calidad y precios justos. Nos especializamos en la reparación y el mantenimiento de lanchas, priorizando siempre la transparencia y la comunicación con cada cliente.",
      "about_desc_2": "Antes de realizar cualquier trabajo importante, te consultamos y te explicamos cada paso. Nuestro servicio es ágil y eficiente, para que tu lancha vuelva al agua en el menor tiempo posible.",
      "about_check_1": "Taller de fácil acceso",
      "about_check_2": "Equipo técnico altamente capacitado",
      "about_check_3": "Servicio seguro, profesional y duradero",
      "about_btn_contact": "Contáctenos",
      "about_years_exp": "Años de experiencia",
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

      // BANNER SECTION
      "banner_subtitle": "Naval Mechanics & Maintenance",
      "banner_title": "Professional Service for your Boat",
      "banner_btn_services": "Our Services",
      "banner_btn_gallery": "Browse Gallery",


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
      "footer_desc": "Our workshop is characterized by a highly qualified team. We offer comprehensive solutions in naval mechanics, fiberglass, and boat maintenance on the Costa del Sol.",
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


      "about_label": "About Us",
      "about_title_line1": "Trusted Workshop",
      "about_title_line2": "in Malaga",
      "about_desc_1": "At Rudamar we don't make empty promises. We offer well-done work, quality engineering, and fair prices. We specialize in the repair and maintenance of boats, always prioritizing transparency and communication with every client.",
      "about_desc_2": "Before performing any major work, we consult with you and explain every step. Our service is agile and efficient, so your boat returns to the water in the shortest time possible.",
      "about_check_1": "Easy access workshop",
      "about_check_2": "Highly trained technical team",
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