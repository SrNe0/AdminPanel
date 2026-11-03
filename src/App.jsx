import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Layout from './components/Layout';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import About from './pages/About';
import Clientes from './pages/Clientes';
import Home from './pages/Home';
import Proveedores from './pages/Proveedores';
import Usuarios from './pages/Usuarios';

const App = () => (
  <AuthProvider>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="clientes" element={<Clientes />} />
              <Route path="proveedores" element={<Proveedores />} />
              <Route path="usuarios" element={<Usuarios />} />
              <Route path="acerca" element={<About />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </AuthProvider>
);

export default App;
