import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-200 to-gray-100">
    <Navbar className="bg-blue-500 text-white shadow-md" />
    <main className="flex-1 w-full p-6 md:p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <Outlet />
      </div>
    </main>
  </div>
  );
};

export default Layout;