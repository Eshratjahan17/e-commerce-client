import React from 'react';
import useCatagories from '../../Hooks/useCatagories';
import Catagory from './Catagory';

const Catagories = () => {
  const [catagories]=useCatagories();
  
  
  return (
    <div className="px-5 py-3  bg-base-200">
      <div>
        <h1 className="px-9 py-9 text-3xl font-bold   text-primary">Catagories</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-2 pl-9 ">
{
  catagories.map(catagory=> <Catagory
  catagory={catagory}
  ></Catagory>)
}
        </div>
      </div>
    </div>
  );
};

export default Catagories;