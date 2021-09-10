import React from 'react';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      {/* products list */}
      <ProductsList />
      {/* cart */}
      <h2>Cart</h2>
    </React.Fragment>
  );
};

export default Layout;
