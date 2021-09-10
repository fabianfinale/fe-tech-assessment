import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../store/cart';
import ProductInfo from './ProductInfo';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.entities.cart);

  const itemsList = [];

  for (const key in cart.items) {
    itemsList.push(cart.items[key]);
  }

  const totalAmount = itemsList.reduce((acc, current) => acc + current.MSRP, 0);

  const handleClick = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <aside
      className={`shopping-cart ${
        ui.shoppingCartCollapsed ? 'shopping-cart--collapsed' : ''
      }`}>
      <div className='shopping-cart__list'>
        {itemsList.length > 0 ? (
          itemsList.map((item) => (
            <ProductInfo key={item._id} product={item} onClick={handleClick} />
          ))
        ) : (
          <div className='shopping-cart--empty-list'>
            <FontAwesomeIcon className='icon' icon='shopping-cart' fixedWidth />
          </div>
        )}
      </div>
      <div className='shopping-cart__total-amount'>
        <p className='label'>Total</p>
        <p className='amount price-tag'>{totalAmount}</p>
      </div>
      <button className='btn btn--black btn--block'>
        <FontAwesomeIcon icon='cart-arrow-down' fixedWidth /> Checkout
      </button>
    </aside>
  );
};

export default ShoppingCart;
