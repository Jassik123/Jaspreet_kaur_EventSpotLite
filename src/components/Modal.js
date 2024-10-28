import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const Modal = ({ event, onClose }) => {
  return (
    <CSSTransition in={!!event} timeout={300} classNames="slide-in" unmountOnExit>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full transform transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
          <p className="mb-4">{event.description}</p>
          <img src={event.image} alt={event.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Close
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
