import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
function Footerpage(){
    return(
        <>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}
export default Footerpage;