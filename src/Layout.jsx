import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';

const Layout = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Header />
      {/* products list */}
      <ProductsList />
      {/* cart */}
      <h2>Cart</h2>
    </React.Fragment>
  );
};

export default Layout;
