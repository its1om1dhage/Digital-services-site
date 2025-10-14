import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <main style={{ marginTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
