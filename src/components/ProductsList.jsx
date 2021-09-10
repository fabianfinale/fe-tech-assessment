import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cart';
import { loadProducts } from '../store/products';
import Loader from './Loader';
import Product from './Product';

const ProductsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.entities.products);

  const handleClick = (id) => {
    dispatch(addItem(products.byId[id]));
  };

  return (
    <main className='products-list'>
      {products.loading ? (
        <Loader />
      ) : (
        products.list.map((product) => (
          <Product
            key={product}
            product={products.byId[product]}
            onClick={handleClick}
          />
        ))
      )}
    </main>
  );
};

export default ProductsList;
