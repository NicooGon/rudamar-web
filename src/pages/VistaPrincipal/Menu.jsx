import React from 'react';
import Layout from '../../components/Layout/Layout'; 
import About from '../About.jsx';

export const Menu = () => {
  return (
    // 2. Envolvemos todo el contenido del componente con <Layout>
    <Layout>
      <About />
    </Layout>
  );
};