const featured = [
  {
    title: "Business Cards",
    description:
      "Make a lasting first impression with professionally printed business cards. Choose from a variety of finishes, sizes, and paper stocks.",
    cta: "Get a Quote",
  },
  {
    title: "Banners & Signs",
    description:
      "High-impact banners and signs for events, storefronts, trade shows, and more. Full color, any size.",
    cta: "Get a Quote",
  },
  {
    title: "Shipping Services",
    description:
      "Ship with UPS, FedEx, DHL, or USPS from one convenient location. We'll pack it securely so it arrives safely.",
    cta: "Ship Now",
  },
  {
    title: "Notary Public",
    description:
      "Need documents notarized? Our certified notary public is available during business hours — no appointment needed.",
    cta: "Learn More",
  },
  {
    title: "Direct Mail",
    description:
      "Reach your target audience with Every Door Direct Mail campaigns. We design, print, and mail for you.",
    cta: "Get a Quote",
  },
  {
    title: "Mailbox Rental",
    description:
      "Get a professional business address with a real street address, not a P.O. Box. Virtual mailbox options also available.",
    cta: "Learn More",
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-white py-14 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Featured Services</h2>
        <p className="text-gray-500 mb-10">
          Locally owned and focused on exceptional customer service.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-xl p-6 flex flex-col gap-3 hover:border-[#003d6b] hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600 flex-1">{service.description}</p>
              <a
                href="mailto:info@postandprint.com"
                className="text-sm font-semibold text-[#003d6b] hover:text-[#66bb6a] transition-colors self-start"
              >
                {service.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
