import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
function Shirt(){
    const[shirtdata,setshirtdata]=useState([]);
    useEffect(()=>{
        async function fetchdata() {
            const response=await fetch("https://dummyjson.com/products/category/mens-shirts");
            const data=await response.json();
            setshirtdata(data.products);
        }
        fetchdata();
    },[])


    function Shirtcard({ shirtitem }) {
  return (
     <Link to={`/products/detail/${shirtitem.id}`}>
    <div className="w-64 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">

      {/* Image Section */}
      <div className="relative bg-gray-100 flex items-center justify-center p-4">
        <img
          src={shirtitem?.thumbnail}
          alt={shirtitem?.title}
          className="h-56 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {shirtitem?.discountPercentage && (
          <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
            {shirtitem?.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">

        {/* Brand */}
        <p className="text-xs text-gray-400 uppercase tracking-wide">
          {shirtitem?.brand}
        </p>

        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {shirtitem?.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ {shirtitem?.rating}
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-lg font-bold text-gray-900">
              ₹{(shirtitem?.price * 10).toFixed(2)}
            </p>
          </div>

          <button className="bg-black text-white text-xs px-4 py-1.5 rounded-lg hover:bg-gray-800 transition">
            view
          </button>
        </div>

      </div>
    </div>
    </Link>
  );
}
    if(shirtdata?.length==0){
        return(
            <>
            <Shimmer/>
            </>
        )
       
    }
    return(
        <>
        <div className="flex flex-wrap container max-w-[80%] mx-auto gap-1 mt-5 justify-center">
        {shirtdata.map((shirtitem)=><Shirtcard key={shirtitem.id} shirtitem={shirtitem}></Shirtcard>)}
        </div>
        </>
    )
}
export default Shirt;