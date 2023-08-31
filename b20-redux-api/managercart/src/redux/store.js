import {configureStore } from "@reduxjs/toolkit";
import cartSlide from "../redux/cartSlide.js";

const store = configureStore({
    reducer:{
        cars:cartSlide
    },
});

export default store;