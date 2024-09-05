import React from "react";
import { MdClose } from "react-icons/md";
import "./Modal.css";


const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div className="modalContainer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-body">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="modal-image">
                <img className="img-responsive img-fluid" src="/assets/juriful.jpg" alt="product-img" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <p className="closeBtn" onClick={onClose}>
                <MdClose />
              </p>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;