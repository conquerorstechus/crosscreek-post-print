"use client";

const services = [
  {
    id: "digital-printing",
    title: "Digital Printing",
    description:
      "High-quality digital printing for all your business needs, from business cards to large format prints.",
    icon: "🖨️",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
  },
  {
    id: "custom-design",
    title: "Custom Design",
    description:
      "Professional design services to bring your vision to life with stunning graphics and layouts.",
    icon: "🎨",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=350&fit=crop",
  },
  {
    id: "shipping",
    title: "Shipping Services",
    description:
      "UPS, FedEx, and USPS shipping solutions. Pack & ship, mailbox services, and freight shipping available.",
    icon: "🚚",
    image: "https://images.unsplash.com/photo-1578622746212-335121b76e3d?w=500&h=350&fit=crop",
  },
  {
    id: "document-services",
    title: "Document Services",
    description:
      "Binding, laminating, copying, and finishing services for your business documents.",
    icon: "📋",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba6d35b?w=500&h=350&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive printing and signage solutions tailored to your business needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 text-center">
                {/* Icon */}
                <div className="text-4xl mb-4 flex justify-center">
                  <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>

                {/* CTA Button */}
                <a
                  href="mailto:fl178@postnet.com"
                  className="inline-block mt-4 text-sm font-semibold text-[#003d6b] hover:text-[#66bb6a] transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
