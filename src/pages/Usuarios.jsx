import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Iconos de crear, editar y eliminar

const Usuarios = () => {
  const [usuarios] = useState([
    { id: 1, nombre: 'Admin', email: 'admin@example.com', rol: 'Administrador', estado: 'Activo' },
    { id: 2, nombre: 'Editor', email: 'editor@example.com', rol: 'Editor', estado: 'Activo' },
    { id: 3, nombre: 'Usuario', email: 'usuario@example.com', rol: 'Usuario', estado: 'Inactivo' },
  ]);

  const [selectedUserId, setSelectedUserId] = useState(null); // Estado para controlar el usuario seleccionado

  const handleRowClick = (id) => {
    // Si el usuario ya está seleccionado, deseleccionarlo
    setSelectedUserId(selectedUserId === id ? null : id);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Gestión de Usuarios</h1>

      {/* Iconos de acción a la izquierda */}
      <div className="flex space-x-6 mb-6 justify-start">
        <button className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 focus:outline-none">
          <FaPlus className="w-8 h-8" />
        </button>
        {selectedUserId && (
          <>
            <button className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 focus:outline-none">
              <FaEdit className="w-8 h-8" />
            </button>
            <button className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 focus:outline-none">
              <FaTrash className="w-8 h-8" />
            </button>
          </>
        )}
      </div>

      {/* Tabla de Usuarios */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-6">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-center text-sm font-medium">ID</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Nombre</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Rol</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr
                key={usuario.id}
                className={`border-b hover:bg-gray-50 cursor-pointer ${
                  selectedUserId === usuario.id ? 'bg-gray-100' : ''
                }`}
                onClick={() => handleRowClick(usuario.id)} // Maneja el clic en la fila
              >
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{usuario.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{usuario.nombre}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{usuario.email}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{usuario.rol}</td>
                <td className="px-6 py-4 text-sm text-center">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      usuario.estado === 'Activo' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {usuario.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usuarios;
