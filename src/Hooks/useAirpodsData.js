import { useEffect, useState } from 'react';

const useAirpodsData = () => {
  const [airpods,setAirpods]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/airpods")
    .then(res=>res.json())
    .then(data=>setAirpods(data))

  },[])
  return [airpods];
};

export default useAirpodsData;