export default function Footer() {
  return (
    <footer className="bg-[#003d6b] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Logo & CTA Buttons */}
          <div>
            <div className="mb-8">
              <img src="/logo-footer.png" alt="Post & Print Logo" className="h-20 w-auto object-contain" />
            </div>
            <div className="space-y-3 flex flex-col">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=10861+Cross+Creek+Blvd,+Tampa,+FL+33647"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#003d6b] font-bold px-6 py-3 rounded text-center hover:bg-[#66bb6a] hover:text-white transition-colors uppercase text-sm tracking-wide"
              >
                Get Directions
              </a>
              <a
                href="/quote"
                className="bg-white text-[#003d6b] font-bold px-6 py-3 rounded text-center hover:bg-[#66bb6a] hover:text-white transition-colors uppercase text-sm tracking-wide"
              >
                Get a Print Quote
              </a>
              <a
                href="/send-files"
                className="bg-white text-[#003d6b] font-bold px-6 py-3 rounded text-center hover:bg-[#66bb6a] hover:text-white transition-colors uppercase text-sm tracking-wide"
              >
                Send a Print File
              </a>
              <a
                href="mailto:info@postandprint.com"
                className="bg-white text-[#003d6b] font-bold px-6 py-3 rounded text-center hover:bg-[#66bb6a] hover:text-white transition-colors uppercase text-sm tracking-wide"
              >
                Track a Package
              </a>
            </div>
          </div>

          {/* Middle Column - Store Info & Hours */}
          <div className="border-l border-r border-blue-400 px-8">
            {/* Status */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Open Now</h3>
              <p className="text-blue-100 text-sm">8:00 AM - 6:00 PM</p>
            </div>

            {/* Address */}
            <div className="mb-8">
              <p className="flex items-center gap-2 text-blue-100 mb-2">
                <span className="text-lg">📍</span>
                <span className="text-sm font-semibold">
                  10861 Cross Creek Blvd<br />
                  Tampa, FL 33647
                </span>
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <p className="flex items-center gap-2 text-blue-100 mb-2">
                <span className="text-lg">📞</span>
                <a
                  href="tel:8134019820"
                  className="text-lg font-bold text-white hover:text-[#66bb6a] transition-colors"
                >
                  (813) 401-9820
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="mb-8">
              <p className="flex items-center gap-2 text-blue-100 mb-2">
                <span className="text-lg">✉</span>
                <a
                  href="mailto:info@postandprint.com"
                  className="text-sm font-semibold text-white hover:text-[#66bb6a] transition-colors"
                >
                  info@postandprint.com
                </a>
              </p>
            </div>

            {/* Hours Table */}
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">Hours of Operation</h4>
              <table className="text-xs text-blue-100 space-y-1 w-full">
                <tbody>
                  <tr>
                    <td className="font-semibold pr-4">Mon</td>
                    <td>8:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pr-4">Tue</td>
                    <td>8:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pr-4">Wed</td>
                    <td>8:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pr-4">Thu</td>
                    <td>8:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pr-4">Fri</td>
                    <td>8:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pr-4">Sat</td>
                    <td>9:00 AM - 5:00 PM</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pr-4">Sun</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column - Map & Store Photo */}
          <div>
            {/* Map */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.1234567890123!2d-82.45678!3d28.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c1234567890%3A0x1234567890abcdef!2s10861%20Cross%20Creek%20Blvd%2C%20Tampa%2C%20FL%2033647!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height={200}
                style={{ border: 0 } as React.CSSProperties}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Store Photo */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/400x200?text=Post+%26+Print+Store"
                alt="Post & Print Store Front"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-400 bg-[#002a52] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-blue-200">
          <p>© {new Date().getFullYear()} Post & Print Tampa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#66bb6a] transition-colors">
              Privacy Policy
            </a>
            <a
              href="https://www.facebook.com/115616746488408"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#66bb6a] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
