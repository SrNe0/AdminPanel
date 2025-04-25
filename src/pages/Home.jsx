import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Bienvenido al Panel Administrativo</h1>

      {/* Contenedor de las tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Panel de Clientes */}
        <div className="bg-blue-50 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-blue-600">Clientes</h2>
          <p className="text-gray-700 text-2xl font-bold">24</p>
          <p className="text-sm text-gray-500">Administra tu lista de clientes</p>
        </div>

        {/* Panel de Proveedores */}
        <div className="bg-green-50 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-green-600">Proveedores</h2>
          <p className="text-gray-700 text-2xl font-bold">8</p>
          <p className="text-sm text-gray-500">Gestiona tus proveedores</p>
        </div>

        {/* Panel de Usuarios */}
        <div className="bg-purple-50 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-purple-600">Usuarios</h2>
          <p className="text-gray-700 text-2xl font-bold">5</p>
          <p className="text-sm text-gray-500">Controla los accesos al sistema</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
