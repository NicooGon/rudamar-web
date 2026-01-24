import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

import imgAntes from '../../images/Galeria/Antes_Despues/clienteB_01_antes.jpg';
import imgDespues from '../../images/Galeria/Antes_Despues/clienteB_02_despues.jpg';

const BeforeAfterPreview = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-200 via-sky-200 to-sky-300 py-40">

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div className="text-center lg:text-left">
            <span
              data-aos="fade-up"
              data-aos-delay="150"
              className="mb-4 inline-block rounded-full bg-sky-100 px-5 py-1.5 font-oswald text-sm font-bold uppercase tracking-widest text-sky-700"
            >
              {t('ba_preview_subtitle')}
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="mb-6 max-w-xl font-oswald text-4xl font-extrabold uppercase leading-tight text-slate-800 sm:text-5xl"
            >
              {t('ba_preview_title')}
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="450"
              className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              {t('ba_preview_desc')}
            </p>

            <Link
              to="/galeria"
              data-aos="zoom-in"
              data-aos-delay="600"
              className="
                group inline-flex items-center gap-4
                rounded-full
                bg-[var(--color-brand-primary)]
                hover:bg-[var(--color-brand-hover)]
                px-10 py-4
                font-oswald text-sm uppercase tracking-wider
                text-white shadow-xl
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-2xl
              "
            >
              {t('ba_preview_btn')}
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div
            data-aos="zoom-out"
            data-aos-delay="350"
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_40px_80px_-30px_rgba(15,23,42,0.35)] ring-1 ring-black/5">

              <span className="absolute top-5 left-5 z-10 rounded-full bg-black/60 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                {t('ba_label_before')}
              </span>

              <span className="absolute top-5 right-5 z-10 rounded-full bg-black/60 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                {t('ba_label_after')}
              </span>

              <div className="aspect-[4/3] w-full">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={imgAntes}
                      alt="Antes de la reparación"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={imgDespues}
                      alt="Después de la reparación"
                    />
                  }
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 left-1/2 h-12 w-4/5 -translate-x-1/2 rounded-full bg-slate-400/30 blur-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfterPreview;
