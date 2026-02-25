import React from "react";
import Header from "./Header";
import Products from "./product";
import Cartpage from "./Cart";
import ProductShimmer from "./ProductShimmer";
function Home(){
    return(
        <>
<Header/>
<Products/>
<Cartpage/>
{/* <ProductShimmer/> */}
        </>
    )
}
export default Home;