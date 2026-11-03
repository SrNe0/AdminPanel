import ResourcePage from '../components/ResourcePage';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'nombre', label: 'Nombre' },
  { key: 'email', label: 'Email' },
  { key: 'telefono', label: 'Teléfono' },
];

const fields = [
  { key: 'nombre', label: 'Nombre' },
  { key: 'email', label: 'Email', type: 'email' },
  { key: 'telefono', label: 'Teléfono', type: 'tel' },
];

const Clientes = () => (
  <ResourcePage resource="clientes" title="Gestión de Clientes" singular="cliente" columns={columns} fields={fields} />
);

export default Clientes;
