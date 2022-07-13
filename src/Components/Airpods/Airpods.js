import React from 'react';
import useAirpodsData from '../../Hooks/useAirpodsData';
import Airpod from './Airpod';

const Airpods = () => {
  const [airpods]=useAirpodsData();
  console.log(airpods);
  return (
    <div className="my-9">
      <h1 className="text-center mb-5 text-3xl font-bold   text-primary">
        Airpods
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 pl-9 ">
        {airpods.map((airpod) => (
          <Airpod airpod={airpod}></Airpod>
        ))}
      </div>
    </div>
  );
};

export default Airpods;