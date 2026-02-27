import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "./nav";
import Rating from "./Rating";
import ProductShimmer from "./ProductShimmer";
function Productdetail(){
    let {id} = useParams();
    const[products,setproducts]=useState(null);
    const[isadd,setisadd]=useState(false);
    useEffect(()=>{
        async function  fetchdata() {
            const response=await fetch(`https://dummyjson.com/products/${id}`);
            const data=await response.json();
            setproducts(data)
        }
        fetchdata();
    },[])
    
    function handleclick(){
        if(isadd){
            setisadd(false);
        }else{
            setisadd(true);
        }
    }
  if(products===null){
    return(
      <>
      <ProductShimmer/>
      </>
    )
  }


    return(
        <>
        <Navbar/>
     <div className="max-w-6xl mx-auto mt-5 p-6 bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-10">

  {/* LEFT: Product Image Section */}
  <div className="flex-1 bg-gray-50 p-6 rounded-2xl flex items-center justify-center">
    <img
      src={products?.thumbnail}
      alt={products?.title}
      className="h-[400px] object-contain -mt-100 transition-transform duration-500 hover:scale-110"
    />
  </div>

  {/* RIGHT: Product Details Section */}
  <div className="flex-1 space-y-5">

    {/* Category & Brand */}
    <div>
      <p className="text-sm uppercase tracking-widest text-gray-400">
        {products?.category}
      </p>
      <p className="text-lg font-semibold text-gray-600">
        Brand: {products?.brand}
      </p>
    </div>

    {/* Title */}
    <h1 className="text-3xl font-bold text-gray-900">
      {products?.title}
    </h1>

    {/* Price & Discount */}
    <div className="flex items-center gap-4">
      <span className="text-3xl font-bold text-green-600">
        ₹{(products?.price * 10).toFixed(2)}
      </span>
      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
        {products?.discountPercentage}% OFF
      </span>
    </div>

    {/* Rating */}
    <div className="flex items-center gap-2 text-yellow-500">
      <span className="text-lg font-semibold text-gray-700">
        {products?.rating}
      </span>
      <span>⭐</span>
    </div>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed">
      {products?.description}
    </p>

    {/* Extra Info */}
    <div className="bg-gray-50 p-4 rounded-xl space-y-2 text-gray-600 text-sm">
      <p><strong>Shipping:</strong> {products?.shippingInformation}</p>
      <p><strong>Warranty:</strong> {products?.warrantyInformation}</p>
      <p><strong>Availability:</strong> {products?.availabilityStatus}</p>
      <p><strong>Return Policy:</strong> {products?.returnPolicy}</p>
    </div>

    {/* Buttons */}
    <div className="flex gap-4 pt-4">
      <button className={`px-6 py-3  rounded-xl hover:bg-gray-800 transition-all duration-300 ${isadd?"bg-black text-white font-bold":"bg-black text-white font-bold"}`} onClick={handleclick}>
        {/* Add to Cart */}
        {isadd ? "Go to cart" : "Add to cart"}
      </button>
      <button className="px-6 py-3 border border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300">
        Buy Now
      </button>
    </div>

    {/* Reviews Component */}
    <div className="pt-6 border-t">
      <Rating Ratingdata={products?.reviews}/>
    </div>

  </div>
</div>      
        </>
    )
}
export default Productdetail;