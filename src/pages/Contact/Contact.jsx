import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClock, FaDirections, FaPaperPlane } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "../../components/Alert/Alert.jsx";
import '../../index.css';


export default function ContactPage() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="contactanos"
      className="relative w-full py-20 bg-gradient-to-b from-sky-200 via-sky-200 to-slate-700 overflow-hidden"
    >
      <div
        className="relative z-10 max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]"
        data-aos="fade-up"
      >
          <div className="relative h-[360px] lg:min-h-[600px]">
          <iframe
            title="Ubicación Rudamar"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4656.923372868926!2d-4.473338597942474!3d36.69376887810722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9fc0e20734f%3A0x33a1948d7148b2b2!2sRudamar-Spain!5e0!3m2!1ses!2sve!4v1768516642354!5m2!1ses!2sve" 
            className="absolute inset-0 w-full h-full border-0 grayscale-[10%] contrast-110"
            loading="lazy"
          />

          <div
            className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 border-l-4 border-[#5c86c4]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <FaClock className="text-[#5c86c4] text-xl" />
            <div>
              <p className="text-[11px] uppercase text-gray-400 font-bold tracking-wider">
                Horario Taller
              </p>
              <p className="font-bold text-gray-800 text-sm">
                8:00 - 18:00 (L-V)
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/jdvHxRb28WD3Kykb7"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-5 right-5 bg-white px-4 py-2 rounded-full shadow-md text-xs font-bold flex items-center gap-2 hover:scale-105 transition"
          >
            <FaDirections /> Cómo llegar
          </a>
        </div>

        <div className="p-10 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-[#2c3e50] uppercase tracking-wide">
              Contactanos
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Cuéntanos qué necesitas y te responderemos hoy mismo.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none transition focus:bg-white focus:border-[#5c86c4] focus:ring-2 focus:ring-[#5c86c4]/20"
              />
              <input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none transition focus:bg-white focus:border-[#5c86c4] focus:ring-2 focus:ring-[#5c86c4]/20"
              />
            </div>

            <input
              type="tel"
              placeholder="Teléfono móvil"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none transition focus:bg-white focus:border-[#5c86c4] focus:ring-2 focus:ring-[#5c86c4]/20"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none transition focus:bg-white focus:border-[#5c86c4] focus:ring-2 focus:ring-[#5c86c4]/20"
            />

            <textarea
              rows={4}
              placeholder="Detalles de la reparación o servicio..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none transition focus:bg-white focus:border-[#5c86c4] focus:ring-2 focus:ring-[#5c86c4]/20 resize-none"
            />

            <button
              type="submit"
              className="w-full mt-2 py-4 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-hover)] text-white font-bold uppercase rounded-lg flex items-center justify-center gap-3"
            >
              <FaPaperPlane /> Enviar solicitud
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
            <AlertDialogCancel className="bg-slate-100 hover:bg-slate-200 px-8 py-2 rounded-full font-bold text-sm">
              Cerrar
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
