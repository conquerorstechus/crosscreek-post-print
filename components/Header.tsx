'use client';

import PrintMenu from './PrintMenu';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png.png" alt="Post & Print Logo" className="h-15" />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <PrintMenu />
          
          <a href="/#services" className="hover:text-[#003d6b] transition-colors">
            Services
          </a>

          <a href="/#location" className="hover:text-[#003d6b] transition-colors">
            Location
          </a>
          <a href="/estimate" className="hover:text-[#003d6b] transition-colors">
            Get Estimate
          </a>
          <a href="/contact" className="hover:text-[#003d6b] transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="tel:8134019820"
          className="bg-[#003d6b] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#66bb6a] transition-colors"
        >
          (813) 401-9820
        </a>
      </div>
    </header>
  );
}
