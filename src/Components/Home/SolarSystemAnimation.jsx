import React from "react";
import './SolarSystemAnimation.css'; // Import the CSS file

// Function to generate stars
const generateStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const colors = ["white", "red", "yellow"];
    const x = Math.random() * 100; 
    const y = Math.random() * 100; 
    const size =  0.002; 
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shadowBlur = Math.random() * 4 + 2; 
    const shadowSpread = Math.random() * 2 + 1; 


    stars.push(
      <div
        key={i}
        className="star"
        style={{
          top: `${y}vh`,
          left: `${x}vw`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          boxShadow: `0 0 ${shadowBlur}px ${shadowSpread}px ${color}`,
          animationDuration: `${Math.random() * 3 + 2}s`, // random twinkle speed
        }}
      ></div>
    );
  }
  return stars;
};

const SolarSystemAnimation = () => {
  return (
    <div className="solar-system">
      {generateStars(100)} {/* Generates 50 random stars */}
      <div className="sun"></div>
      <div className="planet orbit-1">
        <div className="planet-inner planet-1"></div>
      </div>
      <div className="planet orbit-2">
        <div className="planet-inner planet-2"></div>
      </div>
      <div className="planet orbit-3">
        <div className="planet-inner planet-3"></div>
      </div>
      <div className="planet orbit-4">
        <div className="planet-inner planet-4"></div>
      </div>
      <div className="planet orbit-5">
        <div className="planet-inner planet-5"></div>
      </div>
      <div className="planet orbit-6">
        <div className="planet-inner planet-6"></div>
      </div>
      <div className="planet orbit-7">
        <div className="planet-inner planet-7"></div>
      </div>
    </div>
  );
};

export default SolarSystemAnimation;




