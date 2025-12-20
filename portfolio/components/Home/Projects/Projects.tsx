"use client";

import Image from "next/image";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "PackPal – Smart Bag Selling System",
    description:
      "A full-stack bag-selling e-commerce system featuring authentication, customization, real-time stock updates, secure checkout, and admin dashboards.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/pulli27/PackPal",
    image: "/images/packpall.jpg",
  },
  {
    id: 2,
    title: "ZenTrack – Wellness & Habit Tracking App",
    description:
      "A wellness mobile app for habit tracking, mood journaling, hydration reminders, and progress insights.",
    technologies: ["Kotlin", "SharedPreferences", "Android Studio"],
    github: "https://github.com/pulli27/ZenTrack-Daily-Habit-Tracker",
    image: "/images/zentrac.png",
  },
  {
    id: 3,
    title: "Crown Crest – Hotel Reservation System",
    description:
      "A web-based hotel booking system with secure backend staff and role management.",
    technologies: ["Java", "JSP", "SQL", "Tomcat"],
    github: "https://github.com/pulli27/CrownCrest",
    image: "/images/crowncc.png",
  },
  {
    id: 4,
    title: "Microwins – Mobile Productivity App",
    description:
      "A task and productivity app with a clean UI and intuitive navigation.",
    technologies: ["Kotlin", "Android Studio"],
    github: "https://github.com/pulli27/MicroWins",
    image: "/images/microwin.png",
  },
  {
    id: 5,
    title: "YummyGo – Food Ordering App",
    description:
      "A UI/UX-focused food ordering app designed in Figma with a smooth checkout flow.",
    technologies: ["Figma", "UI/UX"],
    github: "https://github.com/pulli27/MicroWins",
    image: "/images/yummygo.png",
  },
  {
    id: 6,
    title: "Immunize Hub – Vaccination Portal",
    description:
      "A digital vaccination platform with patient registration and nurse verification modules.",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    github: "https://github.com/pulli27/ImmunizeHub",
    image: "/images/immunizehub.png",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "A modern portfolio showcasing projects, skills, and animations.",
    technologies: ["React", "TypeScript", "CSS"],
    github: "https://github.com/pulli27/MyPortfolio",
    live: "https://pulli27.github.io/MyPortfolio/",
    image: "/images/port.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full px-6 py-22 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6FD6]/200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto text-white">
        {/* ================= HEADER ================= */}
<div className="relative text-center mb-20 animate-fadeInUp">

  {/* Decorative lines BEHIND the text */}
  <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-85 -z-8">
    <span className="w-9 h-[4px] bg-[#8B6FD6]/40" />
    <span className="w-9 h-[4px] bg-[#8B6FD6]/40" />
  </span>

  {/* Main heading */}
<h4
  className={`
    text-4xl md:text-3xl lg:text-4xl
    font-extrabold tracking-wide
    ${lora.className}
  `}
>
  <span className="text-white">Featured </span>{" "}
  <span className="text-[#8B6FD6]">Projects </span>
  
</h4>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#2A2A35]/60 backdrop-blur-md border border-[#8B6FD6]/20 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(139,111,214,0.35)]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B6FD6]/80 via-[#6a4fcf]/70 to-[#3b2a6f]/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-5">
                  
                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold
                               bg-[#5A3EC8] text-white
                               group-hover:bg-[#4B32B3]
                               hover:bg-white hover:text-[#8B6FD6]
                               transition-all duration-300 hover:scale-105"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>

                  {/* Live Demo Button */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold
                                 bg-[#5A3EC8] text-white
                                 group-hover:bg-[#4B32B3]
                                 hover:bg-white hover:text-[#8B6FD6]
                                 transition-all duration-300 hover:scale-105"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 stroke-current"
                        fill="none"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <path d="M15 3h6v6" />
                        <path d="M10 14L21 3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-[#8B6FD6]/15 text-[#8B6FD6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
