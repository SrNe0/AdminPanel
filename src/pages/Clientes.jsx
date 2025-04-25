import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'; // Iconos de crear, editar y eliminar

const Clientes = () => {
  // Datos de ejemplo
  const clients = [
    { id: 1, name: 'Cliente A', email: 'clienteA@example.com', phone: '555-0101' },
    { id: 2, name: 'Cliente B', email: 'clienteB@example.com', phone: '555-0102' },
    { id: 3, name: 'Cliente C', email: 'clienteC@example.com', phone: '555-0103' },
  ];

  const [selectedClientId, setSelectedClientId] = useState(null); // Estado para controlar el cliente seleccionado

  const handleRowClick = (id) => {
    // Si el cliente ya está seleccionado, deseleccionarlo
    setSelectedClientId(selectedClientId === id ? null : id);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Gestión de Clientes</h1>

      {/* Iconos de acción a la izquierda */}
      <div className="flex space-x-6 mb-6 justify-start">
        <button className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 focus:outline-none">
          <FaPlus className="w-8 h-8" />
        </button>
        {selectedClientId && (
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

      {/* Tabla de Clientes */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-6">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-center text-sm font-medium">ID</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Nombre</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                className={`border-b hover:bg-gray-50 cursor-pointer ${
                  selectedClientId === client.id ? 'bg-gray-100' : ''
                }`}
                onClick={() => handleRowClick(client.id)} // Maneja el clic en la fila
              >
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{client.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{client.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{client.email}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{client.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clientes;
