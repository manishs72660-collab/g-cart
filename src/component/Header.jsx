import React from "react";
import image from "../first.png"
import image1 from "../second.png"
import { Link } from "react-router";

export default function Header(){
    return(
    <>
    <header className="bg-green-400">
        <div className="flex justify-between max-w-[90%] container mx-auto  p-4 items-center">
            <div>
            <img src="https://i.pinimg.com/736x/f0/7d/3c/f07d3cd69f0e5b3c55733337f8168833.jpg" alt="" className="h-15 w-20 rounded-2xl" />
            </div>
            <div>
                <input type="text" placeholder="search here..." className="w-[500px] border h-10 p-5 bg-white text-xl font-bold ml-4" />
            </div>
            <div>
                <button className="border-2 p-1 ml-5 w-25 rounded-xl text-2xl bg-white text-black font-bold">Login</button>
                <button className="text-xl font-bold text-black ml-5 p-1">Become a seller</button>
                <button className="text-xl font-bold text-black ml-5 p-1">🛒 Add to Cart(0)</button>
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