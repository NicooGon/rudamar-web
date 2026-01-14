import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Menu usa 'export const', así que LLEVA llaves { }
import { Menu } from './pages/VistaPrincipal/Menu';

// Galeria usa 'export default', así que NO LLEVA llaves (y puedes quitar las llaves)
import Galeria from './pages/Galeria/Galeria'; 

import Services from './pages/Services/Services.jsx';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz que redirige al menú */}
        <Route path="/" element={<Navigate to="/menu" replace />} />
        
        {/* Ruta del menú principal */}
        <Route path="/menu" element={<Menu />} />
        
        {/* Ruta de la galería */}
        <Route path="/galeria" element={<Galeria />} />

        {/* Servicios */}
        <Route path="/servicios" element={<Services />} />
        
        {/* Capturar rutas no existentes - redirige al menú */}
        <Route path="*" element={<Navigate to="/menu" replace />} />
      </Routes>
    </Router>
  );
}

export default App;