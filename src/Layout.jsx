import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

const Layout = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <Header />
      {/* products list */}
      <ProductsList />
      {/* cart */}
      <h2>Cart</h2>
    </React.Fragment>
  );
};

export default Layout;
