import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClock, FaDirections, FaPaperPlane, FaUser, FaPhoneAlt, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel } from "../../components/Alert/Alert.jsx";
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  return (
    <section
      id="contactanos"
      className="relative w-full py-20 bg-gradient-to-b from-sky-300 via-sky-300 to-slate-700 overflow-hidden"
    >
      <div className="relative z-10 mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] w-[90%] max-w-[480px] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl" data-aos="fade-up">
        <div className="relative h-[470px] lg:min-h-[690px]">
          <iframe
            title="Ubicación Rudamar"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4656.923372868926!2d-4.473338597942474!3d36.69376887810722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9fc0e20734f%3A0x33a1948d7148b2b2!2sRudamar-Spain!5e0!3m2!1ses!2sve!4v1768516642354!5m2!1ses!2sve"
            className="absolute inset-0 w-full h-full border-0 grayscale-[10%] contrast-110"
            loading="lazy"
          />
        </div>

        <div className="p-10 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-[#2c3e50] uppercase tracking-wide">
              {t('contact_header')}
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              {t('contact_sub')}
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

              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('form_name')}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 py-3 text-sm outline-none transition focus:bg-white focus:border-[#5c86c4] focus:ring-2 focus:ring-[#5c86c4]/20 placeholder:text-gray-400"
                />
              </div>

              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('form_lastname')}
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 py-3 text-sm outline-none transition focus:bg-white focus:border-[#5c86c4] focus:ring-2 focus:ring-[#5c86c4]/20 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                placeholder={t('form_phone')}
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 py-3 text-sm outline-none transition focus:bg-white focus:border-[#5c86c4] focus:ring-2 focus:ring-[#5c86c4]/20 placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder={t('form_email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 py-3 text-sm outline-none transition focus:bg-white focus:border-[#5c86c4] focus:ring-2 focus:ring-[#5c86c4]/20 placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <FaCommentDots className="absolute left-3 top-1/5 transform -translate-y-1/2 text-gray-400" />
              <textarea
                rows={4}
                placeholder={t('form_message')}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 py-3 text-sm outline-none transition focus:bg-white focus:border-[#5c86c4] focus:ring-2 focus:ring-[#5c86c4]/20 placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-4 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-hover)] text-white font-bold uppercase rounded-lg flex items-center justify-center gap-3"
            >
              <FaPaperPlane /> {t('form_btn_send')}
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
              {t('alert_received')}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-500 mt-2 text-sm">
              {t('alert_msg')}
            </AlertDialogDescription>
          </div>
          <div className="flex justify-center mt-6">
            <AlertDialogCancel className="bg-slate-100 hover:bg-slate-200 px-8 py-2 rounded-full font-bold text-sm border-[var(--color-brand-primary)]">
              {t('alert_close')}
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
