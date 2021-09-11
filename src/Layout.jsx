import React, { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart';

const Layout = () => {
  const productsList = useRef(null);

  const handleClick = () => {
    window.scrollTo({
      left: 0,
      top: productsList.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Header onClick={handleClick} />
      <ProductsList reference={productsList} />
      <ShoppingCart />
    </React.Fragment>
  );
};

export default Layout;
