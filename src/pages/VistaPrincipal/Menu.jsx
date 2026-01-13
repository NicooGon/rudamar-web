import React from 'react';
import Layout from '../../components/Layout/Layout'; 
import About from '../About.jsx';

import BannerPrincipal from './BannerPrincipal.jsx';


export const Menu = () => {
  return (
    // 2. Envolvemos todo el contenido del componente con <Layout>
    <Layout>
      <BannerPrincipal />
      <About />
    </Layout>
  );
};