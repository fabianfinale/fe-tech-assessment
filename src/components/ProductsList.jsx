import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/products';
import Product from './Product';

const ProductsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.entities.products);

  const handleClick = (id) => {
    console.log('clicked :>> ', id);
  };

  return (
    <main className='products-list'>
      {products.list.map((product) => (
        <Product
          key={product}
          product={products.byId[product]}
          onClick={handleClick}
        />
      ))}
    </main>
  );
};

export default ProductsList;
