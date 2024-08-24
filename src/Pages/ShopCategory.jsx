import React, { useContext, useState, useEffect } from "react";
import "./CSS/Shopcategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import Hero from "../Components/Hero/Hero";

export default function ShopCategory(props) {
  const { allProduct } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [limit, setLimit] = useState(10); // initial limit
  const [sortBy, setSortBy] = useState(""); // initial sort by value
  const [sortDirection, setSortDirection] = useState("asc"); // initial sort direction

  useEffect(() => {
    const filteredProducts = allProduct.filter(
      (item) => item.category === props.category
    );
    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sortBy === "price") {
        return sortDirection === "asc"
          ? a.new_price - b.new_price
          : b.new_price - a.new_price;
      } else if (sortBy === "name") {
        return sortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return filteredProducts;
      }
    });
    setProducts(sortedProducts.slice(0, limit));
  }, [allProduct, props.category, limit, sortBy, sortDirection]);

  const handleLoadMore = () => {
    setLoadMore(true);
    setLimit((prevLimit) => {
      const newLimit = prevLimit + 12;
      return newLimit > allProduct.length ? allProduct.length : newLimit;
    });
  };

  const handleSortBy = (event) => {
    const sortByValue = event.target.value;
    setSortBy(sortByValue);
    if (sortByValue === "price" || sortByValue === "name") {
      setSortDirection("asc");
    }
  };

  const handleSortDirection = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
  };

  return (
    <div className="shop-category">
      <Hero categoryName={props.category} />
      <div className="shopcategory-indexsort">
        <div className="shopcategory-sort">
          Sort by
          <select value={sortBy} onChange={handleSortBy}>
            <option value="">Select</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
          <button onClick={handleSortDirection}>
            {sortDirection === "asc" ? "ASC" : "DESC"}
          </button>
        </div>
      </div>
      <div className="shopcategory-products">
        {products.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      {loadMore && (
        <div className="shopcategory-loadmore" onClick={handleLoadMore}>
          Explore More
        </div>
      )}
    </div>
  );
}
