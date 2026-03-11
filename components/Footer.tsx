export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="mb-3">
            <img src="/logo.jpg" alt="Post & Print Logo" className="h-10 mb-3" />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Locally owned and operated. Design, print, and shipping solutions for your business and
            personal needs.
          </p>
          <a
            href="https://www.facebook.com/115616746488408"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Facebook ↗
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#hours" className="hover:text-white transition-colors">
                Hours
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-white transition-colors">
                Location
              </a>
            </li>
            <li>
              <a href="mailto:fl178@postnet.com" className="hover:text-white transition-colors">
                Send a Print File
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Contact</h3>
          <address className="not-italic text-sm space-y-2">
            <p>6421 N. Florida Ave, Ste D</p>
            <p>Tampa, FL 33604</p>
            <p className="pt-1">
              <a href="tel:8135650010" className="hover:text-white transition-colors">
                (813) 565-0010
              </a>
            </p>
            <p>
              <a
                href="mailto:fl178@postnet.com"
                className="hover:text-white transition-colors"
              >
                fl178@postnet.com
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} PostNet Tampa. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
