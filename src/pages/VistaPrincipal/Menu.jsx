import React from 'react';
import Layout from '../../components/Layout/Layout'; 
import About from '../About/About.jsx';
import Services from '../Services/Services.jsx';
import Ubicacion from '../../components/Ubicacion/Ubicacion';
import BannerPrincipal from './BannerPrincipal.jsx';
import ContactPage from '../Contact/Contact.jsx';
import Footer from './Footer.jsx'
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons.jsx';
import BeforeAfterPreview from '../../components/BeforeAfterPreview/BeforeAfterPreview';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Menu = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <Layout>
      <BannerPrincipal />
      <About />
       <div className="relative overflow-hidden">

        <div className="bubble-container" />
        
        <Services />
        <BeforeAfterPreview />
        <ContactPage />

      </div>
    
      <FloatingButtons />
      <Footer />
    </Layout>
  );
};