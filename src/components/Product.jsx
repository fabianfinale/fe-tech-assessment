import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ product, onClick: handleClick }) => {
  return (
    <article className='product'>
      <img
        className='product__image'
        src={product.itemLink}
        alt={product.title}
      />
      <div className='product__content'>
        <h2 className='product__name'>
          {product.vendorProductName.toLowerCase()}
          <span className='product__vendor'>{product.vendorName}</span>
        </h2>
        <button
          className='btn btn--add-to-cart'
          onClick={() => handleClick(product._id)}>
          <FontAwesomeIcon icon='cart-plus' fixedWidth /> Add to cart
        </button>
        <p className='product__price price-tag'>{product.MSRP}</p>
      </div>
    </article>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Product;
