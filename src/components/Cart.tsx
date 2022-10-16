import React from "react";

type IProps = {
  cartVisible: string;
  setCartVisible: React.Dispatch<React.SetStateAction<string>>;
  cartContent: { [colorName: string]: number };
  addItem: (itemName: string) => void;
  decrementItem: (itemName: string) => void;
  deleteItem: (itemName: string) => void;
  circlesPaths: { [colorName: string]: string };
};

export default function Cart(props: IProps) {
  const itemsElements = [] as JSX.Element[];
  for (const colorName in props.cartContent) {
    itemsElements.push(
      <li key={colorName}>
        <img src={props.circlesPaths[colorName]}></img>
        <p>{colorName}</p>
        <button
          className="decrement"
          onClick={() => {
            props.decrementItem(colorName);
          }}
        >
          ⠀-⠀
        </button>
        <p className="ammount">{props.cartContent[colorName]}</p>
        <button
          className="increment"
          onClick={() => {
            props.addItem(colorName);
          }}
        >
          ⠀+⠀
        </button>
        <button
          className="delete"
          onClick={() => {
            props.deleteItem(colorName);
          }}
        >
          Remove item
        </button>
      </li>
    );
  }

  return (
    <aside className={"cart " + props.cartVisible}>
      <button
        className="close"
        onClick={() => {
          props.setCartVisible("hidden");
        }}
      >
        ⠀⠀X⠀⠀
      </button>

      <ul>{itemsElements}</ul>

      <button>Checkout</button>
    </aside>
  );
}
