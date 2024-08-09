import React, { useEffect, useState } from "react";
import "./Popular.css";
import dataProduct from "../Assets/data/data";
import Item from "../Item/Item";
import axios from "axios";

export default function Popular() {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    axios
      .get("popular product API endpoint")
      .then((response) => response.data)
      .then((data) => setPopularProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="popular">
      <h2>Trending Now</h2>
      <hr />
      <div className="popular-item">
        {dataProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}
