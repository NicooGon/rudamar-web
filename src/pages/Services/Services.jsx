import { GiBoatFishing, GiAutoRepair } from "react-icons/gi";
import { MdOutlineSurfing } from "react-icons/md";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BrushBackground() {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="800"
      data-aos-duration="2000"
      className="absolute top-24 left-1/2 -translate-x-1/2 w-[1600px] h-[700px] pointer-events-none z-10"
    >
      <svg
        viewBox="0 0 1600 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M 50 300
            C 250 80, 450 520, 650 300
            C 850 120, 1050 560, 1250 300
            C 1450 160, 1550 480, 1580 300
          "
          fill="none"
          stroke="#38bdf8"
          strokeWidth="250"
          strokeOpacity="0.2"
          strokeLinecap="round"
          className="stroke-draw"
        />
        <style>
          {`
            .stroke-draw {
              stroke-dasharray: 2000;
              stroke-dashoffset: 3000;
              transition: stroke-dashoffset 1.5s ease-out;
            }
            [data-aos].aos-animate .stroke-draw {
              stroke-dashoffset: 0;
            }
          `}
        </style>
      </svg>
    </div>
  );
}

export default function Services() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="servicios" className="relative py-16 px-6 min-h-[calc(100vh/1.5)] bg-gradient-to-b from-sky-50 via-slate-50 to-sky-200 overflow-hidden">

      <BrushBackground />

      <div className="relative max-w-7xl mx-auto z-10">
        
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl font-bold text-gray-800">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Más de 23 años de experiencia en la Costa del Sol ofreciendo
            soluciones profesionales con garantía de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div data-aos="zoom-in" data-aos-delay="400">
            <ServiceCard
              icon={GiBoatFishing}
              title="Botes y Neumáticas"
              items={[
                "Hinchables, semirrígidos y desmontables",
                "Reparación de pinchazos y rajas",
                "Sustitución de flotadores",
                "Trabajos en PVC",
                "Cambio de válvulas",
                "Colocación de accesorios",
                "Limpieza de tubulares",
              ]}
            />
          </div>

          <div data-aos="zoom-in" data-aos-delay="550">
            <ServiceCard
              icon={GiAutoRepair}
              title="Fibra de Vidrio"
              items={[
                "Reparaciones en fibra de vidrio",
                "Venta de consolas patroneras",
                "Acabados profesionales y duraderos",
              ]}
            />
          </div>

          <div data-aos="zoom-in" data-aos-delay="700">
            <ServiceCard
              icon={MdOutlineSurfing}
              title="Paddle Surf"
              items={[
                "Reparación de tablas de paddle surf",
                "Todos los tamaños y modelos",
                "Restauración segura y eficiente",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
