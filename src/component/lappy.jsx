import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
function Laptop(){
    const[phonedata,setphonedata]=useState([]);

    useEffect(()=>{
        async function fetchdata() {
            const response=await fetch("https://dummyjson.com/products/category/laptops");
            const data=await response.json()
            setphonedata(data.products);
        }
        fetchdata();
    },[])
   function Phonecard({ phonedata }) {
  return (
    <Link to={`/products/detail/${phonedata.id}`}>
      <div className="w-72 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group cursor-pointer">

        {/* Image Section */}
        <div className="relative bg-gray-50 p-6 flex items-center justify-center">
          <img
            src={phonedata?.thumbnail}
            alt={phonedata?.title}
            className="h-48 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          {/* Discount Badge */}
          {phonedata?.discountPercentage && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
              {phonedata.discountPercentage}% OFF
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-2">

          {/* Brand */}
          <p className="text-xs text-gray-400 uppercase tracking-wide">
            {phonedata?.brand}
          </p>

          {/* Title */}
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
            {phonedata?.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            ⭐ {phonedata?.rating}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-bold text-green-600">
              ₹{(phonedata?.price * 10).toFixed(2)}
            </p>

            <button
              onClick={(e) => e.preventDefault()}
              className="bg-black text-white text-xs px-3 py-1.5 rounded-lg hover:bg-gray-800 transition"
            >
              View
            </button>
          </div>

        </div>
      </div>
    </Link>
  );
}
    if(phonedata.length==0){
        return(
            <>
            <Shimmer/>
            </>
        )
    }
    return(
        <>
         <div className="flex flex-wrap container max-w-[80%] mx-auto gap-10 mt-5 justify-center">
            {phonedata.map((phonedata)=><Phonecard key={phonedata.id} phonedata={phonedata}></Phonecard>)}
         </div>
        </>
    )
}

export default Laptop;