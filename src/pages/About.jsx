import { useEffect, useState } from "react";
import Imagen1 from '@/images/Imagen1.jpeg'
import { GiAutoRepair } from 'react-icons/gi'
import { GrContact } from "react-icons/gr";

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
  }, [target]);

  return <span>{count}+</span>;
}

export default function About() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 pb-48 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <div className="relative ml-6">

          <div
            className="absolute -bottom-14 -left-8 w-36 sm:w-44 md:w-60 lg:w-64 h-36 sm:h-24 md:h-46 lg:h-58 bg-[var(--color-brand-primary)] z-0"
            style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }}
          ></div>

          <div className="overflow-hidden rounded-xl shadow-2xl relative z-10">
            <img
              src={Imagen1}
              alt="Taller Rudamar"
              className="w-full h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 left-4 sm:left-6 md:left-8 bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl shadow-lg z-20">
            <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-brand-primary)] font-oswald">
              <AnimatedNumber target={20} />
            </p>
            <p className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-[var(--color-text-light)] font-roboto">
              Años de experiencia
            </p>
          </div>

        </div>

        <div>
          <div className="flex items-center mb-4 gap-4 mt-16">
            <GiAutoRepair className="text-[var(--color-brand-primary)] text-3xl" />
            <span className="text-base lg:text-lg font-bold uppercase tracking-widest text-[var(--color-brand-primary)] font-oswald">
              Acerca de nosotros
            </span>
          </div>

          <h2 className="mb-6 lg:mb-8 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-main)] leading-tight font-oswald">
            Taller de confianza <br /> en Málaga
          </h2>

          <p className="mb-4 lg:mb-6 text-[var(--color-text-main)] text-base sm:text-lg leading-relaxed font-roboto">
            En Rudamar no hacemos promesas vacías. Ofrecemos trabajo bien hecho,
            ingeniería de calidad y precios justos. Nos especializamos en la
            reparación y el mantenimiento de lanchas, priorizando siempre la
            transparencia y la comunicación con cada cliente.
          </p>

          <p className="mb-4 lg:mb-6 text-[var(--color-text-main)] text-base sm:text-lg leading-relaxed font-roboto">
            Antes de realizar cualquier trabajo importante, te consultamos y te
            explicamos cada paso. Nuestro servicio es ágil y eficiente, para que
            tu lancha vuelva al agua en el menor tiempo posible.
          </p>

          <ul className="space-y-3 mb-8 lg:mb-10 font-medium font-roboto">
            <li className="flex items-center gap-3 text-base sm:text-lg text-[var(--color-text-main)]">
              <span className="text-[var(--color-brand-primary)] text-xl">✔</span> Taller de fácil acceso
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg text-[var(--color-text-main)]">
              <span className="text-[var(--color-brand-primary)] text-xl">✔</span> Equipo técnico altamente capacitado
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg text-[var(--color-text-main)]">
              <span className="text-[var(--color-brand-primary)] text-xl">✔</span> Servicio seguro, profesional y duradero
            </li>
          </ul>

          <button className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-hover)] text-[var(--color-white)] font-semibold px-10 py-4 rounded-md transition font-oswald flex items-center gap-3 text-lg">
            <GrContact className="text-white text-xl"/> Contáctenos
          </button>
        </div>

      </div>
    </section>
  )
}
