import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importamos el componente Menu (asegúrate de crearlo después)
import { Menu } from './pages/VistaPrincipal/Menu';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz que redirige al menú */}
        <Route path="/" element={<Navigate to="/menu" replace />} />
        
        {/* Ruta del menú principal */}
        <Route path="/menu" element={<Menu />} />
        
        {/* Capturar rutas no existentes - redirige al menú */}
        <Route path="*" element={<Navigate to="/menu" replace />} />
      </Routes>
    </Router>
  );
}

export default App;