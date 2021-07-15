import React, { useContext } from "react";

import { TextContext } from "./App";

const Alert = () => {
  const textContext = useContext(TextContext);
  const { modalText, modalColor, closeModal } = textContext;
  setTimeout(() => {
    closeModal();
  }, 1000);
  return (
    <>
      <div className={`modal ${modalColor}`}>
        <p className="modal-text">{modalText}</p>
      </div>
    </>
  );
};

export default Alert;
