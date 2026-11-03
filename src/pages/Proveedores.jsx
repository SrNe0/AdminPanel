import ResourcePage from '../components/ResourcePage';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'nombre', label: 'Nombre' },
  { key: 'contacto', label: 'Contacto' },
  { key: 'productos', label: 'Productos' },
];

const fields = [
  { key: 'nombre', label: 'Nombre' },
  { key: 'contacto', label: 'Contacto' },
  { key: 'productos', label: 'Productos' },
];

const Proveedores = () => (
  <ResourcePage resource="proveedores" title="Gestión de Proveedores" singular="proveedor" columns={columns} fields={fields} />
);

export default Proveedores;
