import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    // Loads the tsparticles engine (required)
    await loadFull(engine);
  };

  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };

  return (
    <div style={{ position: "relative", height: "100vh", background: "#000" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 50, // Number of particles
              density: {
                enable: true,
                area: 800, // Adjust particle density
              },
            },
            color: {
              value: "#ffffff", // Particle color
            },
            shape: {
              type: "circle", // Particle shape
            },
            opacity: {
              value: 0.8,
              random: false,
            },
            size: {
              value: { min: 2, max: 5 }, // Particle size
            },
            move: {
              enable: true,
              speed: 3, // Particle movement speed
              direction: "none", // Random movement
              outModes: {
                default: "bounce",
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Repulse particles on hover
              },
              onClick: {
                enable: true,
                mode: "push", // Add particles on click
              },
            },
            modes: {
              repulse: {
                distance: 100, // Distance for repulsion effect
                duration: 0.4,
              },
              push: {
                quantity: 4, // Number of particles added on click
              },
            },
          },
          detectRetina: true,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Interactive Particles Background</h1>
        <p>Hover over the particles or click to see effects!</p>
      </div>
    </div>
  );
};

export default ParticleBackground;
