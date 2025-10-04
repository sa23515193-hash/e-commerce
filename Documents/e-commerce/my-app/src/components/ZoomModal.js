import React from "react";

const ZoomModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative">
        <img src={imageUrl} alt="Zoomed Product" className="max-h-[80vh] rounded" />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ZoomModal;

