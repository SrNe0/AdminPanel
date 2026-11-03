export const seedData = {
  clientes: [
    { id: 1, nombre: 'Ana Torres', email: 'ana.torres@example.com', telefono: '555-0101' },
    { id: 2, nombre: 'Luis Ramírez', email: 'luis.ramirez@example.com', telefono: '555-0102' },
    { id: 3, nombre: 'Marta Gómez', email: 'marta.gomez@example.com', telefono: '555-0103' },
  ],
  proveedores: [
    { id: 1, nombre: 'ElectroSur', contacto: 'Juan Pérez', productos: 'Materiales eléctricos' },
    { id: 2, nombre: 'Herramientas del Norte', contacto: 'María García', productos: 'Herramientas' },
    { id: 3, nombre: 'Oficina Plus', contacto: 'Carlos López', productos: 'Insumos de oficina' },
  ],
  usuarios: [
    { id: 1, nombre: 'Admin', email: 'admin@example.com', rol: 'Administrador', estado: 'Activo' },
    { id: 2, nombre: 'Editor', email: 'editor@example.com', rol: 'Editor', estado: 'Activo' },
    { id: 3, nombre: 'Invitado', email: 'invitado@example.com', rol: 'Usuario', estado: 'Inactivo' },
  ],
};
