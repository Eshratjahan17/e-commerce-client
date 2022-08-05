import React from 'react';
import SearchProduct from './SearchProduct';

const Search = ({ search }) => {

  return (
    <div className="my-9">
      <div className="bg-base-100">
        {/* <h1 className="text-center mb-5 text-3xl font-bold   text-primary ">
            Your Search
          </h1> */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 pl-9 ">
          {search.map((searchProduct) => (
            <SearchProduct searchProduct={searchProduct}></SearchProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;