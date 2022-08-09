import { useEffect, useState } from 'react';

const useHeadphonesData = () => {
  const [headphones, setHeadphones] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/airpods")
      .then((res) => res.json())
      .then((data) => setHeadphones(data));

  },[])
  return [headphones];
};

export default useHeadphonesData;