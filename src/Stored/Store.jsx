import { configureStore } from "@reduxjs/toolkit";
import Cardreducer from "./Cartsclicer"

export const store = configureStore({
    reducer:{
        cartslice:Cardreducer,
    }
})