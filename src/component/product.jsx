import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
export default function Products(){
   const[products,setproducts]=useState([]);
   useEffect(()=>{
    
        async function fetchData() {
          const response=await fetch("https://dummyjson.com/products");
          const data=await response.json(); 
          setproducts(data.products);
        }
   
        fetchData();
  },[])

function Productcard({ menuItems }) {
  return (
    <Link to={`/products/detail/${menuItems.id}`}>
      <div className="w-72 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden group cursor-pointer">

        {/* Image Section */}
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 p-6 flex items-center justify-center">
          <img
            src={menuItems?.thumbnail}
            alt={menuItems?.title}
            className="h-56 object-contain transition-transform duration-500 group-hover:scale-110"
          />

          {/* Optional Discount Badge */}
          {menuItems?.discountPercentage && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {menuItems?.discountPercentage}% OFF
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-3">

          {/* Title */}
          <h1 className="text-lg font-bold text-gray-800 line-clamp-2">
            {menuItems?.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            ⭐ <span className="text-gray-700 font-medium">{menuItems?.rating}</span>
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-2xl font-bold text-green-600">
              ₹{(menuItems?.price * 10).toFixed(2)}
            </p>

            <button
              onClick={(e) => e.preventDefault()}
              className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
            >
              View
            </button>
          </div>

        </div>

      </div>
    </Link>
  );
}
  if(products.length==0){
    return(
    <Shimmer/>
    )
  }
  
  return(
    <>
    <h1 className="text-2xl font-bold ml-40 mt-10">Discove Best Product </h1>
     <div className="w-[80%] mx-auto mt-20 flex flex-wrap gap-10 justify-center">
          {
            products.map((menuItems)=><Productcard key={menuItems.id} menuItems={menuItems}></Productcard>)
          }
    </div>
    </>
    )
}