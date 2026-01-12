import React from 'react';
import Layout from '../../components/Layout/Layout'; 

export const Menu = () => {
  return (
    // 2. Envolvemos todo el contenido del componente con <Layout>
    <Layout>
      <div className="menu-container">
        <h1>Mi Dashboard / Menú Principal</h1>
        <p>Bienvenido a la aplicación. Esta es la página principal.</p>
        
        <div className="menu-options">
          <h2>Opciones disponibles:</h2>
          <ul>
            <li>• Esta es la página de inicio</li>
            <li>• Aquí irían los enlaces a otras secciones</li>
            <li>• Puedes agregar más funcionalidades según necesites</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};