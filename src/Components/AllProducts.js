import React from 'react';
import useAllProducts from '../Hooks/useAllProducts';
import Product from './Product';
import SearchProduct from './SearchProduct';

const AllProducts = ({ search }) => {
  const [allProducts] = useAllProducts();

  return (
    <div className="my-9">
      {search ? (
        <div className='bg-base-100' >
          {/* <h1 className="text-center mb-5 text-3xl font-bold   text-primary ">
            Your Search
          </h1> */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 pl-9 ">
            {search.map(searchProduct=><SearchProduct searchProduct={searchProduct}></SearchProduct>)}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center mb-5 text-3xl font-bold   text-primary">
            All Products
          </h1>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 pl-9 ">
            {allProducts.map((product) => (
              <Product product={product}></Product>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;