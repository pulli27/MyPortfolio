"use client";

import { useEffect, useState } from "react";

export default function ScrollArrow() {
  const [down, setDown] = useState(true);

  useEffect(() => {
    const onScroll = () => setDown(window.scrollY < 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: down ? window.innerHeight : 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-500 text-black font-bold"
    >
      {down ? "↓" : "↑"}
    </button>
  );
}
