import { useEffect, useState } from 'react';

const useCatagories = () => {
  const [catagories,setCatagories]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  },[])
  return [catagories]
};

export default useCatagories;