import React from 'react';

const Product = ({product}) => {
  const { picture ,name,price} = product;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className='h-64' src={picture} alt={name} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Details</button>
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;