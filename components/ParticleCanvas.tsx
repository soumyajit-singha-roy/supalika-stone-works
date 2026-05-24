"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticleCanvas() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        particles: {
          color: {
            value: "rgba(201,146,42,0.4)",
          },
          move: {
            direction: "top",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 35,
          },
          opacity: {
            value: { min: 0.1, max: 0.4 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
}
