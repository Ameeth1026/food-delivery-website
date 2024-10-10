import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Store_Context = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return { ...prev, [itemId]: 1 }; // Add new item
      } else {
        return { ...prev, [itemId]: prev[itemId] + 1 }; // Increment existing item
      }
    });
  };

  const removeFromCart = (itemId) => {
    console.log("Removing item from cart:", itemId); // Log item being removed
    setCartItems((prev) => {
      if (prev[itemId] === 1) {
        const { [itemId]: _, ...rest } = prev; // Exclude the item from the cart
        return rest;
      } else {
        return { ...prev, [itemId]: prev[itemId] - 1 }; // Decrease the quantity
      }
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = food_list.find((product) => product.id === item);
        totalAmount += iteminfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const ContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <Store_Context.Provider value={ContextValue}>
      {props.children}
    </Store_Context.Provider>
  );
};

export default StoreContextProvider;
