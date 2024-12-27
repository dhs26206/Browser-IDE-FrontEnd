import React from 'react';
import './LoadingSpinner.css';
import { jellyTriangle } from 'ldrs'


// Default values shown

const LoadingSpinner = () => {
  // metronome.register()
  jellyTriangle.register()
  // Default values shown
  return (
    <div className='flex justify-center align-middle h-full items-center'>




<l-jelly-triangle
  size="25"
  speed="1.75" 
  color="white" 
></l-jelly-triangle>
    </div>
  );
};

export default LoadingSpinner;
