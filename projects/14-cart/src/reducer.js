const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return {
      ...state,
      cart: tempCart,
    };
  }

  if ((action.type = "GET_TOTAL")) {
    // const newAmount = action.payload.reduce((total, item) => {
    //   return total + item.amount;
    // }, 0);
    // const newPrice = action.payload.reduce((total, item) => {
    //   return total + item.amount * item.price;
    // }, 0);

    const { newTotal, newAmount } = state.cart.reduce(
      (total, item) => {
        const { price, amount } = item;
        total.newTotal += price * amount;
        total.newAmount += amount;
        return total;
      },
      {
        newTotal: 0,
        newAmount: 0,
      }
    );

    return {
      ...state,
      total: newTotal.toFixed(2),
      amount: newAmount,
    };
  }
  return state;
};
export default reducer;
