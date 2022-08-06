import React, { useState } from 'react';

const Catagory = ({ catagory }) => {
  const {name,picture}=catagory;
  const [hover,setHover]=useState(false);
 const  onmouseenter=(e)=>{
    setHover(true);
    console.log("hoverd",hover);
  }
 const  onmouseleave=(e)=>{
    setHover(false);
    console.log("unhoverd",hover);
  }
 
 
  return (
    <div>
      <div class="card w-72 bg-base-200 shadow-xl ">
        <figure
          onMouseEnter={onmouseenter}
          onMouseLeave={onmouseleave}
          className="hover:scale-125 hover:duration-300 hover:transition hover:ease-in h-72 relative "
        >
          <img src={picture} alt={name} />
        </figure>
        {hover === true ? (
          <div class="card-body absolute bottom-0   py-3 px-3  text-primary bg-secondary/80 w-full">
            <h2 class="  card-title ">{name}</h2>
          </div>
        ) : (
          <div class="card-body absolute bottom-0   py-3 px-3 text-white bg-secondary/80 w-full hidden">
            <h2 class="   card-title ">{name}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catagory;