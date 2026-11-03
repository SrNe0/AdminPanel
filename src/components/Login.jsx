import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { DEMO_USER } from '../data/demoUser';

const inputClass =
  'w-full rounded-lg border px-4 py-3 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500';

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (user) return <Navigate to="/" replace />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    const ok = await login(username.trim(), password);
    if (ok) {
      navigate(location.state?.from?.pathname ?? '/', { replace: true });
    } else {
      setError('Usuario o contraseña incorrectos');
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-4">
      <div className="w-full rounded-xl bg-white px-8 pb-8 pt-6 shadow-lg sm:w-96">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-900">Iniciar Sesión</h1>
        <p className="mb-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-800">
          Demo: usuario <strong>{DEMO_USER.username}</strong> · contraseña <strong>{DEMO_USER.password}</strong>
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">Usuario</label>
            <input
              id="username"
              className={inputClass}
              type="text"
              autoComplete="username"
              placeholder="Tu usuario"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              disabled={loading}
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">Contraseña</label>
            <input
              id="password"
              className={inputClass}
              type="password"
              autoComplete="current-password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={loading}
              required
            />
          </div>

          {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700 disabled:opacity-70"
          >
            {loading && <span className="h-5 w-5 animate-spin rounded-full border-4 border-white border-t-transparent" />}
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
