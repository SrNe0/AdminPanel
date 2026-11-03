import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.svg';

const navLinks = [
  { to: '/', text: 'Inicio', end: true },
  { to: '/clientes', text: 'Clientes' },
  { to: '/proveedores', text: 'Proveedores' },
  { to: '/usuarios', text: 'Usuarios' },
  { to: '/acerca', text: 'Acerca de' },
];

const linkClass = ({ isActive }) =>
  `block rounded px-3 py-1 text-lg font-medium text-white transition ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 shadow-lg">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="" className="h-10 w-auto" />
          <span className="text-2xl font-semibold text-white">AdminPanel</span>
        </div>

        <button
          className="text-white md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className="hidden items-center space-x-4 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>{link.text}</NavLink>
          ))}
          <span className="text-sm text-gray-300">{user?.username}</span>
          <button onClick={handleLogout} className="flex items-center gap-2 rounded bg-white/10 px-3 py-1 text-white hover:bg-white/20">
            <FaSignOutAlt aria-hidden="true" /> Salir
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-4 max-w-screen-xl space-y-2 md:hidden">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass} onClick={() => setOpen(false)}>
              {link.text}
            </NavLink>
          ))}
          <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-1 text-lg text-white">
            <FaSignOutAlt aria-hidden="true" /> Salir ({user?.username})
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
