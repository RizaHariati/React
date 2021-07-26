import React, { useReducer, useContext, useEffect } from "react";
import cartItem from "./data";
import { reducer } from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const CartContext = React.createContext();

const initialState = {
  cart: cartItem,
  loading: false,
  totalPrice: 0,
  totalAmount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "FETCH_DATA" });
    const resp = await fetch(url);
    const data = await resp.json();
    dispatch({ type: "DISPLAY_DATA", payload: data });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const clearList = () => {
    return dispatch({ type: "CLEAR_LIST" });
  };

  const removeItem = (id) => {
    return dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const changeAmount = (change, id) => {
    return dispatch({ type: "CHANGE_AMOUNT", payload: { change, id } });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearList,
        removeItem,
        changeAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(CartContext);
};
export { CartProvider, CartContext };
