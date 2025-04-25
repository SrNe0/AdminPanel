import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Iconos de edición y eliminación

const Proveedor = () => {
  const [proveedores] = useState([
    { id: 1, nombre: 'Proveedor X', contacto: 'Juan Pérez', productos: 'Materiales eléctricos' },
    { id: 2, nombre: 'Proveedor Y', contacto: 'María García', productos: 'Herramientas' },
    { id: 3, nombre: 'Proveedor Z', contacto: 'Carlos López', productos: 'Insumos de oficina' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Proveedores</h1>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          + Nuevo Proveedor
        </button>
      </div>

      {/* Tarjetas de proveedores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proveedores.map((proveedor) => (
          <div key={proveedor.id} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{proveedor.nombre}</h3>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Contacto:</span> {proveedor.contacto}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Productos:</span> {proveedor.productos}
              </p>
            </div>
            <div className="mt-6 flex justify-between space-x-4">
              <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none">
                <FaEdit className="w-5 h-5" />
              </button>
              <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none">
                <FaTrash className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proveedor;
