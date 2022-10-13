import React from "react";
import Cart from "./Cart";

import importImages from "../importImages";
const circles = importImages();

for (const color in circles) {
  console.log(color);
}

export default function Shop() {
  return (
    <main>
      <ul></ul>

      <img src={circles.black}></img>

      <Cart></Cart>
    </main>
  );
}
