import React from 'react';
import { useSelector } from 'react-redux';
import ProductInfo from './ProductInfo';

const ShoppingCart = () => {
  const ui = useSelector((state) => state.ui);
  const product = {
    _id: '5f2b6fab44fb72edb82cfeda',
    itemLink:
      'https://files.plytix.com/api/v1.1/file/public_files/pim/assets/a1/ae/d4/5c/5cd4aea1a3dec0046811d88f/images/04/25/f8/5c/5cf82504e5e4ad046c385545/BQ-1019-25.jpg',
    MSRP: 1065,
    vendorName: "Moe's Home Collection CAN",
    vendorProductName: 'JEDRIK OUTDOOR DINING TABLE SMALL',
  };

  const handleClick = (id) => {
    console.log('delete product:>> ', id);
  };
  return (
    <aside
      className={`shopping-cart ${
        ui.shoppingCartCollapsed ? 'shopping-cart--collapsed' : ''
      }`}>
      <div className='shopping-cart__list'>
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
        <ProductInfo product={product} onClick={handleClick} />
      </div>
      <div className='shopping-cart__total-amount'>
        <p className='label'>Total</p>
        <p className='amount price-tag'>1800</p>
      </div>
      <button className='btn btn--black btn--block'>Checkout</button>
    </aside>
  );
};

export default ShoppingCart;
