"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

import { Lora } from "next/font/google";
import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});



const lora = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
});



/* ---------------------------------- */
/* Types */
/* ---------------------------------- */
type Skill = {
  name: string;
  logo: string;
};

type SkillGroup = {
  name: string;
  key: string;
  items: Skill[];
};

/* ---------------------------------- */
/* Skills Data */
/* ---------------------------------- */
const skills: SkillGroup[] = [
  {
    name: "Frontend",
    key: "Frontend",
    items: [
      { name: "HTML", logo: "/logos/html.png" },
      { name: "CSS", logo: "/logos/css.png" },
      { name: "JavaScript", logo: "/logos/javascript.png" },
      { name: "React", logo: "/logos/react.png" },
      { name: "Next.js", logo: "/logos/nextjs.png" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
      
    ],
  },
  {
    name: "Backend",
    key: "Backend",
    items: [
      { name: "Node.js", logo: "/logos/nodejs.png" },
      { name: "PHP", logo: "/logos/php.png" },
      { name: ".NET", logo: "/logos/net.png" },
      { name: "MongoDB", logo: "/logos/mongodb.png" },
      { name: "MySQL", logo: "/logos/mysql.png" },
      { name: "Express.js", logo: "/logos/ex.png" },
    ],
  },
  {
    name: "Languages",
    key: "Languages",
    items: [
      { name: "Java", logo: "/logos/java.png" },
      { name: "Python", logo: "/logos/python.png" },
      { name: "C", logo: "/logos/c.png" },
      { name: "C#", logo: "/logos/csharp.png" },
      { name: "C++", logo: "/logos/c++.png" },
      { name: "Php", logo: "/logos/php.png" },
      { name: "kotlin", logo: "/logos/otlin.png" },
      { name: "R", logo: "/logos/r.png" },
    ],
  },
  {
    name: "Tools",
    key: "Tools",
    items: [
      { name: "Git", logo: "/logos/git.png" },
      { name: "GitHub", logo: "/logos/github.jpg" },
      { name: "Android Studio", logo: "/logos/androidStudio.png" },
      { name: "VS Code", logo: "/logos/vscode.png" },
      { name: "Visual Studio", logo: "/logos/visualStudio.png" },
      { name: "Postman", logo: "/logos/postman.png" },
      { name: "Jira", logo: "/logos/jira.png" },
      { name: "Figma", logo: "/logos/figma.png" },
      { name: "Canva", logo: "/logos/canva.png" },
      
    ],
  },
];

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */
export default function SkillsSection() {
  const [selected, setSelected] = useState("All Skills");

  const categories = useMemo(
    () => ["All Skills", ...skills.map((s) => s.key)],
    []
  );

  const allSkills = useMemo(
    () => skills.flatMap((g) => g.items),
    []
  );

  const visibleGroups =
    selected === "All Skills"
      ? [{ name: "All Skills", items: allSkills }]
      : skills.filter((g) => g.key === selected);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full px-10 py-22 overflow-hidden"
    >
      {/* 🔹 SAME BLACK READABILITY OVERLAY AS ABOUT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* 🔹 SAME TOP GRADIENT LINE AS ABOUT */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6FD6]/200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto text-white">
          {/* ================= HEADER ================= */}
<div className="relative text-center mb-20 animate-fadeInUp">

  {/* Decorative lines BEHIND the text */}
  <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-102 -z-8">
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
  <span className="text-[#8B6FD6]">Skills & </span>{" "}
  <span className="text-white">Technologies</span>
</h4>



</div>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-13">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all
                ${
                  selected === cat
                    ? "bg-[#8B6FD6] scale-105 shadow-lg"
                    : "bg-[#2A2A35] hover:text-[#8B6FD6]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <div className="space-y-16">
          {visibleGroups.map((group) => (
            <div key={group.name}>
              {selected !== "All Skills" && (
              <h3
  className={`
    text-3xl
    font-bold
    text-[#8B6FD6]
    mb-6
    tracking-wide
    underline
    underline-offset-8
    decoration-[#8B6FD6]/60
    ${chakraPetch.className}
  `}
>
  {group.name}
</h3>


              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-[#2d2c2c]/60 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col items-center hover:-translate-y-1 hover:shadow-xl transition-all"
                  >
                    <div className="relative w-10 h-10 mb-3">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm font-semibold">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 SAME MARQUEE ROW (UNCHANGED) */}
      <div className="relative z-10 mt-20 overflow-hidden">
        <div className="flex gap-10 animate-marquee px-10">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <div
              key={i}
              className="relative w-12 h-12 shrink-0 opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={skill.logo}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
