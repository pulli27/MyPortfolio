"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
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

  return (
    
    <footer className="relative border-t border-white/5">
      
      {/* Background same as NAV */}
      <div className="absolute inset-0 bg-[#262525]/90 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10">
        
        {/* Navigation Links */}
        <div className="flex justify-center mb-6">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative text-sm font-medium text-white transition-colors duration-300 group hover:text-[#8B6FD6]"
              >
                {link.name}

                {/* Gradient underline (same as nav) */}
                <span
                  className="
                    absolute left-0 -bottom-1 h-[2px] w-full
                    bg-[linear-gradient(90deg,#6D4AA8,#8B6FD6,#B79CED)]
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 origin-left
                  "
                />
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="w-[70%] mx-auto h-px bg-gradient-to-r from-transparent via-[#8B6FD6]/900 to-transparent mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
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
                  w-9 h-9 rounded-full
                  bg-white/10
                  flex items-center justify-center
                  border border-white/10
                  text-white
                  transition-all duration-300
                  hover:bg-[#8B6FD6]
                  hover:border-[#8B6FD6]
                  hover:scale-110
                "
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="text-gray-400 text-sm flex items-center gap-1.5">
            <span>Designed by</span>
            <FaHeart className="w-3.5 h-3.5 text-[#8B6FD6] animate-pulse" />
            <span>by Pulmi</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </footer>
  );
}
