"use client";

import { useState, useEffect, useRef } from "react";
import { Lora } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";
import confetti from "canvas-confetti"; // ✅ NEW

gsap.registerPlugin(ScrollTrigger);

const lora = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Contact() {
  const infoRef = useRef<HTMLDivElement | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  /* ================= GSAP ANIMATION ================= */
  useEffect(() => {
    if (!infoRef.current) return;

    gsap.fromTo(
      infoRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  /* ================= CONFETTI ================= */
  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#8B6FD6", "#6a4fcf", "#ffffff"],
    });
  };

  /* ================= HANDLERS ================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("https://formspree.io/f/mjgbewyk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });

      fireConfetti(); // 🎉 CELEBRATION
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6FD6]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
<div className="relative text-center mb-20 animate-fadeInUp">

  {/* Decorative lines BEHIND the text */}
  <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-60 -z-8">
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
  <span className="text-[#8B6FD6]">Contact </span>{" "}
  <span className="text-white">Me</span>
</h4>



</div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT INFO */}
          <div ref={infoRef} className="space-y-8">
            <InfoCard icon={<MapPin />} title="Location" content="Sri Lanka" />

            <InfoCard
              icon={<Mail />}
              title="Email"
              content={
                <a
                  href="mailto:pulmivihansa27@gmail.com"
                  className="text-[#8B6FD6] hover:underline"
                >
                  pulmivihansa27@gmail.com
                </a>
              }
            />

            <div className="bg-[#1b1538]/70 border border-[#8B6FD6]/30 rounded-2xl p-6">
              <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <SocialIcon
                  href="https://www.linkedin.com/in/pulmi-vihansa-4450872a3/"
                  icon={<Linkedin />}
                />
                <SocialIcon
                  href="https://github.com/pulli27"
                  icon={<Github />}
                />
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#1b1538]/70 border border-[#8B6FD6]/30 rounded-2xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Send a Message</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <Input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" />
              <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" />
            </div>

            <Input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-[#0a0a1f] border border-[#8B6FD6]/30 text-white focus:outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#8B6FD6] to-[#6a4fcf]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm">
                🎉 Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function InfoCard({ icon, title, content }: any) {
  return (
    <div className="bg-[#1b1538]/70 border border-[#8B6FD6]/30 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-2 text-[#8B6FD6]">
        {icon}
        <h3 className="text-sm uppercase tracking-wide text-gray-400">
          {title}
        </h3>
      </div>
      <div className="text-white text-lg">{content}</div>
    </div>
  );
}

function SocialIcon({ href, icon }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-12 h-12 rounded-xl bg-[#8B6FD6]/20 flex items-center justify-center text-[#8B6FD6] hover:bg-[#8B6FD6] hover:text-white transition"
    >
      {icon}
    </a>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      required
      className="w-full px-4 py-3 rounded-xl bg-[#0a0a1f] border border-[#8B6FD6]/30 text-white focus:outline-none"
    />
  );
}
