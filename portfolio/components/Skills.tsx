export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"];

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s} className="bg-blue-500/10 p-4 rounded text-center">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
