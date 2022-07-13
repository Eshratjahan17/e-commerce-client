import React from 'react';
import Airpods from './Airpods/Airpods';
import AllProducts from './AllProducts';
import Banner from './Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllProducts></AllProducts>
      <Airpods></Airpods>
    </div>
  );
};

export default Home;