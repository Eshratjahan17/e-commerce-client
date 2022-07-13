import React from 'react';
import useAllProducts from '../Hooks/useAllProducts';
import Product from './Product';

const AllProducts = () => {
  const [allProducts]=useAllProducts();
  console.log(allProducts);
  return (
    <div className='my-9'>
      <h1 className='text-center mb-5 text-3xl font-bold   text-primary'>All Products</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 pl-9 ">
        {allProducts.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;