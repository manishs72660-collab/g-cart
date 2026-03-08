import React from "react";
import { Outlet } from "react-router";
import Navbar from "./nav";
function Secondaryhome(){
    return(
        <>
        <Navbar/>
        <Outlet></Outlet>
        </>
    )
}

export default Secondaryhome;