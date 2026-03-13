'use client';

import { useState } from 'react';
import Link from 'next/link';

const printServices = [
  { label: 'B&W and Color Copies', slug: 'copies' },
  { label: 'Blueprints', slug: 'blueprints' },
  { label: 'Brochures', slug: 'brochures' },
  { label: 'Business Cards', slug: 'business-cards' },
  { label: 'Calendars', slug: 'calendars' },
  { label: 'Canvas Prints and Wraps', slug: 'canvas-prints' },
  { label: 'Custom Labels and Stickers', slug: 'labels-stickers' },
  { label: 'Direct Mail Printing and Mailing', slug: 'direct-mail' },
  { label: 'Door Hangers', slug: 'door-hangers' },
  { label: 'Flyers', slug: 'flyers' },
  { label: 'Invitations and Greeting Cards', slug: 'invitations' },
  { label: 'Large Format Signs and Banners', slug: 'banners' },
  { label: 'Letterhead', slug: 'letterhead' },
  { label: 'Newsletters', slug: 'newsletters' },
  { label: 'Postcards', slug: 'postcards' },
  { label: 'Posters', slug: 'posters' },
  { label: 'Promotional Products', slug: 'promotional-products' },
  { label: 'Stationery', slug: 'stationery' },
  { label: 'Tradeshow Displays and Signs', slug: 'tradeshow-displays' },
  { label: 'Yard Signs', slug: 'yard-signs' },
];

export default function PrintMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="hover:text-[#003d6b] transition-colors flex items-center gap-1"
      >
        Print
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Overlay to close menu when clicking outside */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mega Menu */}
          <div
            className="absolute left-0 top-full mt-0 w-screen max-w-6xl bg-white border-t-4 border-[#003d6b] shadow-2xl z-50 rounded-b-lg"
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="px-8 py-8">
              <div className="grid grid-cols-4 gap-6">
                {printServices.map((service, index) => (
                  <Link
                    key={index}
                    href={`/print/${service.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-gray-700 hover:text-[#003d6b] hover:underline transition-colors py-2"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
