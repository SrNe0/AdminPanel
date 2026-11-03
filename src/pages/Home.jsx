import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const cards = [
  { resource: 'clientes', to: '/clientes', title: 'Clientes', text: 'Administra tu lista de clientes', bg: 'bg-blue-50', fg: 'text-blue-600' },
  { resource: 'proveedores', to: '/proveedores', title: 'Proveedores', text: 'Gestiona tus proveedores', bg: 'bg-green-50', fg: 'text-green-600' },
  { resource: 'usuarios', to: '/usuarios', title: 'Usuarios', text: 'Controla los accesos al sistema', bg: 'bg-purple-50', fg: 'text-purple-600' },
];

const Home = () => {
  const { data } = useData();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Bienvenido al Panel Administrativo</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.resource}
            to={card.to}
            className={`rounded-lg p-6 shadow-lg transition-shadow hover:shadow-xl ${card.bg}`}
          >
            <h2 className={`text-xl font-semibold ${card.fg}`}>{card.title}</h2>
            <p className="text-2xl font-bold text-gray-700">{data[card.resource].length}</p>
            <p className="text-sm text-gray-500">{card.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
