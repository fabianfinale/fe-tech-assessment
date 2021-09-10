import React from 'react';

const Loader = () => {
  return (
    <div>
      Loading products...
      <svg
        version='1.1'
        id='L3'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        // height='50px'
        // width='50px'
        viewBox='0 0 100 100'
        enableBackground='new 0 0 0 0'
        xmlSpace='preserve'>
        <circle
          fill='none'
          stroke='#003941'
          strokeWidth='4'
          cx='50'
          cy='50'
          r='44'
          style={{ opacity: 0.5 }}
        />
        <circle
          fill='#f7efe7'
          stroke='#003941'
          strokeWidth='3'
          cx='8'
          cy='54'
          r='6'>
          <animateTransform
            attributeName='transform'
            dur='2s'
            type='rotate'
            from='0 50 48'
            to='360 50 52'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loader;
