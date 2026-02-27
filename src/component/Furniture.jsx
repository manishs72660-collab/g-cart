import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import Navbar from "./nav";
import {Link} from "react-router"
function Furniture(){
    const[furnituredata,setfurnituredata]=useState([]);
    useEffect(()=>{
        async function fetchdata() {
            const response=await fetch("https://dummyjson.com/products/category/furniture");
            const data=await response.json();
            setfurnituredata(data.products);
        }
        fetchdata();
    },[])
    function Furniturecard({ furnitureitem }) {
  return (
    <Link to={`/products/detail/${furnitureitem.id}`}>
    <div className="w-80 bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">

      {/* Image Section */}
      <div className="relative bg-amber-50 p-8 flex items-center justify-center">
        <img
          src={furnitureitem?.thumbnail}
          alt={furnitureitem?.title}
          className="h-52 object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {furnitureitem?.discountPercentage && (
          <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {furnitureitem?.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-3">

        {/* Category */}
        <p className="text-xs uppercase tracking-widest text-gray-400">
          {furnitureitem?.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {furnitureitem?.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ {furnitureitem?.rating}
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between pt-3">
          <p className="text-xl font-bold text-gray-900">
            ₹{(furnitureitem?.price * 10).toFixed(2)}
          </p>

          <button className="px-4 py-2 text-sm bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition">
            View
          </button>
        </div>

      </div>
    </div>
    </Link>
  );
}

    if(furnituredata.length==0){
        return(
            <> 
            <Shimmer/>
            </>
        )
    }
    return(
        <>
        <Navbar/>
        <div className="flex flex-wrap container max-w-[80%] mx-auto gap-10 mt-5 justify-center">
        {furnituredata.map((furnitureitem)=><Furniturecard key={furnitureitem.id} furnitureitem={furnitureitem}></Furniturecard>)}
        </div>
        </>
    )
}
export default Furniture;