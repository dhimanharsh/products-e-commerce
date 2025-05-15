import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
export default function Main() {
  const [cardData, setcardData] = useState([]);
  const [search, setSearch] = useState([]);
  const [inputData, setInputData] = useState("");
  // data fetching;
  useEffect(() => {
    async function data() {
      let data = await fetch("https://dummyjson.com/products");
      let read = await data.json();
      setcardData(read.products);
      setSearch(read.products);
    }
    data();
  }, []);

  return (


    <>

<div className='hero-img'>
<section>
    <h1>Discover Unmatched Quality and Style</h1>
    <p>Where every click opens the door to a world of exceptional products designed just for you.At the heart of every exceptional product lies an unwavering commitment to quality. When you choose to discover unmatched quality, you are not just making a purchase; you are investing in craftsmanship that stands the test of time. Our products are meticulously crafted using the finest materials, ensuring durability and elegance in every detail. Experience the satisfaction of owning items that not only look stunning but also perform flawlessly, enhancing your lifestyle in ways you never imagined</p>
    <button>Shop Now</button>
</section>


</div>
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
              setcardData(info);
            }}
          >
            search
          </button>
        </div>
        {/* filter buttons */}
        <div className="search-btns">
          <button
            onClick={() => {
              alert("Filtered to Beauty Products");
              let beauty = search.filter((e) => {
                return e.category == "beauty";
              });
              setcardData(beauty);
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
              setcardData(frag);
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
              setcardData(furniture);
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
              setcardData(groce);
            }}
          >
            groceries
          </button>
        </div>
      </div>
      {/* render card component */}
      <div className="style-the-card">
        {cardData.map((e, index) => {
          return (
         
              <ProductCard key={index} everyCard={e}></ProductCard>
          
          );
        })}
      </div>
    </>
  );
}



