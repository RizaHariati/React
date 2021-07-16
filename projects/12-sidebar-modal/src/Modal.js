import React, { useContext, useEffect } from "react";

import { AppContext } from "./context";
const Modal = () => {
  const { closeModal, refModal, showModal } = useContext(AppContext);
  useEffect(() => {
    if (showModal) {
      refModal.current.style.opacity = "1";
    } else if (!showModal) {
      refModal.current.style.opacity = "0";
    }
  }, [showModal, refModal]);
  return (
    <div className="modal-container" ref={refModal}>
      <div className="background"></div>
      <div className="modal">
        <button className="close-btn" onClick={closeModal}>
          <i className="fa fa-times"></i>
        </button>
        <h4>Modal Content</h4>
      </div>
    </div>
  );
};

export default Modal;
