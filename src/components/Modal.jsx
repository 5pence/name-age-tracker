import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Error</h4>
        </div>
        <div className="modal-body">{props.text}</div>
        <div className="modal-footer">
          <button className="button" onClick={props.close}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
