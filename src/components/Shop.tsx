import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import ColorItem from "./ColorItem";
import CartQuantity from "./CartQuantity";

import importImages from "../importImages";
const circles = importImages();

export default function Shop() {
  const [cartContent, setCartContent] = useState<{ [colorName: string]: number }>({});
  const [cartVisible, setCartVisible] = useState("hidden");

  function addItem(itemName: string) {
    const currentAmmount = cartContent[itemName];

    const cartContentCopy = structuredClone(cartContent);

    if (currentAmmount > 0) {
      cartContentCopy[itemName] = cartContentCopy[itemName] + 1;
    } else {
      // if there isn't such item yet in cart
      cartContentCopy[itemName] = 1;
    }

    setCartContent(cartContentCopy);
  }

  function decrementItem(itemName: string) {
    const cartContentCopy = structuredClone(cartContent);

    if (cartContentCopy[itemName] === 1) return;

    cartContentCopy[itemName] = cartContentCopy[itemName] - 1;

    setCartContent(cartContentCopy);
  }

  function deleteItem(itemName: string) {
    const cartContentCopy = structuredClone(cartContent);
    delete cartContentCopy[itemName];
    setCartContent(cartContentCopy);
  }

  // for debugging
  useEffect(() => {
    console.log(cartContent);
  });

  // create all color items
  const colorsElements = [] as JSX.Element[];
  for (const colorName in circles) {
    colorsElements.push(
      <ColorItem
        key={colorName}
        colorName={colorName}
        colorPath={circles[colorName]}
        addItemCb={addItem}
      ></ColorItem>
    );
  }

  return (
    <main>
      <Cart
        cartVisible={cartVisible}
        setCartVisible={setCartVisible}
        cartContent={cartContent}
        addItem={addItem}
        decrementItem={decrementItem}
        deleteItem={deleteItem}
        circlesPaths={circles}
      ></Cart>

      <CartQuantity cartContent={cartContent} setCartVisible={setCartVisible}></CartQuantity>

      <ul>{colorsElements}</ul>
    </main>
  );
}
