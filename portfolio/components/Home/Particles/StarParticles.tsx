"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function StarParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: { value: 130, density: { enable: true, area: 1200 } },
      color: { value: "#ffffff" },
      shape: { type: "star" },
      size: { value: { min: 0.5, max: 1.4 } },
      opacity: { value: { min: 0.4, max: 0.9 } },
      move: {
        enable: true,
        speed: 0.2,
        random: true,
        outModes: { default: "out" },
      },
    },
  }), []);

  if (!ready) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <Particles options={options} />
    </div>
  );
}
