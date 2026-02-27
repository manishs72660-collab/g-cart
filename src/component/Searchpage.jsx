import React, { useEffect, useState } from "react";
import Navbar from "./nav";
import { Link } from "react-router";
function Searchpage(){
   const[name,setname]=useState("");
   const [searchdata,setsearchdata]=useState(null);
   const[selected,setselected]=useState(null);
   useEffect(()=>{
     async function fetchdata() {
        const response=await fetch(`https://dummyjson.com/products/search?q=${name}`);
        const data=await response.json();
        setsearchdata(data.products);
     } 
     if(name.length>2){
       fetchdata();
     }
   },[name,selected])
   console.log(searchdata);
   console.log(name);

function Searchcard({ searchitem }) {
  return (
<Link to={`/products/detail/${searchitem.id}`}>
    <div className="w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">

      {/* Image Section */}
      <div className="relative bg-gray-50 p-4 flex items-center justify-center">
        <img
          src={searchitem?.thumbnail}
          alt={searchitem?.title}
          className="h-40 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        {/* Discount Badge */}
        {searchitem?.discountPercentage && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
            {searchitem?.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">

        {/* Category */}
        <p className="text-xs text-gray-400 uppercase tracking-wide">
          {searchitem?.category}
        </p>

        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {searchitem?.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ {searchitem?.rating}
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-lg font-bold text-green-600">
              ₹{(searchitem?.price * 10).toFixed(2)}
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
if(selected==="price"){
  return(
    <>
     <Navbar/>
    <div className="max-w-[80%] container mx-auto ">
    <input className="w-full h-7 border bg-gray-200 text-xl font-bold text-black p-7 rounded-3xl mt-5" type="text" placeholder="Search here..." 
    value={name}
    onChange={(e)=>setname(e.target.value)}
    />
    </div>
    {searchdata && searchdata.length > 0 && (
  <div className="container max-w-[60%] mx-auto flex justify-center gap-4 mt-10 mb-4">
    
    <button
      className={`px-8 py-3 text-lg font-semibold border-2 rounded-full transition-all duration-300 hover:cursor-pointer
      ${selected === "price"
        ? "bg-gray-800 text-white border-gray-800"
        : "bg-white text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white"}`}
      onClick={() => setselected(selected === "price" ? null : "price")}
    >
      Sort By Price
    </button>

    <button
      className={`px-8 py-3 text-lg font-semibold border-2 rounded-full transition-all duration-300 hover:cursor-pointer
      ${selected === "popularity"
        ? "bg-gray-800 text-white border-gray-800"
        : "bg-white text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white"}`}
      onClick={() =>
        setselected(selected === "popularity" ? null : "popularity")
      }
    >
      Sort By Popularity
    </button>

  </div>
)}
<div className="flex flex-wrap container max-w-[80%] mx-auto gap-3 mt-5 justify-center">
       {searchdata?.sort((a,b)=>a.price-b.price).map((searchitem)=><Searchcard key={searchitem.id} searchitem={searchitem}/>)}
    </div>
    </>
  )
}

if(selected==="popularity"){
  return(
    <>
    <Navbar/>
    <div className="max-w-[80%] container mx-auto ">
    <input className="w-full h-7 border bg-gray-200 text-xl font-bold text-black p-7 rounded-3xl mt-5" type="text" placeholder="Search here..." 
    value={name}
    onChange={(e)=>setname(e.target.value)}
    />
    </div>
    {searchdata && searchdata.length > 0 && (
  <div className="container max-w-[60%] mx-auto flex justify-center gap-4 mt-10 mb-4">
    
    <button
      className={`px-8 py-3 text-lg font-semibold border-2 rounded-full transition-all duration-300 hover:cursor-pointer
      ${selected === "price"
        ? "bg-gray-800 text-white border-gray-800"
        : "bg-white text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white"}`}
      onClick={() => setselected(selected === "price" ? null : "price")}
    >
      Sort By Price
    </button>

    <button
      className={`px-8 py-3 text-lg font-semibold border-2 rounded-full transition-all duration-300 hover:cursor-pointer
      ${selected === "popularity"
        ? "bg-gray-800 text-white border-gray-800"
        : "bg-white text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white"}`}
      onClick={() =>
        setselected(selected === "popularity" ? null : "popularity")
      }
    >
      Sort By Popularity
    </button>

  </div>
)}
<div className="flex flex-wrap container max-w-[80%] mx-auto gap-3 mt-5 justify-center">
       {searchdata?.sort((a,b)=>b.rating-a.rating).map((searchitem)=><Searchcard key={searchitem.id} searchitem={searchitem}/>)}
    </div>
    </>
  )
}
return(
    <>
    <Navbar/>
    <div className="max-w-[80%] container mx-auto ">
    <input className="w-full h-7 border bg-gray-200 text-xl font-bold text-black p-7 rounded-3xl mt-5" type="text" placeholder="Search here..." 
    value={name}
    onChange={(e)=>setname(e.target.value)}
    />
    </div>
    {searchdata && searchdata.length > 0 && (
  <div className="container max-w-[60%] mx-auto flex justify-center gap-4 mt-10 mb-4">
    
    <button
      className={`px-8 py-3 text-lg font-semibold border-2 rounded-full transition-all duration-300 hover:cursor-pointer
      ${selected === "price"
        ? "bg-gray-800 text-white border-gray-800"
        : "bg-white text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white"}`}
      onClick={() => setselected(selected === "price" ? null : "price")}
    >
      Sort By Price
    </button>

    <button
      className={`px-8 py-3 text-lg font-semibold border-2 rounded-full transition-all duration-300 hover:cursor-pointer
      ${selected === "popularity"
        ? "bg-gray-800 text-white border-gray-800"
        : "bg-white text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white"}`}
      onClick={() =>
        setselected(selected === "popularity" ? null : "popularity")
      }
    >
      Sort By Popularity
    </button>

  </div>
)}
      <div className="flex flex-wrap container max-w-[80%] mx-auto gap-3 mt-5 justify-center">
       {searchdata?.map((searchitem)=><Searchcard key={searchitem.id} searchitem={searchitem}/>)}
    </div>
    </>
   )
}
export default Searchpage;