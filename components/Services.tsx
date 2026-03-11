"use client";

import { useState } from "react";

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
    <section id="services" className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Our Services</h2>
        <p className="text-gray-500 mb-8">
          Everything your business needs — design, print, ship, and more.
        </p>

        {/* Tab bar */}
        <div className="flex gap-2 flex-wrap mb-8">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === cat.id
                  ? "bg-[#003d6b] text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-[#003d6b] hover:text-[#003d6b]"
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Service list */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
          <p className="text-gray-500 text-sm mb-5">{active.description}</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {active.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#66bb6a] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
