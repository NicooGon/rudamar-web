import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaClock,
  FaDirections,
  FaPaperPlane,
} from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "../../components/Alert/Alert.jsx";

// Importamos el CSS para el diseño del mapa y el formulario
import "./Contact.css";

export default function ContactPage() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      id="contactanos"
      // FONDO EXACTO SEGÚN TU CÓDIGO
      className="relative w-full overflow-hidden flex items-center justify-center py-16 lg:py-24 bg-gradient-to-b from-sky-200 via-[#5c86c4] to-[#2c3e50]"
    >
      
      {/* OLA DE TRANSICIÓN SUPERIOR (SVG) - EXACTA */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-sky-100 opacity-30"
          ></path>
        </svg>
      </div>

      {/* ELEMENTOS DECORATIVOS DE FONDO - EXACTOS */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-sky-300 opacity-10 rounded-full blur-3xl"></div>

      {/* --- NUEVO CONTENIDO INTERNO (Map First Layout) --- */}
      <div className="contact-card" data-aos="fade-up">
        
        {/* COLUMNA IZQUIERDA: MAPA A PANTALLA COMPLETA */}
        <div className="map-column">
          {/* Iframe ocupando todo el alto */}
          <iframe
            title="Ubicación Rudamar"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4656.923372868926!2d-4.473338597942474!3d36.69376887810722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9fc0e20734f%3A0x33a1948d7148b2b2!2sRudamar-Spain!5e0!3m2!1ses!2sve!4v1768516642354!5m2!1ses!2sve"
            className="full-height-map"
            allowFullScreen=""
            loading="lazy"
          />

          {/* Tarjeta Flotante: SOLO HORARIO (Como pediste) */}
          <div className="floating-hours" data-aos="fade-right" data-aos-delay="200">
            <div className="hours-icon"><FaClock /></div>
            <div className="hours-text">
              <h4>Horario Taller</h4>
              <p>8:00 - 18:00 (L-V)</p>
            </div>
          </div>

          {/* Botón Flotante "Ir Ahora" */}
          <a href="https://maps.app.goo.gl/jdvHxRb28WD3Kykb7" target="_blank" rel="noopener noreferrer" className="map-overlay-btn">
             <FaDirections /> Cómo llegar
          </a>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO MEJORADO */}
        <div className="form-column">
          <div className="form-header">
            <h3>CONTACTANOS</h3>
            <p>Cuéntanos qué necesitas y te responderemos hoy mismo.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setIsOpen(true); }}>
            <div className="form-grid-row">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="modern-input"
                  required
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  className="modern-input"
                  required
                />
            </div>

            <input
              type="tel"
              placeholder="Teléfono móvil"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="modern-input"
              required
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="modern-input"
              required
            />

            <textarea
              rows={4}
              placeholder="Detalles de la reparación o servicio..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="modern-input"
              style={{resize: 'none'}}
            />

            <button type="submit" className="modern-btn">
              <FaPaperPlane /> Enviar Solicitud
            </button>
          </form>
        </div>
      </div>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="bg-white p-6 rounded-2xl shadow-2xl border-0 max-w-sm mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 text-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl animate-bounce">
              ✓
            </div>
            <AlertDialogTitle className="text-xl font-bold text-[#2c3e50]">
              ¡Recibido!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-500 mt-2 text-sm">
              Gracias por escribirnos. Revisaremos tu caso lo antes posible.
            </AlertDialogDescription>
          </div>
          <div className="flex justify-center mt-6">
            <AlertDialogCancel className="bg-slate-100 hover:bg-slate-200 text-slate-700 border-0 transition px-8 py-2 rounded-full font-bold text-sm">
              Cerrar
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}