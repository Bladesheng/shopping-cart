import React from "react";

type IProps = {
  colorName: string;
  colorPath: string;
  addItemCb: (itemName: string) => void;
};

export default function ColorItem(props: IProps) {
  return (
    <li className="colorItem">
      <img src={props.colorPath} alt={props.colorName + " circle"} />
      <p className="productName">{props.colorName + " circle"}</p>
      <p className="productPrice">$69.69</p>
      <button
        onClick={() => {
          props.addItemCb(props.colorName);
        }}
      >
        Add to cart
      </button>
    </li>
  );
}
