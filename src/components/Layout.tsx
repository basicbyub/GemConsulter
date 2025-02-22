import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import TopBar from './TopBar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;