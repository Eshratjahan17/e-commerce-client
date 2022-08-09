import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Catagory = () => {
  
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
    <div >
      
      <div >
        <Link to="">
          <figure
            onMouseEnter={onmouseenter}
            onMouseLeave={onmouseleave}
            className="hover:scale-125 hover:duration-300 hover:transition hover:ease-in relative h-48  "
          >
            <img className="h-full w-full" src="" alt="" />
          </figure>
        </Link>

        {hover === true ? (
          <div class="card-body absolute bottom-0   py-3 px-3  text-primary bg-secondary/80 w-full">
            <h2 class="  card-title "></h2>
          </div>
        ) : (
          <div class="card-body absolute bottom-0   py-3 px-3 text-white bg-secondary/80 w-full hidden">
            <h2 class="   card-title "></h2>
          </div>
        )}
      </div>
      <div >
        <Link to="">
          <figure
            onMouseEnter={onmouseenter}
            onMouseLeave={onmouseleave}
            className="hover:scale-125 hover:duration-300 hover:transition hover:ease-in relative h-48  "
          >
            <img className="h-full w-full" src="" alt="" />
          </figure>
        </Link>

        {hover === true ? (
          <div class="card-body absolute bottom-0   py-3 px-3  text-primary bg-secondary/80 w-full">
            <h2 class="  card-title "></h2>
          </div>
        ) : (
          <div class="card-body absolute bottom-0   py-3 px-3 text-white bg-secondary/80 w-full hidden">
            <h2 class="   card-title "></h2>
          </div>
        )}
      </div>
      <div >
        <Link to="">
          <figure
            onMouseEnter={onmouseenter}
            onMouseLeave={onmouseleave}
            className="hover:scale-125 hover:duration-300 hover:transition hover:ease-in relative h-48  "
          >
            <img className="h-full w-full" src="" alt="" />
          </figure>
        </Link>

        {hover === true ? (
          <div class="card-body absolute bottom-0   py-3 px-3  text-primary bg-secondary/80 w-full">
            <h2 class="  card-title ">""</h2>
          </div>
        ) : (
          <div class="card-body absolute bottom-0   py-3 px-3 text-white bg-secondary/80 w-full hidden">
            <h2 class="   card-title ">""</h2>
          </div>
        )}
      </div>
      <div >
        <Link to="">
          <figure
            onMouseEnter={onmouseenter}
            onMouseLeave={onmouseleave}
            className="hover:scale-125 hover:duration-300 hover:transition hover:ease-in relative h-48  "
          >
            <img className="h-full w-full" src="" alt="" />
          </figure>
        </Link>

        {hover === true ? (
          <div class="card-body absolute bottom-0   py-3 px-3  text-primary bg-secondary/80 w-full">
            <h2 class="  card-title "></h2>
          </div>
        ) : (
          <div class="card-body absolute bottom-0   py-3 px-3 text-white bg-secondary/80 w-full hidden">
            <h2 class="   card-title "></h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catagory;