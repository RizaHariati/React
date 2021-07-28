export const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === "FETCH_DATA") {
    const { drinks } = action.payload;
    let newData = [];
    if (drinks) {
      newData = drinks;
    }

    return {
      ...state,
      cocktails: newData,
      loading: false,
    };
  }

  if (action.type === "SET_KEYWORD") {
    return {
      ...state,
      keyword: action.payload,
    };
  }
  return state;
};
