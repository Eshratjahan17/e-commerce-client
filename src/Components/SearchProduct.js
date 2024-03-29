import React from 'react';

const SearchProduct = ({ searchProduct }) => {
  
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-64"
            src={searchProduct?.picture}
            alt={searchProduct?.name}
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{searchProduct?.name}</h2>
          <p>{searchProduct?.price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Details</button>
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;