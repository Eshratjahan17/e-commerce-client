import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../Shared/Loading';
import Thumbnil from './Thumbnil';

const ProductDetails = () => {
  let {id}=useParams();
  
  const [product,setProduct]=useState([]);
  const [thumbIndex,setThumbIndex]=useState(0);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/allcatagory/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
       
          setProduct(data);
       
      });
  }, []);
  const {picture,name,thum}=product;
  console.log(picture,name,thum);

  const handlethumb=(ind)=>{
    setThumbIndex(ind);
    console.log(ind);
  }
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div className="flex flex-col">
            <div>
              <img src={picture} class="max-w-sm rounded-lg shadow-2xl" />
            </div>
            <div className="flex  justify-center my-2 gap-2">
              {thum.map((image, index) => (
                <Thumbnil
                  image={image}
                  index={index}
                  handlethumb={handlethumb}
                ></Thumbnil>
              ))}

              {/* <img
                className="max-w-sm rounded-lg shadow-2xl w-24 h-24 border-cyan-900 border-2"
                src={product?.img2}
                alt=""
              />
              <img
                className="max-w-sm rounded-lg shadow-2xl w-24 h-24 border-cyan-900 border-2"
                src={product?.img3}
                alt=""
              /> */}
              {/* <img
                className="max-w-sm rounded-lg shadow-2xl w-24 h-24 border-cyan-900 border-2"
                src={product?.img1}
                alt=""
              /> */}
            </div>
          </div>

          <div>
            <h1 class="text-5xl font-bold">{product.name}!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;