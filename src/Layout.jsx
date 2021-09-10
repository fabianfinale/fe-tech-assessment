import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart';

const Layout = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Header />
      {/* products list */}
      <ProductsList />
      {/* cart */}
      <ShoppingCart />
    </React.Fragment>
  );
};

export default Layout;
