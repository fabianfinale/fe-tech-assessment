import React from 'react';
import { useDispatch } from 'react-redux';
import { changeShoppingCartStatus } from '../store/ui';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('clicked');
    dispatch(changeShoppingCartStatus());
  };

  return (
    <nav className='navbar'>
      <a className='navbar__brand' href='/'>
        Fülhaus Shop
      </a>
      <button className='btn btn--black btn--stretched' onClick={handleClick}>
        Cart
      </button>
    </nav>
  );
};

export default Navbar;
