"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function StarsBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        particles: {
          number: { value: 70 },
          size: { value: 1.2 },
          color: { value: "#7da7ff" },
          opacity: { value: 0.6 },
          move: { enable: true, speed: 0.2 },
        },
      }}
    />
  );
}
