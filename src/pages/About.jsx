const stack = ['React 19', 'Vite 6', 'Tailwind CSS 4', 'React Router 7', 'Vitest', 'GitHub Actions'];

const About = () => (
  <div className="max-w-3xl space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">Acerca de AdminPanel</h1>
    <p className="text-gray-700">
      AdminPanel es un panel administrativo de demostración para gestionar clientes, proveedores y usuarios.
      Es un proyecto de portafolio pensado para mostrar una arquitectura limpia de frontend con React: rutas
      protegidas, estado global con Context API, formularios con validación y persistencia local.
    </p>
    <div>
      <h2 className="mb-2 text-xl font-semibold text-gray-900">Tecnologías</h2>
      <ul className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <li key={item} className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">{item}</li>
        ))}
      </ul>
    </div>
    <div>
      <h2 className="mb-2 text-xl font-semibold text-gray-900">Nota</h2>
      <p className="text-gray-700">
        No existe un servidor: los datos se guardan en el <code>localStorage</code> de tu navegador y la sesión
        es simulada con credenciales de demostración.
      </p>
    </div>
    <p className="text-gray-700">
      Creado por <strong>Diego Medina</strong> ·{' '}
      <a className="text-indigo-600 hover:underline" href="https://github.com/SrNe0/AdminPanel" target="_blank" rel="noreferrer">
        Código en GitHub
      </a>{' '}
      · Licencia MIT.
    </p>
  </div>
);

export default About;
