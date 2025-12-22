"use client";

import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { gsap } from "gsap";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/pulli27",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/pulmi-vihansa-4450872a3/",
      label: "LinkedIn",
    },
  ];

  /* ================= GSAP ANIMATION ================= */
  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-white/5 overflow-hidden"
    >
      {/* Background same as NAV */}
      <div className="absolute inset-0 bg-[#262525]/90 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10">
        {/* ================= NAV LINKS ================= */}
        <div className="flex justify-center mb-6">
  <nav className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
    {navLinks.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className="
          relative
          text-sm                /* Mobile */
          md:text-[15px]         /* Tablet */
          lg:text-lg             /* Desktop ONLY */
          font-medium
          text-white
          transition-colors duration-300
          group
          hover:text-[#8B6FD6]
        "
      >
        {link.name}

        {/* Purple underline animation */}
        <span
          className="
            absolute left-0 -bottom-1
            h-[2px] w-full
            bg-[linear-gradient(90deg,#6D4AA8,#8B6FD6,#B79CED)]
            scale-x-0 group-hover:scale-x-100
            transition-transform duration-300
            origin-left
          "
        />
      </a>
    ))}
  </nav>
</div>


        {/* Divider */}
        <div className="w-[90%] mx-auto h-px bg-gradient-to-r from-transparent via-[#8B6FD6]/800 to-transparent mb-6" />

        {/* ================= BOTTOM CONTENT ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Pulmi Vihansa. All Rights Reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  w-10 h-10 rounded-full
                  bg-white/10
                  flex items-center justify-center
                  border border-white/10
                  text-white
                  transition-all duration-300
                  hover:bg-[#8B6FD6]
                  hover:border-[#8B6FD6]
                  hover:scale-110
                  hover:shadow-[0_0_20px_rgba(139,111,214,0.6)]
                "
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* RIGHT BRAND */}
          <div className="flex items-center gap-3 text-gray-300">
            <span
              className="
                w-10 h-10 rounded-full
                flex items-center justify-center
                bg-[linear-gradient(135deg,#6D4AA8,#8B6FD6,#B79CED)]
                shadow-[0_0_25px_rgba(139,111,214,0.7)]
              "
            >
              <FaCode className="text-white" />
            </span>

            <div className="text-left">
              <p className="text-white font-medium">
                Designed by <span className="text-[#8B6FD6]">Pulmi</span>
              </p>
              <p className="text-xs text-gray-400">
                Data Science Undergraduate | Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </footer>
  );
}
