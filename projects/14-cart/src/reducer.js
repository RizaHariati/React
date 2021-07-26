export const reducer = (state, action) => {
  if (action.type === "CLEAR_LIST") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === "CHANGE_AMOUNT") {
    const { change, id } = action.payload;
    const newCart = state.cart
      .map((item) => {
        if (item.id === id) {
          if (change === "increase") {
            return { ...item, amount: item.amount + 1 };
          } else if (change === "decrease") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount > 0);
    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === "TOTAL") {
    const { totalAmount, totalPrice } = state.cart.reduce(
      (total, index) => {
        const { amount, price } = index;
        total.totalAmount += amount;
        total.totalPrice += price * amount;
        return total;
      },
      { totalAmount: 0, totalPrice: 0 }
    );
    return {
      ...state,
      totalPrice: totalPrice.toFixed(2),
      totalAmount: totalAmount,
    };
  }

  if (action.type === "FETCH_DATA") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "DISPLAY_DATA") {
    return {
      ...state,
      cart: action.payload,
      loading: false,
    };
  }
  throw new Error("no matching action type");
};
