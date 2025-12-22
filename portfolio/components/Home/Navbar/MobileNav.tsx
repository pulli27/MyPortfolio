import { NavLinks } from "../constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[100002]
        bg-black/80 backdrop-blur-sm w-full h-screen`}
      />

      {/* Side Nav */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 delay-100
        z-[100050] right-0 top-0 h-full w-[85%] sm:w-[400px] lg:hidden`}
      >
        <div
          className="
            relative h-full
            bg-[#120f2a]/70
            backdrop-blur-2xl
            border-l border-[#8B6FD6]/30
            shadow-[-10px_0_50px_rgba(139,111,214,0.35)]
          "
        >
          {/* Close Button */}
          <button
            onClick={closeNav}
            className="
              absolute top-6 right-6 w-10 h-10 rounded-full
              bg-white/5 hover:bg-[#8B6FD6]/20
              border border-white/10
              flex items-center justify-center
              transition-all duration-300
              hover:rotate-90
            "
          >
            <CgClose className="w-6 h-6 text-white hover:text-[#8B6FD6]" />
          </button>

          {/* Header Accent */}
          <div className="pt-10 px-8 pb-6">
            <div className="w-16 h-1 rounded-full bg-[linear-gradient(90deg,#6D4AA8,#8B6FD6,#B79CED)]" />
          </div>

          {/* Nav Links */}
          <nav className="px-8 space-y-5 mt-6">
            {NavLinks.map((link, index) => (
              <Link key={link.id} href={link.url}>
                <div
                  onClick={closeNav}
                  className="group py-4 transition-all duration-300"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span
                    className="
                      text-2xl font-bold
                      text-white/80
                      group-hover:text-[#8B6FD6]
                      transition-colors
                    "
                  >
                    {link.Label}
                  </span>

                  {/* Underline */}
                  <div
                    className="
                      h-[2px] mt-2
                      bg-[linear-gradient(90deg,#6D4AA8,#8B6FD6,#B79CED)]
                      scale-x-0 group-hover:scale-x-100
                      transition-transform duration-300 origin-left
                    "
                  />
                </div>
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div
            className="
              absolute bottom-0 left-0 right-0 p-8
              border-t border-white/10
              bg-black/30 backdrop-blur-md
            "
          >
            <p className="text-sm text-gray-400 mb-4">Connect with me</p>

            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/pulli27"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 rounded-full
                  bg-white/10
                  border border-white/10
                  flex items-center justify-center
                  transition-all duration-300
                  hover:bg-[#8B6FD6]
                  hover:border-[#8B6FD6]
                  hover:scale-110
                "
              >
                <FaGithub className="w-5 h-5 text-white hover:text-black" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pulmi-vihansa-4450872a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 rounded-full
                  bg-white/10
                  border border-white/10
                  flex items-center justify-center
                  transition-all duration-300
                  hover:bg-[#8B6FD6]
                  hover:border-[#8B6FD6]
                  hover:scale-110
                "
              >
                <FaLinkedin className="w-5 h-5 text-white hover:text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
