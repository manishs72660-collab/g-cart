import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import image from "../first.png"
import image1 from "../second.png"
import { Link } from "react-router";

export default function Header(){
    return(
    <>
    <header className="bg-green-400">
<div className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-lg">
  <div className="max-w-[1300px] mx-auto flex justify-between items-center px-8 py-4">
    
    {/* Logo Section */}
    <div className="flex items-center space-x-3">
      <img
        src="https://i.pinimg.com/736x/f0/7d/3c/f07d3cd69f0e5b3c55733337f8168833.jpg"
        alt="Logo"
        className="h-12 w-16 rounded-2xl object-cover shadow-md"
      />
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-green-600 to-purple-500 bg-clip-text text-transparent tracking-wide">
        LuxeCart
      </h1>
    </div>

    {/* Right Section */}
    <div className="flex items-center space-x-6">
      
      {/* Search Button */}
      <button className="p-3 rounded-full bg-white/40 backdrop-blur-md border border-white/30 hover:scale-105 transition duration-300 shadow-md">
        <Search size={20} className="text-gray-800" />
      </button>

      {/* Become Seller */}
      <button className="text-gray-800 font-semibold hover:text-green-800 transition duration-300 text-xl font-bold">
        Become a Seller
      </button>

      {/* Login Button */}
      <button className="flex items-center space-x-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
        <User size={18} />
        <span>Login</span>
      </button>

      {/* Cart */}
      <button className="relative flex items-center space-x-2 p-2 rounded-full bg-white/40 backdrop-blur-md border border-white/30 hover:scale-105 transition duration-300 shadow-md">
        <ShoppingCart size={20} className="text-gray-800" />
        <span className="font-semibold text-gray-800">Cart</span>

        {/* Cart Badge */}
        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse">
          0
        </span>
      </button>

    </div>
  </div>
</div>

       <div className="relative min-h-screen flex items-center justify-center">

  {/* Left Image */}
  <img
    src={image}
    alt=""
    className="absolute left-0 top-1/2 -translate-y-1/2 w-78 opacity-80 h-100"
  />
  {/* Right Image */}
  <img
    src={image1}
    alt=""
    className="absolute right-0 top-1/2 -translate-y-1/2 w-78 opacity-80 h-100"
  />

  {/* Center Content */}
  <div className="max-w-2xl text-center z-10">
    <h1 className="text-5xl font-bold leading-tight">
      Big Deals. Bold Style. <br />
      Smarter Shopping Starts Here. <br />
      This is TechKart.
    </h1>

    <p className="mt-6 text-lg text-gray-600">
      Discover handpicked products designed to elevate your world.
      Shop smarter, live better, and stay ahead with TechKart.
    </p>
  </div>
</div>

<div className="flex max-w-[80%] container mx-auto gap-10 mt-20 mb-6">
  <Link to="/phonepage">
    <img src="https://i.pinimg.com/736x/cc/ad/dc/ccaddc15d53be515ff446b25aca21650.jpg" alt=""  className="h-80 w-60 rounded-2xl" />
  </Link>
  <Link to="/grocery">
    <img src="https://i.pinimg.com/736x/7a/7d/7e/7a7d7e172b00c80673cf360ede9ecd4f.jpg" alt="" className="h-80 w-60 rounded-2xl" />
  </Link>
  <Link to="/fashion">
    <img src="https://i.pinimg.com/736x/5a/37/8a/5a378a45f9aed3a7bf804d8e850000b4.jpg" alt="" className="h-80 w-60 rounded-2xl" />
  </Link>
   <Link to="/furniture">
    <img src="https://i.pinimg.com/736x/af/e5/89/afe58937a18df96f1c59c3692a007478.jpg" alt="" className="h-80 w-60 rounded-2xl" />
  </Link>
</div>
</header>
    </>
    )
}