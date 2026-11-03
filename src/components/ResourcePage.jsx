import { useMemo, useState } from 'react';
import { FaEdit, FaPlus, FaSearch, FaTrash } from 'react-icons/fa';
import { useData } from '../context/DataContext';
import { filterItems } from '../lib/collection';
import Modal from './Modal';
import ResourceForm from './ResourceForm';

const ResourcePage = ({ resource, title, singular, columns, fields }) => {
  const { data, add, update, remove } = useData();
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState(null); // null | 'new' | item
  const [deleting, setDeleting] = useState(null);

  const rows = useMemo(() => filterItems(data[resource], query), [data, resource, query]);

  const handleSubmit = (values) => {
    if (editing === 'new') add(resource, values);
    else update(resource, editing.id, values);
    setEditing(null);
  };

  const handleDelete = () => {
    remove(resource, deleting.id);
    setDeleting(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>
        <button
          onClick={() => setEditing('new')}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
        >
          <FaPlus aria-hidden="true" /> Nuevo {singular}
        </button>
      </div>

      <div className="relative max-w-sm">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
        <input
          type="search"
          aria-label={`Buscar en ${title}`}
          placeholder="Buscar..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full table-auto bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-3 text-left text-sm font-medium">{column.label}</th>
              ))}
              <th className="px-6 py-3 text-right text-sm font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 text-sm text-gray-900">
                    {column.badge ? (
                      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${column.badge(row[column.key])}`}>
                        {row[column.key]}
                      </span>
                    ) : (
                      row[column.key]
                    )}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setEditing(row)}
                      aria-label={`Editar ${row.nombre}`}
                      className="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
                    >
                      <FaEdit aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => setDeleting(row)}
                      aria-label={`Eliminar ${row.nombre}`}
                      className="rounded-md bg-red-500 p-2 text-white hover:bg-red-600"
                    >
                      <FaTrash aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-8 text-center text-gray-500">
                  No hay registros que mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editing && (
        <Modal title={editing === 'new' ? `Nuevo ${singular}` : `Editar ${singular}`} onClose={() => setEditing(null)}>
          <ResourceForm
            fields={fields}
            initialValues={editing === 'new' ? null : editing}
            onSubmit={handleSubmit}
            onCancel={() => setEditing(null)}
          />
        </Modal>
      )}

      {deleting && (
        <Modal title={`Eliminar ${singular}`} onClose={() => setDeleting(null)}>
          <p className="mb-6 text-gray-700">
            ¿Seguro que quieres eliminar a <strong>{deleting.nombre}</strong>? Esta acción no se puede deshacer.
          </p>
          <div className="flex justify-end gap-3">
            <button onClick={() => setDeleting(null)} className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
              Cancelar
            </button>
            <button onClick={handleDelete} className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">
              Eliminar
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ResourcePage;
