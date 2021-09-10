import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a className='navbar__brand' href='/'>
        Fülhaus Shop
      </a>
      <button className='btn btn--black navbar__btn'>Cart</button>
    </nav>
  );
};

export default Navbar;
