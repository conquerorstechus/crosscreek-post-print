"use client";

import { useState } from "react";

const designServices = [
  { name: "Graphic Design", url: "/design/graphic-design" },
  { name: "Branding", url: "/design/branding" },
  { name: "Logo Design", url: "/design/logo-design" },
  { name: "Marketing Materials", url: "/design/marketing-materials" },
  { name: "Packaging Design", url: "/design/packaging-design" },
  { name: "Web Design", url: "/design/web-design" },
];

const printServices = [
  {
    column: [
      { name: "3D Printing", url: "/print/3d-printing" },
      { name: "Business Cards", url: "/print/business-cards" },
      { name: "Copies", url: "/print/copies" },
      { name: "Envelopes", url: "/print/envelopes" },
      { name: "Invitations", url: "/print/invitations" },
      { name: "Postcards", url: "/print/postcards" },
      { name: "Signs", url: "/print/signs" },
      { name: "Vehicle Graphics", url: "/print/vehicle-graphics" },
    ],
  },
  {
    column: [
      { name: "Banners", url: "/print/banners" },
      { name: "Calendars", url: "/print/calendars" },
      { name: "Custom Greeting Cards", url: "/print/custom-greeting-cards" },
      { name: "Every Door Direct Mail", url: "/print/every-door-direct-mail" },
      { name: "Labels", url: "/print/labels" },
      { name: "Posters", url: "/print/posters" },
      { name: "Stationery", url: "/print/stationery" },
      { name: "Yard Signs", url: "/print/yard-signs" },
    ],
  },
  {
    column: [
      { name: "Blueprints", url: "/print/blueprints" },
      { name: "Canvas Wraps", url: "/print/canvas-wraps" },
      { name: "Direct Mail", url: "/print/direct-mail" },
      { name: "Flyers", url: "/print/flyers" },
      { name: "Letterhead", url: "/print/letterhead" },
      { name: "Presentation Materials", url: "/print/presentation-materials" },
      { name: "Stickers", url: "/print/stickers" },
    ],
  },
  {
    column: [
      { name: "Brochures", url: "/print/brochures" },
      { name: "Carbonless Forms", url: "/print/carbonless-forms" },
      { name: "Door Hangers", url: "/print/door-hangers" },
      { name: "Forms", url: "/print/forms" },
      { name: "Newsletters", url: "/print/newsletters" },
      { name: "Promotional Products", url: "/print/promotional-products" },
      { name: "Trade Show Displays", url: "/print/trade-show-displays" },
    ],
  },
];

const shipServices = [
  { name: "UPS Shipping", url: "/ship/ups-shipping" },
  { name: "FedEx Shipping", url: "/ship/fedex-shipping" },
  { name: "USPS", url: "/ship/usps" },
  { name: "DHL", url: "/ship/dhl" },
  { name: "International Shipping", url: "/ship/international-shipping" },
  { name: "Packaging Services", url: "/ship/packaging-services" },
];

const moreServices = [
  { name: "Binding", url: "/services/binding" },
  { name: "Laminating", url: "/services/laminating" },
  { name: "Mailbox Rental", url: "/services/mailbox-rental" },
  { name: "Notary Public", url: "/services/notary-public" },
  { name: "Scanning Services", url: "/services/scanning-services" },
  { name: "Passport Photos", url: "/services/passport-photos" },
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
                    <li key={service.url}>
                      <a
                        href={service.url}
                        className="text-sm text-gray-700 hover:text-[#66bb6a] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#66bb6a]" />
                        {service.name}
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
                          <li key={service.url}>
                            <a
                              href={service.url}
                              className="text-xs text-gray-700 hover:text-[#66bb6a] flex items-start gap-2 leading-snug"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#66bb6a] mt-1 shrink-0" />
                              <span>{service.name}</span>
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
                    <li key={service.url}>
                      <a
                        href={service.url}
                        className="text-sm text-gray-700 hover:text-[#66bb6a] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#66bb6a]" />
                        {service.name}
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
                    <li key={service.url}>
                      <a
                        href={service.url}
                        className="text-sm text-gray-700 hover:text-[#66bb6a] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#66bb6a]" />
                        {service.name}
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
