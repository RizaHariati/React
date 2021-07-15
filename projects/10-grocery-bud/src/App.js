import React, { useState, useReducer, useRef, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { reducer } from "./reducer";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
const TextContext = React.createContext();
const initialState = {
  groceryList: getLocalStorage(),
  showModal: false,
  modalText: "This is test",
  modalColor: "error",
};
const App = () => {
  const refInput = useRef(null);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refInput.current.value;
    if (name && !edit) {
      const id = new Date().getTime().toString();
      const newItem = { id, name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
    } else if (name && edit) {
      const edited = { id: editId, name };
      dispatch({ type: "EDIT_ITEM", payload: edited });
      setEdit(false);
      setEditId("");
    } else if (!name || name === "") {
      dispatch({ type: "EMPTY_VALUE" });
    }
    refInput.current.value = "";
    refInput.current.focus();
  };
  const editItem = (id) => {
    const editedItem = state.groceryList.find((item) => item.id === id);
    refInput.current.value = editedItem.name;
    setEdit(true);
    setEditId(id);
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(state.groceryList));
  }, [state.groceryList]);
  return (
    <TextContext.Provider
      value={{
        groceryList: state.groceryList,
        showModal: state.showModal,
        modalText: state.modalText,
        modalColor: state.modalColor,
        removeItem,
        closeModal,
        editItem,
      }}
    >
      <div className="container">
        <div className="grocery-list">
          {state.showModal && <Alert />}
          <h3 className="title">Grocery Bud</h3>
          <form onSubmit={(e) => handleSubmit(e)} className="input-form">
            <input
              type="text"
              name="get-item"
              id="get-item"
              placeholder="e.g.salad"
              className="get-item"
              ref={refInput}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
          <List />
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>
      </div>
    </TextContext.Provider>
  );
};
export { TextContext };
export default App;
