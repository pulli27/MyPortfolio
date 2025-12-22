"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lora } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const lora = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration?: string;
  grade?: string;
  description?: React.ReactNode;
  logo: string;
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "BSc (Hons) Information Technology – Data Science",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    duration: "2023 – Present",
    description: (
      <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4">
        <p>
          I am a{" "}
          <span className="text-white font-semibold">
            3rd-year undergraduate student
          </span>{" "}
          specializing in{" "}
          <span className="text-[#8B6FD6] font-semibold">Data Science</span>,
          with a strong passion for building modern, user-focused digital solutions.
        </p>

        <p>
          Through academic coursework, project-based learning, and extracurricular
          activities, I have developed a solid foundation in software development,
          problem-solving, and system design. I have hands-on experience in developing
          responsive{" "}
          <span className="text-white font-semibold">
            web and mobile applications, working with databases and APIs, and applying
            UI/UX
          </span>{" "}
          best practices.
        </p>

        <p>
          In addition to technical skills, I bring strong{" "}
          <span className="text-white font-semibold">
            teamwork, adaptability, and communication abilities.
          </span>{" "}
          I am highly motivated and eager to learn.
        </p>
      </div>
    ),
    logo: "/images/sliit.jpg",
  },
  {
    id: 2,
    degree: "G.C.E. Advanced Level & Ordinary Level",
    institution: "Sanghamiththa Balika Vidyalaya, Galle",
    duration: "2008 – 2022",
    description: (
      <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4">
        <p>
          I completed my G.C.E. Ordinary Level and Advanced Level examinations at{" "}
          <span className="text-white font-semibold">
            Sanghamiththa Balika Vidyalaya
          </span>
          , where I actively contributed as a School Prefect and Senior Western Band
          member.
        </p>

        <p>
          These experiences strengthened my leadership, teamwork, and time-management
          skills while shaping my confidence and responsibility.
        </p>
      </div>
    ),
    logo: "/images/sbv.jpg",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".edu-card"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative pt-20 pb-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6FD6]/900 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="relative text-center mb-20">
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-50 -z-10">
            <span className="w-9 h-[4px] bg-[#8B6FD6]/40" />
            <span className="w-9 h-[4px] bg-[#8B6FD6]/40" />
          </span>

          <h4
            className={`text-4xl md:text-3xl lg:text-4xl font-extrabold tracking-wide ${lora.className}`}
          >
            <span className="text-[#8B6FD6]">Education</span>{" "}
            
          </h4>
        </div>


        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="
              absolute
              left-5 md:left-1/2
              md:-translate-x-1/2
              w-[3px]
              h-full
              bg-gradient-to-b
              from-[#8B6FD6]
              via-[#6a4fcf]
              to-transparent
            "
          />

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={edu.id}
                className="relative mb-16 md:-mb-25 flex"
              >
                {/* LEFT CARD (DESKTOP) */}
                {isLeft && (
                  <div className="hidden md:block w-1/2 pr-14">
                    <EduCard edu={edu} />
                  </div>
                )}

                {/* NODE */}
                <div
                  className="
                    absolute
                    -left-1 md:left-1/2
                    md:-translate-x-1/2
                    top-9
                    z-10
                  "
                >
                  <div className="w-12 h-12 rounded-full border-4 border-[#8B6FD6] bg-[#0a0a1f] flex items-center justify-center shadow-[0_0_30px_rgba(139,111,214,0.9)]">
                    <div className="w-3 h-3 bg-[#8B6FD6] rounded-full animate-pulse" />
                  </div>
                </div>

                {/* RIGHT CARD (DESKTOP) */}
                {!isLeft && (
                  <div className="hidden md:block w-1/2 pl-14 ml-auto">
                    <EduCard edu={edu} />
                  </div>
                )}

                {/* MOBILE CARD */}
                <div className="md:hidden w-full pl-12">
                  <EduCard edu={edu} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function EduCard({ edu }: { edu: Education }) {
  return (
    <div
      className="
        edu-card
        bg-[#1b1538]/70
        border border-[#8B6FD6]/30
        rounded-2xl p-6
        shadow-lg
        transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.04]
        hover:shadow-[0_0_40px_rgba(139,111,214,0.7)]
      "
    >
      <div className="flex gap-4 mb-4">
        <div className="w-14 h-14 relative bg-white rounded-full p-2">
          <Image
            src={edu.logo}
            alt={edu.institution}
            fill
            className="object-contain"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
          <p className="text-gray-400 text-sm">{edu.institution}</p>
          {edu.duration && (
            <p className="text-gray-500 text-xs">{edu.duration}</p>
          )}
        </div>
      </div>

      {edu.grade && (
        <p className="text-sm mb-2">
          <span className="text-gray-400">Grade: </span>
          <span className="text-[#8B6FD6] font-semibold">{edu.grade}</span>
        </p>
      )}

      {edu.description && <div>{edu.description}</div>}
    </div>
  );
}
