import { useState, useEffect } from "react";
import image from "@/images/Galeria/1Nauticas/1.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaDirections,
} from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "../../components/Alert/Alert.jsx";

export default function ContactPage() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contactanos"
      className="relative min-h-[calc(100vh-78px)] flex items-center justify-center px-4 sm:px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="
          relative z-10
          w-full
          max-w-4xl sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-7xl
          grid grid-cols-1 lg:grid-cols-2
          gap-8 md:gap-12 lg:gap-16
          bg-white/70 backdrop-blur-sm
          p-6 md:p-8 lg:p-12
          rounded-3xl
          shadow-2xl
        "
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <div className="space-y-8">
          <div className="w-full h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Ubicación Rudamar"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4656.923372868926!2d-4.473338597942474!3d36.69376887810722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9fc0e20734f%3A0x33a1948d7148b2b2!2sRudamar-Spain!5e0!3m2!1ses!2sve!4v1768516642354!5m2!1ses!2sve"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6"
            data-aos="fade-right"
            data-aos-delay="350"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold">
                Visítanos
              </h3>
              <div className="w-20 h-1 mt-2 bg-[var(--color-brand-primary)] rounded-full" />
            </div>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-white">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold">Dirección</h4>
                  <p className="text-sm text-gray-600">
                    Calle Diderot 15, Nave 165 <br />
                    29004 Málaga, España
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-white">
                  <FaClock />
                </div>
                <div>
                  <h4 className="font-semibold">Horario</h4>
                  <p className="text-sm text-gray-600">
                    Lunes a Viernes: 8:00 - 18:00 <br />
                    Sábados: Con cita previa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-white">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-semibold">Contacto</h4>
                  <a
                    href="https://wa.me/34686794141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-[var(--color-brand-primary)] transition"
                  >
                    +34 686 794141
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/jdvHxRb28WD3Kykb7"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                bg-[var(--color-brand-primary)]
                hover:bg-[var(--color-brand-hover)]
                text-white font-semibold
                px-5 py-3 rounded-md transition
              "
            >
              <FaDirections />
              Cómo llegar
            </a>
          </div>
        </div>

        <div className="flex items-center" data-aos="fade-left" data-aos-delay="350">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 max-w-sm md:max-w-md mx-auto w-full">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">
              Contáctanos
            </h3>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
            >
              <input
                type="text"
                placeholder="Nombre *"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border rounded px-4 py-3 focus:ring-2 focus:ring-[var(--color-brand-primary)] outline-none placeholder:text-gray-400"
                required
              />

              <input
                type="text"
                placeholder="Apellido *"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                className="w-full border rounded px-4 py-3 focus:ring-2 focus:ring-[var(--color-brand-primary)] outline-none placeholder:text-gray-400"
                required
              />

              <input
                type="number"
                placeholder="Teléfono *"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full border rounded px-4 py-3 focus:ring-2 focus:ring-[var(--color-brand-primary)] outline-none placeholder:text-gray-400"
                required
              />

              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-4 py-3 focus:ring-2 focus:ring-[var(--color-brand-primary)] outline-none placeholder:text-gray-400"
                required
              />

              <textarea
                rows={4}
                placeholder="Mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full border rounded px-4 py-3 focus:ring-2 focus:ring-[var(--color-brand-primary)] outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-[var(--color-brand-primary)]
                  hover:bg-[var(--color-brand-hover)]
                  text-white font-semibold
                  py-3 rounded-md transition
                "
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="bg-white p-6 rounded-lg shadow-lg">
          <AlertDialogTitle className="text-lg font-bold">
            ¡Correo enviado!
          </AlertDialogTitle>
          <AlertDialogDescription>
            Tu mensaje se envió correctamente. Nos pondremos en contacto contigo pronto.
          </AlertDialogDescription>
          <div className="flex justify-end mt-4">
            <AlertDialogCancel className="hover:bg-[var(--color-brand-primary)] hover:text-white">
              Cerrar
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
