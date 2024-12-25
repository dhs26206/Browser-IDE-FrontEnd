import React, { useState } from 'react';
import './ErrorPopup.css';  // Import the CSS file for this component

const ErrorPopup = ({isVisible,setIsVisible,mes}) => {

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div className="error-popup">
          <h3 className="text-xl font-semibold">Error</h3>
          <p className="mt-2">{mes}</p>

          {/* Close Button */}
          <button
            onClick={closePopup}
            className="mt-4 bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorPopup;
