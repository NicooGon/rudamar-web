import React from 'react';
import Layout from '../../components/Layout/Layout'; 
import About from '../About/About.jsx';
import Services from '../Services/Services.jsx';
import Ubicacion from '../../components/Ubicacion/Ubicacion';
import BannerPrincipal from './BannerPrincipal.jsx';


export const Menu = () => {
  return (
    // 2. Envolvemos todo el contenido del componente con <Layout>
    <Layout>
      <BannerPrincipal />
      <About />
      <Services></Services>
      <Ubicacion />
    </Layout>
  );
};