import React, { useEffect, useState } from "react";
import {Link} from "react-router"
import Shimmer from "./Shimmer";
import Navbar from "./nav";
function Grocery(){
    const[grocerydata,setgrocerydata]=useState([]);
    const[sortbutton,setsortbutton]=useState(null);
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
<Link to={`/products/detail/${groceryitem.id}`}>
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
    </Link>
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
        <div className="container max-w-[60%] mx-auto  gap-3 mt-10 mb-4 justify-center gap-2">
           <button className="bg-gray-300 text-2xl font-bold text-black border-2 border-white p-2 px-8 rounded-2xl hover:cursor-pointer hover:bg-gray-600">Sort By Price</button>
           <button className=" bg-gray-300 text-2xl font-bold text-black border-2 border-white p-2 rounded-2xl hover:cursor-pointer hover:bg-gray-600">Sort By Popularity</button>
        </div>
        <div className="flex flex-wrap container max-w-[80%] mx-auto gap-3 mt-5 justify-center">
       {grocerydata.map((groceryitem)=><Grocerycard key={groceryitem.id} groceryitem={groceryitem}/>)}
       </div>
        </>
    )
}

export default Grocery;