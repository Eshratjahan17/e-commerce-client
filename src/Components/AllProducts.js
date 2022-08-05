import React, { useEffect, useState } from 'react';
import '../Components/AllProducts.css';
import Product from './Product';

const AllProducts = () => {
 const [allProducts, setAllProducts] = useState([]);
  const [pageCount ,setPageCount]=useState(0);
  const [page,setPage]=useState(0);
   useEffect(() => {
     fetch(`http://localhost:5000/allcatagory?page=${page}`)
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setAllProducts(data);
       });
   }, [page]);
  useEffect(()=>{
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) =>{
        const count=data.count;
        const pages=Math.ceil(count/4);
        setPageCount(pages);
        console.log(pageCount);
      
      } );
  },[])

  return (
    <div className="my-9">
      <div>
        <h1 className="text-center mb-5 text-3xl font-bold   text-primary">
          All Products
        </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 pl-9 ">
          {allProducts.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
        <div class="btn-group mx-9 my-9">
          {[...Array(pageCount).keys()].map((number) => (
            <button
            className={page === number? 'selected'  :'btn'}
            onClick={()=>setPage(number)}
             >{number+ 1}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;