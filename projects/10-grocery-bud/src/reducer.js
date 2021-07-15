export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newList = [...state.groceryList, action.payload];
    return {
      ...state,
      groceryList: newList,
      showModal: true,
      modalText: "Item's Added",
      modalColor: "success",
    };
  }
  if (action.type === "CLEAR_LIST") {
    return {
      ...state,
      groceryList: [],
      showModal: true,
      modalText: "List cleared",
      modalColor: "failed",
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newList = state.groceryList.filter(
      (item) => item.id !== action.payload
    );
    return {
      ...state,
      groceryList: newList,
      showModal: true,
      modalText: "Item's removed",
      modalColor: "failed",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  }
  if (action.type === "EMPTY_VALUE") {
    return {
      ...state,
      showModal: true,
      modalText: "Empty Value",
      modalColor: "failed",
    };
  }
  if (action.type === "EDIT_ITEM") {
    const newItem = action.payload;
    const newList = state.groceryList.map((item) => {
      if (item.id === newItem.id) {
        item.name = newItem.name;
      }
      return item;
    });
    return {
      ...state,
      groceryList: newList,
      showModal: true,
      modalText: "Item changed",
      modalColor: "success",
    };
  }
  return state;
};
