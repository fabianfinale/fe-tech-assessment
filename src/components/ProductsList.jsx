import React from 'react';
import Product from './Product';

const ProductsList = () => {
  const products = [
    {
      _id: 1,
      imageURLs:
        'https://files.plytix.com/api/v1.1/file/public_files/pim/assets/a1/ae/d4/5c/5cd4aea1a3dec0046811d88f/images/04/25/f8/5c/5cf82504e5e4ad046c385545/BQ-1019-25.jpg',
      vendorProductName: 'Product Name',
      vendorName: 'BRAND NAME',
      MSRP: 1065,
    },
    {
      _id: 2,
      imageURLs:
        'https://files.plytix.com/api/v1.1/file/public_files/pim/assets/a1/ae/d4/5c/5cd4aea1a3dec0046811d88f/images/04/25/f8/5c/5cf82504e5e4ad046c385545/BQ-1019-25.jpg',
      vendorProductName: 'JEDRIK OUTDOOR DINING TABLE SMALL',
      vendorName: "Moe's Home Collection CAN",
      MSRP: 1065,
    },
    {
      _id: 3,
      imageURLs:
        'https://files.plytix.com/api/v1.1/file/public_files/pim/assets/a1/ae/d4/5c/5cd4aea1a3dec0046811d88f/images/04/25/f8/5c/5cf82504e5e4ad046c385545/BQ-1019-25.jpg',
      vendorProductName: 'LUCIUS OUTDOOR STOOL',
      vendorName: "Moe's Home Collection CAN",
      MSRP: 1065,
    },
    {
      _id: 4,
      imageURLs:
        'https://files.plytix.com/api/v1.1/file/public_files/pim/assets/a1/ae/d4/5c/5cd4aea1a3dec0046811d88f/images/04/25/f8/5c/5cf82504e5e4ad046c385545/BQ-1019-25.jpg',
      vendorProductName: 'IVEY OUTDOOR CONSOLE TABLE',
      vendorName: "Moe's Home Collection CAN",
      MSRP: 1065,
    },
    {
      _id: 5,
      imageURLs:
        'https://files.plytix.com/api/v1.1/file/public_files/pim/assets/a1/ae/d4/5c/5cd4aea1a3dec0046811d88f/images/04/25/f8/5c/5cf82504e5e4ad046c385545/BQ-1019-25.jpg',
      vendorProductName: 'DECO DINING CHAIR GREY-M2',
      vendorName: "Moe's Home Collection CAN",
      MSRP: 1065,
    },
    {
      _id: 6,
      imageURLs:
        'https://files.plytix.com/api/v1.1/file/public_files/pim/assets/a1/ae/d4/5c/5cd4aea1a3dec0046811d88f/images/04/25/f8/5c/5cf82504e5e4ad046c385545/BQ-1019-25.jpg',
      vendorProductName: 'ZIO SIDETABLE WALNUT',
      vendorName: "Moe's Home Collection CAN",
      MSRP: 1065,
    },
  ];

  const handleClick = (id) => {
    console.log('clicked :>> ', id);
  };

  return (
    <main className='products-list'>
      {products.map((product) => (
        <Product key={product._id} product={product} onClick={handleClick} />
      ))}
    </main>
  );
};

export default ProductsList;
