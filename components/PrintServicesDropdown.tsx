"use client";

import { useState } from "react";
import Link from "next/link";

const printServices = [
  "3D Printing",
  "Business Cards",
  "Copies",
  "Envelopes",
  "Invitations",
  "Postcards",
  "Signs",
  "Vehicle Graphics",
  "Banners",
  "Calendars",
  "Custom Greeting Cards",
  "Every Door Direct Mail",
  "Labels",
  "Posters",
  "Stationery",
  "Yard Signs",
  "Blueprints",
  "Canvas Wraps",
  "Direct Mail",
  "Flyers",
  "Letterhead",
  "Presentation Materials",
  "Stickers",
  "Brochures",
  "Carbonless Forms",
  "Door Hangers",
  "Forms",
  "Newsletters",
  "Promotional Products",
  "Trade Show Displays",
];

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
};

export default function PrintServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-[#003d6b] transition-colors flex items-center gap-1"
      >
        Print
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-screen max-w-4xl bg-white border border-gray-200 rounded-lg shadow-xl z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Full-service printing for every need
            </h3>

            <div className="grid grid-cols-4 gap-6">
              {printServices.map((service) => (
                <Link
                  key={service}
                  href={`/print/${slugify(service)}`}
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#003d6b] transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-2 h-2 rounded-full bg-[#66bb6a] group-hover:scale-125 transition-transform" />
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
