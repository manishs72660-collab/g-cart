import React from "react";

const ProductShimmer = () => {
  return (
    <div className="max-w-6xl mx-auto mt-5 p-6 bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-10 animate-pulse">

      {/* LEFT: Image Shimmer */}
      <div className="flex-1 bg-gray-50 p-6 rounded-2xl flex items-center justify-center">
        <div className="h-[400px] w-full bg-gray-300 rounded-xl"></div>
      </div>

      {/* RIGHT: Details Shimmer */}
      <div className="flex-1 space-y-5">

        {/* Category & Brand */}
        <div className="space-y-2">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-5 w-32 bg-gray-300 rounded"></div>
        </div>

        {/* Title */}
        <div className="h-8 w-3/4 bg-gray-300 rounded"></div>

        {/* Price & Discount */}
        <div className="flex items-center gap-4">
          <div className="h-8 w-28 bg-gray-300 rounded"></div>
          <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="h-5 w-12 bg-gray-300 rounded"></div>
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
        </div>

        {/* Extra Info */}
        <div className="bg-gray-50 p-4 rounded-xl space-y-3">
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <div className="h-12 w-32 bg-gray-300 rounded-xl"></div>
          <div className="h-12 w-32 bg-gray-300 rounded-xl"></div>
        </div>

        {/* Reviews */}
        <div className="pt-6 border-t space-y-2">
          <div className="h-5 w-40 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
        </div>

      </div>
    </div>
  );
};

export default ProductShimmer;