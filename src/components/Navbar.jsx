import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'; // Asegúrate de tener el logo correcto

const Navbar = () => {
  const navLinks = [
    { to: "/", text: "Inicio" },
    { to: "/clientes", text: "Clientes" },
    { to: "/proveedor", text: "Proveedor" },
    { to: "/usuarios", text: "Usuarios" },
    { to: "/logout", text: "Logout" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 shadow-lg w-full">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-2xl font-semibold text-white">AdminPanel</span>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-white text-lg font-medium transition duration-200 ease-in-out ${
                  isActive
                    ? 'underline bg-white/10 rounded p-1' // Subrayado y fondo al estar activo
                    : 'hover:bg-white/5 p-1' // Fondo al pasar el ratón
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
