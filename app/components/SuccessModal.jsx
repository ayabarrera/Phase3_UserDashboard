import React from "react";
import "./SuccessModal.css";

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Success!</h2>
        <p>{message}</p>
        <button className="close-btn" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default SuccessModal;
