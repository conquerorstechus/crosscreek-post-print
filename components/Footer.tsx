export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="md:col-span-3 mb-4">
            <img src="/logo-full.png" alt="Post & Print Logo" className="h-16 w-auto object-contain" />
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#003d6b] font-bold mb-6">
              Quick Actions
            </h3>
            <div className="space-y-3 flex flex-col">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=10861+Cross+Creek+Blvd,+Tampa,+FL+33647"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#66bb6a] transition-colors py-2"
              >
                <span className="text-lg">📍</span>
                <span>Get Directions</span>
              </a>
              <a
                href="mailto:info@postandprint.com"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#66bb6a] transition-colors py-2"
              >
                <span className="text-lg">📄</span>
                <span>Get a Quote</span>
              </a>
              <a
                href="mailto:info@postandprint.com"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#66bb6a] transition-colors py-2"
              >
                <span className="text-lg">📤</span>
                <span>Send a File</span>
              </a>
              <a
                href="mailto:info@postandprint.com"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#66bb6a] transition-colors py-2"
              >
                <span className="text-lg">📦</span>
                <span>Track Package</span>
              </a>
            </div>
          </div>

          {/* Store Details */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#003d6b] font-bold mb-6">
              Store Details
            </h3>

            {/* Address */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-[#003d6b] font-semibold mb-2">
                Address
              </h4>
              <address className="not-italic text-sm text-gray-700 leading-relaxed">
                10861 Cross Creek Blvd
                <br />
                Tampa, FL 33647
              </address>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-[#003d6b] font-semibold mb-2">
                Phone
              </h4>
              <p className="text-sm">
                <a
                  href="tel:8134019820"
                  className="text-gray-700 hover:text-[#66bb6a] transition-colors font-semibold"
                >
                  (813) 401-9820
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-[#003d6b] font-semibold mb-2">
                Email
              </h4>
              <p className="text-sm">
                <a
                  href="mailto:info@postandprint.com"
                  className="text-gray-700 hover:text-[#66bb6a] transition-colors"
                >
                  info@postandprint.com
                </a>
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#003d6b] font-semibold mb-2">
                Hours
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Mon - Fri: 8AM - 6PM</li>
                <li>Saturday: 9AM - 5PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#003d6b] font-bold mb-6">
              Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.1234567890123!2d-82.45678!3d28.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c1234567890%3A0x1234567890abcdef!2s10861%20Cross%20Creek%20Blvd%2C%20Tampa%2C%20FL%2033647!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height={250}
              style={{ border: 0, borderRadius: "0.5rem" } as React.CSSProperties}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Post & Print Tampa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#003d6b] transition-colors">
              Privacy Policy
            </a>
            <a
              href="https://www.facebook.com/115616746488408"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#003d6b] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
