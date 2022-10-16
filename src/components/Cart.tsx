import React from "react";

type IProps = {
  cartVisible: string;
  setCartVisible: React.Dispatch<React.SetStateAction<string>>;
};

export default function Cart(props: IProps) {
  return (
    <aside className={"cart " + props.cartVisible}>
      Cart here
      <button
        className="close"
        onClick={() => {
          props.setCartVisible("hidden");
        }}
      >
        ⠀⠀X⠀⠀
      </button>
    </aside>
  );
}
