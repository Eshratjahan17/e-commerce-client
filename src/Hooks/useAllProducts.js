import { useEffect, useState } from 'react';

const useAllProducts = () => {
  const [allProducts,setAllProducts]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/allcatagory")
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setAllProducts(data);
    })

  },[])
  return [allProducts];
};

export default useAllProducts;