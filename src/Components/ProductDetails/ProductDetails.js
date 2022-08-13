import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
  let {id}=useParams();
  console.log(id);
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    const url = `http://localhost:5000/allcatagory/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));

  },[]);
  return (
    <div>
     {product.name}
    </div>
  );
};

export default ProductDetails;