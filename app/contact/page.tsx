import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - Post & Print Tampa",
  description: "Get in touch with Post & Print Tampa. We're here to help with all your printing and shipping needs.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#003d6b] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Get in Touch</h1>
          <p className="text-lg text-blue-100">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-[#003d6b]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-[#66bb6a] font-bold mb-3">
                  Address
                </h3>
                <address className="not-italic text-blue-100 leading-relaxed">
                  10861 Cross Creek Blvd
                  <br />
                  Tampa, FL 33647
                </address>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=10861+Cross+Creek+Blvd,+Tampa,+FL+33647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-[#66bb6a] font-semibold hover:text-white transition-colors"
                >
                  Get Directions →
                </a>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-[#66bb6a] font-bold mb-3">
                  Phone
                </h3>
                <p className="text-blue-100">
                  <a
                    href="tel:8134019820"
                    className="text-lg font-semibold text-white hover:text-[#66bb6a] transition-colors"
                  >
                    (813) 401-9820
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-[#66bb6a] font-bold mb-3">
                  Email
                </h3>
                <p className="text-blue-100">
                  <a
                    href="mailto:info@postandprint.com"
                    className="text-white hover:text-[#66bb6a] transition-colors"
                  >
                    info@postandprint.com
                  </a>
                </p>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[#66bb6a] font-bold mb-3">
                  Hours
                </h3>
                <ul className="space-y-1 text-blue-100">
                  <li>
                    <strong>Mon - Fri:</strong> 8AM - 6PM
                  </li>
                  <li>
                    <strong>Saturday:</strong> 9AM - 5PM
                  </li>
                  <li>
                    <strong>Sunday:</strong> Closed
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services CTA */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Our Services?</h2>
          <p className="text-gray-600 mb-6">
            Explore our comprehensive printing, design, and shipping solutions.
          </p>
          <a
            href="/#services"
            className="inline-block bg-[#003d6b] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#66bb6a] hover:text-[#003d6b] transition-colors"
          >
            View All Services
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
