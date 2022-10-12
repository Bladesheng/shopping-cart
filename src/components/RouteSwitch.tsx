import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";

import Header from "./Header";
import Footer from "./Footer";

export default function RouteSwitch() {
  return (
    <HashRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="shop" element={<Shop></Shop>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
      </Routes>

      <Footer></Footer>
    </HashRouter>
  );
}
