import React from "react";
import { Link } from "react-router";

export default function ProductCard({ everyCard }) {
  return (
    <>
      <div className="product-card">
        <h2>{everyCard.title}</h2>
        <Link to={`productinfo/${everyCard.id}`}>
          <img src={everyCard.images[0]}></img>
        </Link>
        <span>{everyCard.description}</span>
        <h2>{everyCard.price}</h2>

        <button>
          Add to Cart <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </>
  );
}
