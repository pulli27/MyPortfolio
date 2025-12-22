"use client";

import Image from "next/image";
import { FaFigma, FaCode, FaDatabase } from "react-icons/fa";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
});


const services = [
  {
    icon: <FaCode className="w-12 h-12" />,
    title: "Frontend Development",
    description:
      "Developing responsive and interactive web applications using modern technologies like Node.js, React, Next.js, and TypeScript.",
  },
  {
    icon: <FaDatabase className="w-12 h-12" />,
    title: "Backend Development",
    description:
      "Developing robust backend systems with secure APIs, efficient database management, and scalable server-side architectures.",
  },
  {
    icon: <FaFigma className="w-12 h-12" />,
    title: "UI / UX Design",
    description:
      "Designing functional and aesthetically refined interfaces focused on user experience and accessibility.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full px-6 py-20 overflow-hidden"
    >
      {/* Optional soft overlay for readability (does NOT change background) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6FD6]/200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
       {/* ================= HEADER ================= */}
<div className="relative text-center mb-20 animate-fadeInUp">

  {/* Decorative lines BEHIND the text */}
  <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-50 -z-8">
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
  <span className="text-[#8B6FD6]">About</span>{" "}
  <span className="text-white">Me</span>
</h4>



</div>
 {/* ================= ABOUT CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-32">
          
          {/* IMAGE - LEFT */}
          <div className="flex justify-center lg:justify-start animate-fadeInLeft">
            <div
              className="
                relative
                w-[280px] h-[280px] md:w-[320px] md:h-[320px]
                rounded-full overflow-hidden
                border-[3px] border-[#8B6FD6]/70
                shadow-[0_0_30px_rgba(139,111,214,0.4)]
                transition-all duration-500
                hover:scale-105 hover:rotate-3
                hover:shadow-[0_0_50px_rgba(139,111,214,0.6)]
                lg:-mt-1
                lg:ml-10
              "
            >
              <Image
                  src="/images/p.jpeg"
                  alt="Pulmi Vihansa"
                  fill
                  priority
                  className="object-cover scale-100"
                  style={{
                    objectPosition: "center 15%", // 👈 moves image DOWN slightly
                  }}
                />
              
            </div>
          </div>

          {/* TEXT - RIGHT */}
          <div
            className="
              text-gray-300
              text-lg -md:text-xl
              leading-relaxed
              space-y-6
              animate-fadeInRight
              max-w-3xl
              text-justify
              lg:-ml-55
              lg:-mt-9
            "
          >
            <p>
            I’m <strong className="text-white">Pulmi Vihansa</strong>, a Data Science undergraduate at{" "}
            <strong className="text-white">SLIIT</strong> and a passionate{" "}
             <strong className="text-white">full-stack developer</strong> with a strong focus on backend engineering, cloud technologies, and building scalable system architectures.
              Over the past few years, I’ve completed {" "}
              <strong className="text-white">4+ full-stack projects </strong>
              using technologies such as MERN, Java JSP/Servlet, PHP-MySQL, and Android, gaining hands-on experience in developing secure APIs, real-time features, and production-ready applications.
               I’ve also collaborated on projects that required working with international standards and Agile workflows, strengthening my ability to deliver reliable solutions in team-based environments.
              
              
            </p>

            <p>
            I’m skilled in <strong className="text-white">Java, JavaScript, Python, C#, React.js, Node.js, SQL, MongoDB, AWS, Azure, and .NET, </strong> 
            and I enjoy transforming complex requirements into clean, efficient, and well-structured systems. 
            Beyond coding, I value continuous learning, problem-solving, and writing maintainable code that scales. 
            My long-term goal is to contribute to high-quality digital solutions that deliver meaningful real-world impact.
              
            </p>

        
          </div>

        </div>

        
        {/* ================= SERVICES SECTION ================= */}
        <div className="max-w-6xl mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-[#2d2c2c]/60 backdrop-blur-md
                  border border-[#8B6FD6]/30
                  rounded-3xl p-8
                  hover:scale-105
                  hover:border-[#8B6FD6]/60
                  transition-all duration-300
                  shadow-lg
                  hover:shadow-[0_0_30px_rgba(139,111,214,0.35)]
                "
              >
                <div className="flex justify-center mb-6 text-[#8B6FD6]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-center text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
