import React from "react";
import Cart from "./Cart";

const logo = require("../styles/circles/black.jpg");
console.log(logo);

//@ts-ignore
function importAll(r) {
  return r.keys().map(r);
}
//@ts-ignore
const images = importAll(require.context("../styles/circles/", false, /\.(png|jpe?g|svg)$/));
console.log(images);

export default function Shop() {
  return (
    <main>
      <ul></ul>

      <img src={logo}></img>

      <img src={images[1]}></img>

      <Cart></Cart>
    </main>
  );
}
