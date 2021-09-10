import React from 'react';
import PropTypes from 'prop-types';

const ProductInfo = ({ product, onClick: handleClick }) => {
  return (
    <article className='product-info'>
      <img className='product-info__image' src={product.itemLink} alt='' />
      <div className='product-info__content'>
        <h2 className='product__name'>
          {product.vendorProductName.toLowerCase()}
        </h2>
        <p className='product__vendor'>{product.vendorName}</p>
        <p className='product__price'>{product.MSRP}</p>
      </div>
      <button
        className='btn btn--close'
        onClick={() => handleClick(product._id)}>
        &#x2715;
      </button>
    </article>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductInfo;
