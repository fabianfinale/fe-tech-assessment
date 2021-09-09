import React from 'react';
import Header from './components/Header';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      {/* products list */}
      <h2>Products List</h2>
      {/* cart */}
      <h2>Cart</h2>
    </React.Fragment>
  );
};

export default Layout;
