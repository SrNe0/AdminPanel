import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-200 to-gray-100">
    <Navbar />
    <main className="w-full flex-1 p-4 md:p-8">
      <div className="rounded-lg bg-white p-4 shadow-lg md:p-8">
        <Outlet />
      </div>
    </main>
  </div>
);

export default Layout;
