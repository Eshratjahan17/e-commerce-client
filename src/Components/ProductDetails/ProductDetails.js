import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
  let {id}=useParams();
  console.log(id);
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/allcatagory/${id}`)
    .then(res=>res.json())
    .then(data=>console.log(data))

  },[]);
  return (
    <div>
      
    </div>
  );
};

export default ProductDetails;