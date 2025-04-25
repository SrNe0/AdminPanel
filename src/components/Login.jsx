import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Estado para controlar si está cargando
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Inicia el proceso de carga
    setLoading(true);

    // Simulamos el inicio de sesión con un setTimeout
    setTimeout(() => {
      console.log('Intento de inicio de sesión con:', { username, password });

      // Llamamos a la función onLogin para actualizar el estado de autenticación
      onLogin();

      // Después de unos segundos, redirigimos al usuario
      navigate('/');
    }, 2000); // Simulamos un retraso de 2 segundos
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4 w-full sm:w-96">
        <h2 className="block text-gray-700 text-3xl font-bold mb-4 text-center text-gray-900">Iniciar Sesión</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuario
            </label>
            <input
              className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              id="username"
              type="text"
              placeholder="Tu usuario"
              name="username"
              value={username}
              onChange={handleInputChange}
              disabled={loading} // Deshabilita el input cuando está cargando
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              id="password"
              type="password"
              placeholder="Tu contraseña"
              name="password"
              value={password}
              onChange={handleInputChange}
              disabled={loading} // Deshabilita el input cuando está cargando
            />
          </div>
          
          <div className="flex items-center justify-between">
            {!loading ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 w-full"
                type="submit"
              >
                Iniciar Sesión
              </button>
            ) : (
              <div className="flex justify-center items-center space-x-2">
                <div className="border-t-4 border-blue-500 border-solid w-6 h-6 rounded-full animate-spin"></div>
                <span className="text-white text-lg">Iniciando sesión...</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
