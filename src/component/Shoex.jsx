import React, { useEffect, useState } from "react";
import { Link } from "react-router";
function Shoes(){
    const[shoestdata,setshoesdata]=useState([]);
    useEffect(()=>{
        async function fetchdata() {
            const response=await fetch("https://dummyjson.com/products/category/mens-shoes");
            const data=await response.json();
            setshoesdata(data.products);
        }
        fetchdata();
    },[])

function Shoescard({ shoesitem }) {

  return (
     <Link to={`/products/detail/${shoesitem.id}`}>
    <div className="w-72 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group cursor-pointer">

      {/* Image Section */}
      <div className="relative bg-gray-100 p-6 flex items-center justify-center">
        <img
          src={shoesitem?.thumbnail}
          alt={shoesitem?.title}
          className="h-52 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        {/* Discount Badge */}
        {shoesitem?.discountPercentage && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
            {shoesitem?.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">

        {/* Brand */}
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          {shoesitem?.brand}
        </p>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
          {shoesitem?.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ {shoesitem?.rating}
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-lg font-bold text-gray-900">
            ₹{(shoesitem?.price * 10).toFixed(2)}
          </p>

          <button className="bg-black text-white text-sm px-4 py-2 rounded-xl hover:bg-gray-800 transition">
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
        <div className="flex flex-wrap container max-w-[80%] mx-auto gap-10 mt-5 justify-center">
        {shoestdata.map((shoesitem)=><Shoescard key={shoesitem.id} shoesitem={shoesitem}></Shoescard>)}
        </div>
        </>
    )
}
export default Shoes;