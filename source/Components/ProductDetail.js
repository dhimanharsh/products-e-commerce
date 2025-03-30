import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function ProductDetail() {
  const [data, setData] = useState([]);
  const { proid } = useParams();
  console.log(proid);
  useEffect(() => {
    async function data() {
      let apiData = await fetch(`https://dummyjson.com/products/${proid}`);
      let inreadable = await apiData.json();
      setData(inreadable);
    }
    data();
  });
  return (
    <>
      {" "}
      <Link to={'/'}><p className="go-back">Go Back</p></Link>
      <div className="design-single-pro">
        <h1>{data.title}</h1>
        <img src={data.images}></img>
        <p>{data.description}</p>
        <h3>For Just {data.price}/-</h3>
        <div>
          <button>Add to cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
}
