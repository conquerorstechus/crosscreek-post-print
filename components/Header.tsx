"use client";

import { useState } from "react";

const printServices = [
  {
    column: [
      "3D Printing",
      "Business Cards",
      "Copies",
      "Envelopes",
      "Invitations",
      "Postcards",
      "Signs",
      "Vehicle Graphics",
    ],
  },
  {
    column: [
      "Banners",
      "Calendars",
      "Custom Greeting Cards",
      "Every Door Direct Mail",
      "Labels",
      "Posters",
      "Stationery",
      "Yard Signs",
    ],
  },
  {
    column: [
      "Blueprints",
      "Canvas Wraps",
      "Direct Mail",
      "Flyers",
      "Letterhead",
      "Presentation Materials",
      "Stickers",
    ],
  },
  {
    column: [
      "Brochures",
      "Carbonless Forms",
      "Door Hangers",
      "Forms",
      "Newsletters",
      "Promotional Products",
      "Trade Show Displays",
    ],
  },
];

const designServices = [
  "Graphic Design",
  "Branding",
  "Logo Design",
  "Marketing Materials",
  "Packaging Design",
  "Web Design",
];

const shipServices = [
  "UPS Shipping",
  "FedEx Shipping",
  "USPS",
  "DHL",
  "International Shipping",
  "Packaging Services",
];

const moreServices = [
  "Binding",
  "Laminating",
  "Mailbox Rental",
  "Notary Public",
  "Scanning Services",
  "Passport Photos",
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png.png" alt="Post & Print Logo" className="h-15" />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-700">
          {/* Design Menu */}
          <div className="relative group">
            <button
              onMouseEnter={() => setOpenMenu("design")}
              onMouseLeave={() => setOpenMenu(null)}
              className="px-4 py-2 rounded hover:text-[#003d6b] transition-colors flex items-center gap-1"
            >
              Design
              <span className="text-xs">▼</span>
            </button>
            {openMenu === "design" && (
              <div
                onMouseEnter={() => setOpenMenu("design")}
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4"
              >
                <h3 className="font-bold text-[#003d6b] mb-3 text-sm">Design Services</h3>
                <ul className="space-y-2">
                  {designServices.map((service) => (
                    <li key={service}>
                      <a
                        href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-gray-700 hover:text-[#66bb6a] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#66bb6a]" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Print Menu */}
          <div className="relative group">
            <button
              onMouseEnter={() => setOpenMenu("print")}
              onMouseLeave={() => setOpenMenu(null)}
              className="px-4 py-2 rounded hover:text-[#003d6b] transition-colors flex items-center gap-1"
            >
              Print
              <span className="text-xs">▼</span>
            </button>
            {openMenu === "print" && (
              <div
                onMouseEnter={() => setOpenMenu("print")}
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute left-0 mt-0 w-[800px] bg-white border border-gray-200 rounded-lg shadow-lg p-6"
              >
                <h3 className="font-bold text-[#003d6b] mb-4 text-sm">Print Services</h3>
                <div className="grid grid-cols-4 gap-4">
                  {printServices.map((section, idx) => (
                    <div key={idx}>
                      <ul className="space-y-2">
                        {section.column.map((service) => (
                          <li key={service}>
                            <a
                              href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                              className="text-xs text-gray-700 hover:text-[#66bb6a] flex items-start gap-2 leading-snug"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#66bb6a] mt-1 shrink-0" />
                              <span>{service}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Ship Menu */}
          <div className="relative group">
            <button
              onMouseEnter={() => setOpenMenu("ship")}
              onMouseLeave={() => setOpenMenu(null)}
              className="px-4 py-2 rounded hover:text-[#003d6b] transition-colors flex items-center gap-1"
            >
              Ship
              <span className="text-xs">▼</span>
            </button>
            {openMenu === "ship" && (
              <div
                onMouseEnter={() => setOpenMenu("ship")}
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4"
              >
                <h3 className="font-bold text-[#003d6b] mb-3 text-sm">Shipping Services</h3>
                <ul className="space-y-2">
                  {shipServices.map((service) => (
                    <li key={service}>
                      <a
                        href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-gray-700 hover:text-[#66bb6a] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#66bb6a]" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* More Menu */}
          <div className="relative group">
            <button
              onMouseEnter={() => setOpenMenu("more")}
              onMouseLeave={() => setOpenMenu(null)}
              className="px-4 py-2 rounded hover:text-[#003d6b] transition-colors flex items-center gap-1"
            >
              More
              <span className="text-xs">▼</span>
            </button>
            {openMenu === "more" && (
              <div
                onMouseEnter={() => setOpenMenu("more")}
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4"
              >
                <h3 className="font-bold text-[#003d6b] mb-3 text-sm">More Services</h3>
                <ul className="space-y-2">
                  {moreServices.map((service) => (
                    <li key={service}>
                      <a
                        href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-gray-700 hover:text-[#66bb6a] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#66bb6a]" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a href="/#location" className="px-4 py-2 rounded hover:text-[#003d6b] transition-colors">
            Location
          </a>
          <a href="/estimate" className="px-4 py-2 rounded hover:text-[#003d6b] transition-colors">
            Get Estimate
          </a>
          <a href="/contact" className="px-4 py-2 rounded hover:text-[#003d6b] transition-colors">
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
