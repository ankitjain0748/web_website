// TiltComponent.jsx
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const TiltComponent = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25, // Maximum tilt angle
        speed: 400, // Speed of the tilt animation
        glare: true, // Add glare effect
        'max-glare': 0.5, // Maximum glare intensity
      });
    }
  }, []);

  return (
    <div
      ref={tiltRef}
      className="tilt-box p-6 bg-gray-300 rounded-lg shadow-lg"
      style={{ width: '300px', height: '300px' }}
    >
      <h2 className="text-center text-xl">Tilt Me!</h2>
    </div>
  );
};

export default TiltComponent;
