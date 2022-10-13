import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  return (
    <main>
      <p>Welcome to the page</p>
      <p>[text here]</p>
      <button
        onClick={() => {
          navigate("/shop");
        }}
      >
        To the shop!
      </button>
    </main>
  );
}
