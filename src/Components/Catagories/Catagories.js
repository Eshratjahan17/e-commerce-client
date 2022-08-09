import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Catagories = () => {
   const [hover, setHover] = useState(false);
   const onmouseenter = (e) => {
     setHover(true);
     console.log("hoverd", hover);
   };
   const onmouseleave = (e) => {
     setHover(false);
     console.log("unhoverd", hover);
   };

  
  
  return (
    <div className="px-5 py-3  bg-base-200">
      <div>
        <h1 className="px-9 py-9 text-3xl font-bold   text-primary">
          Catagories
        </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 pl-9 ">
          <div class="card w-72 bg-base-200 shadow-xl ">
            <Link to="/phone">
              <figure
                onMouseEnter={onmouseenter}
                onMouseLeave={onmouseleave}
                className="hover:scale-125 hover:duration-300 hover:transition hover:ease-in relative h-48  "
              >
                <img
                  className="h-full w-full"
                  src="https://i.ibb.co/jDpqxxS/phones.jpg"
                  alt="phone"
                />
              </figure>
            </Link>

            {hover === true ? (
              <div class="card-body absolute bottom-0   py-3 px-3  text-primary bg-secondary/80 w-full">
                <h2 class="  card-title ">Phone</h2>
              </div>
            ) : (
              <div class="card-body absolute bottom-0   py-3 px-3 text-white bg-secondary/80 w-full hidden">
                <h2 class="   card-title ">Phone</h2>
              </div>
            )}
          </div>
          <div class="card w-72 bg-base-200 shadow-xl ">
            <Link to="/laptop">
              <figure
                onMouseEnter={onmouseenter}
                onMouseLeave={onmouseleave}
                className="hover:scale-125 hover:duration-300 hover:transition hover:ease-in relative h-48  "
              >
                <img
                  className="h-full w-full"
                  src="https://i.ibb.co/s9g17CY/laptop.jpg"
                  alt="Laptop"
                />
              </figure>
            </Link>

            {hover === true ? (
              <div class="card-body absolute bottom-0   py-3 px-3  text-primary bg-secondary/80 w-full">
                <h2 class="  card-title ">Laptop</h2>
              </div>
            ) : (
              <div class="card-body absolute bottom-0   py-3 px-3 text-white bg-secondary/80 w-full hidden">
                <h2 class="   card-title ">Laptop</h2>
              </div>
            )}
          </div>
          <div class="card w-72 bg-base-200 shadow-xl ">
            <Link to="/smartWatch">
              <figure
                onMouseEnter={onmouseenter}
                onMouseLeave={onmouseleave}
                className="hover:scale-125 hover:duration-300 hover:transition hover:ease-in relative h-48  "
              >
                <img
                  className="h-full w-full"
                  src="https://cdn.mos.cms.futurecdn.net/auzm2KC5jvfjxLzQhuPmPF.jpg"
                  alt="SmartWatch"
                />
              </figure>
            </Link>

            {hover === true ? (
              <div class="card-body absolute bottom-0   py-3 px-3  text-primary bg-secondary/80 w-full">
                <h2 class="  card-title ">SmartWatch</h2>
              </div>
            ) : (
              <div class="card-body absolute bottom-0   py-3 px-3 text-white bg-secondary/80 w-full hidden">
                <h2 class="   card-title ">SmartWatch</h2>
              </div>
            )}
          </div>
          <div class="card w-72 bg-base-200 shadow-xl ">
            <Link to="/headphone">
              <figure
                onMouseEnter={onmouseenter}
                onMouseLeave={onmouseleave}
                className="hover:scale-125 hover:duration-300 hover:transition hover:ease-in relative h-48  "
              >
                <img
                  className="h-full w-full"
                  src="https://i.ibb.co/v1t898Y/Air-Pods-Lineup-Feature-Triad.jpg"
                  alt="HeadPhone"
                />
              </figure>
            </Link>

            {hover === true ? (
              <div class="card-body absolute bottom-0   py-3 px-3  text-primary bg-secondary/80 w-full">
                <h2 class="  card-title ">Head Phone</h2>
              </div>
            ) : (
              <div class="card-body absolute bottom-0   py-3 px-3 text-white bg-secondary/80 w-full hidden">
                <h2 class="   card-title ">Head Phone</h2>
              </div>
            )}
          </div>
          <div class="card w-72 bg-base-200 shadow-xl ">
            <Link to="/SmartTv">
              <figure
                onMouseEnter={onmouseenter}
                onMouseLeave={onmouseleave}
                className="hover:scale-125 hover:duration-300 hover:transition hover:ease-in relative h-48  "
              >
                <img
                  className="h-full w-full"
                  src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/24-inch-led-tv-in-india?scl=1"
                  alt="Smart Tv"
                />
              </figure>
            </Link>

            {hover === true ? (
              <div class="card-body absolute bottom-0   py-3 px-3  text-primary bg-secondary/80 w-full">
                <h2 class="  card-title ">Smart Tv</h2>
              </div>
            ) : (
              <div class="card-body absolute bottom-0   py-3 px-3 text-white bg-secondary/80 w-full hidden">
                <h2 class="   card-title "> Smart Tv</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;