import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { closeModal } = useGlobalContext();
  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Congrats!</h2>
        <h4>You answered 0% of question correctly</h4>
        <button className="btn" onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
