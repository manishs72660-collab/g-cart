import React from "react";

function Rating({Ratingdata}){
    function Ratingcard({ratingdetail}){
        return(
            <>
           <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

  {/* Top Section */}
  <div className="flex items-center justify-between mb-4">
    
    {/* Reviewer Info */}
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-lg shadow-md">
        {ratingdetail?.reviewerName?.charAt(0)}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          {ratingdetail?.reviewerName}
        </h2>
        <p className="text-sm text-gray-400">Verified Buyer</p>
      </div>
    </div>

    {/* Rating Badge */}
    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-semibold text-sm">
      ⭐ {ratingdetail?.rating}
    </div>

  </div>

  {/* Review Comment */}
  <p className="text-gray-600 leading-relaxed">
    {ratingdetail?.comment}
  </p>

</div>
            </>
        )
    }
    console.log(Ratingdata);
    return(
        <>
        {Ratingdata?.map((ratingdetail,index)=><Ratingcard key={index} ratingdetail={ratingdetail}/>)}
        </>
    )
}
export default Rating;