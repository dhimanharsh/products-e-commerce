import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
export default function Main() {
  const [car, setcar] = useState([]);
  const [search, setSearch] = useState([]);
  const [inputData, setInputData] = useState("");
  useEffect(() => {
    async function data() {
      let data = await fetch("https://dummyjson.com/products");
      let read = await data.json();
      setcar(read.products);
      setSearch(read.products);
    }
    data();
  }, []);

  return (
    <>
      <div className="main">
        <div className="input-btn">
          {/* search filter*/}
          <input
            type="text"
            placeholder="search product"
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(inputData);
              let info = search.filter((e) => {
                return e.title.toLowerCase().includes(inputData.toLowerCase());
              });
              setcar(info);
            }}
          >
            search
          </button>
        </div>
        {/* btn fikters */}
        <div className="search-btns">
          <button
            onClick={() => {
              alert("Filtered to Beauty Products");
              let beauty = search.filter((e) => {
                return e.category == "beauty";
              });
              setcar(beauty);
            }}
          >
            Beauty
          </button>
          <button
            onClick={() => {
              alert("Filtered to fragrances Products");

              let frag = search.filter((e) => {
                return e.category == "fragrances";
              });
              setcar(frag);
            }}
          >
            fragrances
          </button>
          <button
            onClick={() => {
              alert("Filtered to furniture Products");

              let furniture = search.filter((e) => {
                return e.category == "furniture";
              });
              setcar(furniture);
            }}
          >
            Furniture
          </button>
          <button
            onClick={() => {
              alert("Filtered to groceries Products");

              let groce = search.filter((e) => {
                return e.category == "groceries";
              });
              setcar(groce);
            }}
          >
            groceries
          </button>
        </div>
      </div>
      {/* render card component */}
      <div className="style-the-card">
        {car.map((e, index) => {
          return (
         
              <ProductCard key={index} everyCard={e}></ProductCard>
          
          );
        })}
      </div>
    </>
  );
}



