import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="particle-container" style={{ position: 'relative', height: '100vh' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 50, // Number of particles
            },
            shape: {
              type: 'circle', // Particle shape
            },
            size: {
              value: 5, // Particle size
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'random', // Particle movement direction
              outModes: {
                default: 'out',
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse', // Repulse particles on hover
              },
            },
          },
        }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, color: 'white', padding: '20px' }}>
        <h1>Welcome to My Website</h1>
        <p>This is a simple particle effect background</p>
      </div>
    </div>
  );
};

export default ParticleBackground;
