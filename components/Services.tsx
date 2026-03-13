"use client";

import { useState } from "react";

const featuredServices = [

  {
    id: "print",
    title: "Digital Printing",
    icon: "🖨️",
    description: "High-quality digital printing for all your business needs, from business cards to large format prints.",
    image: "/service-digital-printing.jpg",
  },
  {
    id: "ship",
    title: "Shipping Services",
    icon: "🚚",
    description: "UPS, FedEx, and USPS shipping solutions. Pack & ship, mailbox services, and freight shipping available.",
    image: "/service-shipping.jpg",
  },
  {
    id: "doc",
    title: "Document Services",
    icon: "📦",
    description: "Binding, laminating, copying, and finishing services for your business documents.",
    image: "/service-document.jpg",
  },
];

const serviceCategories = [
  {
    id: "design",
    label: "Design",
    icon: "✏️",
    description: "Custom graphic design tailored to your brand.",
    items: ["Graphic Design", "Menu Printing", "Presentation Materials"],
  },
  {
    id: "print",
    label: "Print",
    icon: "🖨️",
    description: "Full-service printing for every need.",
    items: [
      "3D Printing",
      "Banners",
      "Blueprints",
      "Brochures",
      "Business Cards",
      "Calendars",
      "Canvas Wraps",
      "Carbonless Forms",
      "Copies",
      "Custom Greeting Cards",
      "Direct Mail",
      "Door Hangers",
      "Envelopes",
      "Every Door Direct Mail",
      "Flyers",
      "Forms",
      "Invitations",
      "Labels",
      "Letterhead",
      "Newsletters",
      "Postcards",
      "Posters",
      "Presentation Materials",
      "Promotional Products",
      "Signs",
      "Stationery",
      "Stickers",
      "Trade Show Displays",
      "Vehicle Graphics",
      "Yard Signs",
    ],
  },
  {
    id: "ship",
    label: "Ship",
    icon: "📦",
    description: "Ship with all major carriers — we pack it for you.",
    items: [
      "DHL Drop Offs",
      "DHL Shipping",
      "FedEx Drop Offs",
      "FedEx Shipping",
      "International Shipping",
      "Packaging Services",
      "Packaging Supplies",
      "UPS Drop Offs",
      "UPS Shipping",
      "US Postal Service",
    ],
  },
  {
    id: "etc",
    label: "More",
    icon: "⚙️",
    description: "Extra business support services.",
    items: [
      "Binding",
      "Computer Rental",
      "Fax",
      "Laminating",
      "Mailbox Rental",
      "Notary Public",
      "Passport Photos",
      "Scanning Services",
      "Shredding Services",
      "Virtual Mailbox Rental",
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("print");

  const active = serviceCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive printing and signage solutions tailored to your business needs
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Service Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Icon */}
                <div className="text-3xl mb-3 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 flex-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Services Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore All Services</h3>

          {/* Tab bar */}
          <div className="flex gap-2 flex-wrap mb-8">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === cat.id
                    ? "bg-[#003d6b] text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#003d6b] hover:text-[#003d6b]"
                  }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* Service list */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 md:p-8">
            <p className="text-gray-600 text-sm mb-6 font-medium">{active.description}</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {active.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#66bb6a] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
