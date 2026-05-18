import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">

      {/* SOFT PASTEL BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#fdf6ef" }}
      />

      {/* BLOB 1 — top right, petal pink */}
      <div
        className="absolute"
        style={{
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "#f5e0d8",
          top: "-120px",
          right: "80px",
          filter: "blur(60px)",
          opacity: 0.8,
          animation: "blobDrift1 9s ease-in-out infinite",
        }}
      />

      {/* BLOB 2 — bottom left, lavender */}
      <div
        className="absolute"
        style={{
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "#e8d5f0",
          bottom: "-60px",
          left: "-40px",
          filter: "blur(50px)",
          opacity: 0.7,
          animation: "blobDrift2 11s ease-in-out infinite",
        }}
      />

      {/* BLOB 3 — center, warm peach */}
      <div
        className="absolute"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "#fce8d5",
          top: "30px",
          left: "35%",
          filter: "blur(40px)",
          opacity: 0.6,
          animation: "blobDrift3 13s ease-in-out infinite 2s",
        }}
      />

      {/* PARTICLES */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="absolute inset-0"
          options={{
            autoPlay: true,
            background: {
              color: { value: "transparent" },
            },
            clear: true,
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
            detectRetina: true,
            fpsLimit: 120,

            interactivity: {
              detectsOn: "window",
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "bubble" },
                resize: { enable: true, delay: 0.5 },
              },
              modes: {
                // ✅ old bubble settings you loved
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 1,
                  size: 50,
                },
                push: {
                  quantity: 4,
                },
              },
            },

            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
              },

              // ✅ old colors you loved
              color: {
                value: ["#c4b5fd", "#f9a8d4", "#93c5fd"],
              },

              links: {
                enable: true,
                color: "#c4b5fd",
                distance: 150,
                opacity: 0.3,
                width: 1,
              },

              move: {
                enable: true,
                speed: 2,
                direction: "none",
                outModes: {
                  default: "out",
                },
              },

              opacity: {
                value: 1,
              },

              shape: {
                type: "circle",
              },

              size: {
                value: { min: 1, max: 4 },
              },
            },

            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
          }}
        />
      )}

    </div>
  );
}