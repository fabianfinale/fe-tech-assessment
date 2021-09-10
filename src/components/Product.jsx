import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product, onClick: handleClick }) => {
  return (
    <article className='products-list__product'>
      <img
        className='products-list__product-image'
        src={product.imageURLs[0]}
        alt={product.title}
      />
      <div className='products-list__product-content'>
        <h2 className='products-list__product-name'>
          {product.vendorProductName.toLowerCase()}
          <span className='products-list__product-brand'>
            {product.vendorName}
          </span>
        </h2>
        <button
          className='products-list__product-btn btn--link'
          onClick={() => handleClick(product._id)}>
          Add to cart
        </button>
        <p className='products-list__product-price'>${product.MSRP}</p>
      </div>
    </article>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Product;
