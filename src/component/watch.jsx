import React, { useEffect, useState } from "react";
import { Link } from "react-router";
function Watch(){
    const[watchdata,setwatchdata]=useState([]);
    useEffect(()=>{
        async function fetchdata() {
            const response=await fetch("https://dummyjson.com/products/category/mens-watches");
            const data=await response.json();
            setwatchdata(data.products);
        }
        fetchdata();
    },[])


   function Watchcard({ watchitem }) {
  return (
     <Link to={`/products/detail/${watchitem.id}`}>
    <div className="w-72 bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">

      {/* Image Section */}
      <div className="relative bg-gradient-to-b from-gray-100 to-gray-50 p-8 flex items-center justify-center">
        <img
          src={watchitem?.thumbnail}
          alt={watchitem?.title}
          className="h-48 object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {watchitem?.discountPercentage && (
          <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {watchitem?.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">

        {/* Brand */}
        <p className="text-xs uppercase tracking-[3px] text-gray-400">
          {watchitem?.brand}
        </p>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
          {watchitem?.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ {watchitem?.rating}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xl font-bold text-gray-900">
            ₹{(watchitem?.price * 10).toFixed(2)}
          </p>

          <button className="px-4 py-2 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition">
            view
          </button>
        </div>

      </div>
    </div>
    </Link>
  );
}
    return(
        <>
        <div className="flex flex-wrap container max-w-[80%] mx-auto gap-10 mt-5">
        {watchdata?.map((watchitem)=><Watchcard key={watchitem.id} watchitem={watchitem}></Watchcard>)}
        </div>
        </>
    )
}
export default Watch;