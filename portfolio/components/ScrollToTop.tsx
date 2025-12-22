"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-[#8B6FD6]
        text-white
        flex items-center justify-center
        shadow-[0_0_25px_rgba(139,111,214,0.7)]
        hover:scale-110 transition-all duration-300
      "
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
}
