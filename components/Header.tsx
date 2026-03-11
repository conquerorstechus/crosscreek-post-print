export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/post and print.png" alt="Post & Print Logo" className="h-10" />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#services" className="hover:text-[#003d6b] transition-colors">
            Services
          </a>
          <a href="#hours" className="hover:text-[#003d6b] transition-colors">
            Hours
          </a>
          <a href="#location" className="hover:text-[#003d6b] transition-colors">
            Location
          </a>
          <a href="#contact" className="hover:text-[#003d6b] transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="tel:8135650010"
          className="bg-[#003d6b] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#66bb6a] transition-colors"
        >
          (813) 565-0010
        </a>
      </div>
    </header>
  );
}
