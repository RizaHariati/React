import React, { useState, useRef, useReducer } from "react";
import { data } from "../../data";
import Modal from "./Modal";
import { reducer } from "./reducer";

const initialState = {
  people: data,
  showModal: false,
  ModalContent: "This is Modal",
};

function Index() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const refText = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newId = new Date().getTime().toString();
      const newPerson = { id: newId, name };
      dispatch({ type: "ADD_PERSON", payload: newPerson });
    } else {
      dispatch({ type: "NO_VALUE" });
    }
    setName("");
    refText.current.value = "";
    refText.current.focus();
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.showModal && (
        <Modal closeModal={closeModal} modalContent={state.ModalContent} />
      )}

      <form className="form" onSubmit={handleSubmit}>
        <input
          ref={refText}
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add person</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4 className="name">{name}</h4>
            <button onClick={() => dispatch({ type: "REMOVE", payload: id })}>
              remove
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Index;
