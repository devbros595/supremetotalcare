import React, { createContext, useEffect, useState } from "react";
import allProduct from "../Components/Assets/data/all_product";
import axios from "axios";

// const BASE_API_URL= 'https://f355-102-89-46-138.ngrok-free.app'

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //API call to display all products

  // const [allProduct, setAllProduct] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_API_URL}/api/products/`)
  //     .then((response) => response.data)
  //     .then((data) => setAllProduct(data));

  //     if (localStorage.getItem("auth-token")) {
  //       fetch("getCartData API endpoint", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/form-data",
  //           "auth-token": `${localStorage.getItem("auth-token")}`,
  //           "Content-Type": "application/json",
  //         },
  //         body: "",
  //       })
  //       .then((response) => response.json())
  //       .then((data) => setCartItems(data));
  //     }
  // }, []);

  const addToCart = (itemId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: prevCartItems[itemId] + 1,
    }));

    // if (localStorage.getItem("auth-token")) {
    //   fetch("addToCart API endpoint", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/form-data",
    //       "auth-token": `${localStorage.getItem("auth-token")}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ itemId: itemId }),
    //   })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: prevCartItems[itemId] - 1,
    }));
    // if (localStorage.getItem("auth-token")) {
    //   fetch("removeFromCart API endpoint", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/form-data",
    //       "auth-token": `${localStorage.getItem("auth-token")}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ itemId: itemId }),
    //   })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProduct.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    allProduct,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
