import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = ({ onClick: handleClick }) => {
  return (
    <header className='header'>
      <picture>
        <source
          srcSet={`${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_190.webp')
              .default
          } 190w, 
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_1269.webp')
              .default
          } 1269w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_1761.webp')
              .default
          } 1761w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_2273.webp')
              .default
          } 2273w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_2651.webp')
              .default
          } 2651w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_2858.webp')
              .default
          } 2858w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_2977.webp')
              .default
          } 2977w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_3243.webp')
              .default
          } 3243w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_3376.webp')
              .default
          } 3376w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_3400.webp')
              .default
          } 3400w`}
          type='image/webp'
        />
        <source
          srcSet={`${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_190.jpg')
              .default
          } 190w, 
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_1269.jpg')
              .default
          } 1269w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_1761.jpg')
              .default
          } 1761w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_2273.jpg')
              .default
          } 2273w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_2651.jpg')
              .default
          } 2651w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_2858.jpg')
              .default
          } 2858w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_2977.jpg')
              .default
          } 2977w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_3243.jpg')
              .default
          } 3243w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_3376.jpg')
              .default
          } 3376w,
          ${
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_3400.jpg')
              .default
          } 3400w`}
          type='image/jpeg'
        />
        <img
          className='header__image'
          src={
            require('../assets/img/header/kam-idris-_HqHX3LBN18-unsplash_y7azfv_c_scale,w_3400.jpg')
              .default
          }
          alt='Modern minimalist home design'
        />
      </picture>
      <div className='header__content'>
        <h1>Patio Furniture</h1>
        <button className='btn btn--black' onClick={handleClick}>
          <FontAwesomeIcon icon='store' fixedWidth /> Shop
        </button>
      </div>
    </header>
  );
};

export default Header;
