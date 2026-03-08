import React from "react";
import Header from "./Header";
import Products from "./product";
import Cartpage from "./Cart";
import Footer from "./Footer";
function Home(){
    return(
        <>
<Header/>
<Products/>
<Cartpage/>
        </>
    )
}
export default Home;