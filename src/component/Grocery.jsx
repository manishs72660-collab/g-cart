import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Navbar from "./nav";
function Grocery(){
    const[grocerydata,setgrocerydata]=useState([]);
    useEffect(()=>{
        async function fetchdata() {
            const response=await fetch("https://dummyjson.com/products/category/groceries");
            const data=await response.json();
            setgrocerydata(data.products);
        }
        fetchdata();
    },[])

function Grocerycard({ groceryitem }) {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">

      {/* Image Section */}
      <div className="relative bg-gray-50 p-4 flex items-center justify-center">
        <img
          src={groceryitem?.thumbnail}
          alt={groceryitem?.title}
          className="h-40 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        {/* Discount Badge */}
        {groceryitem?.discountPercentage && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
            {groceryitem?.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">

        {/* Category */}
        <p className="text-xs text-gray-400 uppercase tracking-wide">
          {groceryitem?.category}
        </p>

        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {groceryitem?.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ {groceryitem?.rating}
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-lg font-bold text-green-600">
              ₹{(groceryitem?.price * 10).toFixed(2)}
            </p>
          </div>

          <button className="bg-green-500 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-green-600 transition">
            Add
          </button>
        </div>

      </div>
    </div>
  );
}

   if(grocerydata.length==0){
        return(
            <>
            <Shimmer/>
            </>
        )
    }
    return(
        <>
        <Navbar/>
        <div className="flex flex-wrap container max-w-[80%] mx-auto gap-3 mt-5 justify-center">
       {grocerydata.map((groceryitem)=><Grocerycard key={groceryitem.id} groceryitem={groceryitem}/>)}
       </div>
        </>
    )
}

export default Grocery;