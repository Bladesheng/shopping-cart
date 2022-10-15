import React from "react";

type IProps = {
  colorName: string;
  colorPath: string;
  addItemCb: (itemName: string) => void;
};

export default function ColorItem(props: IProps) {
  return (
    <div className="colorItem">
      <img src={props.colorPath} alt="" />
      <p>{props.colorName + " circle"}</p>
      <p>$69.69</p>
      <button
        onClick={() => {
          props.addItemCb(props.colorName);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
