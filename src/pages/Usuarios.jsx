import ResourcePage from '../components/ResourcePage';

const estadoBadge = (estado) =>
  estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'nombre', label: 'Nombre' },
  { key: 'email', label: 'Email' },
  { key: 'rol', label: 'Rol' },
  { key: 'estado', label: 'Estado', badge: estadoBadge },
];

const fields = [
  { key: 'nombre', label: 'Nombre' },
  { key: 'email', label: 'Email', type: 'email' },
  { key: 'rol', label: 'Rol', options: ['Administrador', 'Editor', 'Usuario'] },
  { key: 'estado', label: 'Estado', options: ['Activo', 'Inactivo'] },
];

const Usuarios = () => (
  <ResourcePage resource="usuarios" title="Gestión de Usuarios" singular="usuario" columns={columns} fields={fields} />
);

export default Usuarios;
