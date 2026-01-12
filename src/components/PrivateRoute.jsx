import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

  if (!user) {
    // TÚ decides a dónde redirigir
    return <Navigate to="/menu" />;
  }
  
  return children;
};