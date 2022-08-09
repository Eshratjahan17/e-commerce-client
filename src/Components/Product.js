import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  const { picture ,name,price,_id} = product;
  const [clickCount,setClickCount]=useState(0);
 
 
  const handleClick=(id)=>{
    
   
    setClickCount(clickCount+1);
    console.log(clickCount,id);
    
     
  }
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64" src={picture} alt={name} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{price}</p>
          <div class="card-actions justify-end">
            <Link
              to="/allcatagory/:id"
              onClick={() => handleClick(_id)}
              class="btn btn-primary"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;