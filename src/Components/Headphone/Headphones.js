import React from 'react';
import useHeadphonesData from '../../Hooks/useHeadphonesData';
import Headphone from "./Headphone";

const Headphones = () => {
  const [headphones] = useHeadphonesData();
  console.log(headphones);
  return (
    <div className="my-9">
      <h1 className="text-center mb-5 text-3xl font-bold   text-primary">
        Airpods
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 pl-9 ">
        {headphones.map((headphone) => (
          <Headphone headphone={headphone}></Headphone>
        ))}
      </div>
    </div>
  );
};

export default Headphones;