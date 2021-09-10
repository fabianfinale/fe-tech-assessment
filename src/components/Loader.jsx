import React from 'react';

const Loader = () => {
  return (
    <section className='loader'>
      <div className='loader__spinner'></div>
      <p className='loader__text'>Loading products...</p>
    </section>
  );
};

export default Loader;
