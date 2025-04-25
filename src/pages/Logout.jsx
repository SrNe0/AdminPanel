import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [loading, setLoading] = useState(true); // Estado para controlar el loading
  const navigate = useNavigate();

  useEffect(() => {
    // Simulamos un retraso de 2 segundos para el "cierre de sesión"
    setTimeout(() => {
      // Lógica para cerrar sesión (por ejemplo, borrar tokens, limpiar el estado global, etc.)
      console.log('Usuario cerrando sesión.');
      setLoading(false);  // Establece el estado de carga en false
      navigate('/login'); // Redirige al login
    }, 2000); // Simulamos el cierre de sesión con un retraso de 2 segundos
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
        {loading ? (
          <>
            <h2 className="block text-gray-700 text-xl font-bold mb-4">Cerrando Sesión...</h2>
            <p className="text-gray-600">Serás redirigido a la página de inicio de sesión en breve.</p>
            {/* Círculo de carga */}
            <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin mx-auto mt-4"></div>
          </>
        ) : (
          <h2 className="text-gray-700 text-xl font-bold">Redirigiendo...</h2>
        )}
      </div>
    </div>
  );
};

export default Logout;
