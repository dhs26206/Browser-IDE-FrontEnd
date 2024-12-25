import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center align-middle h-full'>

    <div className="loading-spinner">
      <div className="circle"></div>
    </div>
    </div>
  );
};

export default LoadingSpinner;
