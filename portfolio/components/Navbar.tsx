export default function Navbar() {
  const links = ["home", "about", "skills", "projects", "education", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 className="text-blue-400 font-bold text-xl">YourName</h1>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a key={l} href={`#${l}`} className="hover:text-blue-400 capitalize">
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
