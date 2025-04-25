import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Clientes from './pages/Clientes';
import Proveedor from './pages/Proveedor';
import Usuarios from './pages/Usuarios';
import Logout from './pages/Logout';
import Home from './pages/Home'; 
import Login from './components/Login';

const App = () => {
  // Usamos useState para manejar el estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para simular el login
  const handleLogin = () => {
    setIsAuthenticated(true); // Cambiar el estado a autenticado
  };

  return (
    <Router>
      <Routes>
        {/* Si el usuario está autenticado, muestra el Layout; si no, redirige a /login */}
        <Route
          path="/"
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route index element={<Home />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="proveedor" element={<Proveedor />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        {/* Ruta para login */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
