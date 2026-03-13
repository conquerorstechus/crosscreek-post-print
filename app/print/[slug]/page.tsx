'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const printServiceData: { [key: string]: { title: string; description: string; details: string[] } } = {
  copies: {
    title: 'B&W and Color Copies',
    description: 'High-quality black and white or color copies for all your business needs. Fast turnaround times and competitive pricing.',
    details: ['Professional quality', 'Quick turnaround', 'Various paper sizes', 'Volume discounts available'],
  },
  blueprints: {
    title: 'Blueprints',
    description: 'Large format technical drawings and blueprints printed on archival-quality paper for architecture and construction projects.',
    details: ['Archival quality', 'Large format', 'Durable paper stock', 'Perfect for technical drawings'],
  },
  brochures: {
    title: 'Brochures',
    description: 'Professional tri-fold and multi-page brochures to showcase your business. Custom sizes and finishes available.',
    details: ['Custom sizes', 'Professional finish', 'High-quality color', 'Multiple folding options'],
  },
  'business-cards': {
    title: 'Business Cards',
    description: 'Make a lasting impression with professionally printed business cards. Design assistance available.',
    details: ['Premium cardstock', 'Custom designs', 'Various finishes', 'Bulk discounts'],
  },
  calendars: {
    title: 'Calendars',
    description: 'Custom desk calendars and wall calendars featuring your company branding or custom photos.',
    details: ['Custom designs', 'Desk or wall mounted', 'Promotional item', 'Monthly or yearly options'],
  },
  'canvas-prints': {
    title: 'Canvas Prints and Wraps',
    description: 'Transform your favorite images into beautiful canvas prints. Perfect for office décor or retail displays.',
    details: ['Museum-quality', 'Custom sizing', 'Multiple frame options', 'UV-resistant inks'],
  },
  'labels-stickers': {
    title: 'Custom Labels and Stickers',
    description: 'Custom-shaped labels and stickers for product branding, packaging, and promotional use.',
    details: ['Custom shapes', 'Weather-resistant', 'Multiple materials', 'Adhesive options'],
  },
  'direct-mail': {
    title: 'Direct Mail Printing and Mailing',
    description: 'Complete direct mail solutions including design, printing, and mailing to targeted audiences.',
    details: ['Design services', 'USPS coordination', 'Targeted mailing', 'Campaign tracking'],
  },
  'door-hangers': {
    title: 'Door Hangers',
    description: 'Eye-catching door hangers for local marketing and promotional campaigns.',
    details: ['Durable materials', 'Custom designs', 'Full color printing', 'Local delivery ready'],
  },
  flyers: {
    title: 'Flyers',
    description: 'Professional flyers in various sizes to promote your business, events, or special offers.',
    details: ['Custom sizes', 'Full color', 'Glossy or matte', 'Fast turnaround'],
  },
  invitations: {
    title: 'Invitations and Greeting Cards',
    description: 'Custom invitations and greeting cards for weddings, events, and special occasions.',
    details: ['Premium paper', 'Custom designs', 'Embossing available', 'Personalization options'],
  },
  banners: {
    title: 'Large Format Signs and Banners',
    description: 'Eye-catching large format prints for trade shows, events, and storefront displays.',
    details: ['Multiple materials', 'Custom sizing', 'Quick turnaround', 'Installation assistance'],
  },
  letterhead: {
    title: 'Letterhead',
    description: 'Professional letterhead printing to establish your business identity and credibility.',
    details: ['Custom branding', 'Premium paper', 'Matching envelopes', 'Various sizes'],
  },
  newsletters: {
    title: 'Newsletters',
    description: 'Professional newsletter design and printing to keep your customers informed and engaged.',
    details: ['Design services', 'Custom layouts', 'Multiple sizes', 'Mailing coordination'],
  },
  postcards: {
    title: 'Postcards',
    description: 'Marketing postcards for direct mail campaigns, events, or announcements.',
    details: ['Standard sizes', 'Full color', 'Personalization', 'USPS compliance'],
  },
  posters: {
    title: 'Posters',
    description: 'Vibrant posters for event promotion, retail displays, and marketing campaigns.',
    details: ['Large format', 'Various sizes', 'Full color printing', 'Lamination available'],
  },
  'promotional-products': {
    title: 'Promotional Products',
    description: 'Custom branded promotional products including pens, mugs, t-shirts, and more.',
    details: ['Multiple product types', 'Bulk pricing', 'Custom branding', 'Corporate gifts'],
  },
  stationery: {
    title: 'Stationery',
    description: 'Complete stationery sets including letterhead, envelopes, and business cards with matching designs.',
    details: ['Coordinated designs', 'Premium paper', 'Professional appearance', 'Bulk options'],
  },
  'tradeshow-displays': {
    title: 'Tradeshow Displays and Signs',
    description: 'Professional tradeshow displays, booth graphics, and signage to attract attention.',
    details: ['Professional design', 'Durable materials', 'Easy setup', 'Multiple sizes'],
  },
  'yard-signs': {
    title: 'Yard Signs',
    description: 'Durable outdoor yard signs for real estate, event promotion, and business advertising.',
    details: ['Weather-resistant', 'Coroplast material', 'Custom designs', 'Stakes included'],
  },
};

export default function PrintServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = printServiceData[slug] || printServiceData.copies;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#003d6b] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/#services" className="text-[#66bb6a] hover:underline text-sm mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-blue-100">{service.description}</p>
        </div>
      </section>

      {/* Service Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Features</h2>
            <ul className="space-y-3">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#66bb6a] text-xl mt-1">✓</span>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Link
                href="/quote"
                className="bg-[#003d6b] text-white font-semibold px-8 py-3 rounded hover:bg-[#66bb6a] transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/send-files"
                className="bg-[#66bb6a] text-[#003d6b] font-semibold px-8 py-3 rounded hover:bg-[#003d6b] hover:text-white transition-colors"
              >
                Send Print Files
              </Link>
            </div>
          </div>

          {/* Placeholder Image */}
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🖨️</div>
              <p className="text-gray-600">{service.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Print Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/print/business-cards"
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-[#003d6b] transition-all"
            >
              <p className="font-semibold text-[#003d6b] hover:underline">Business Cards</p>
            </Link>
            <Link
              href="/print/flyers"
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-[#003d6b] transition-all"
            >
              <p className="font-semibold text-[#003d6b] hover:underline">Flyers</p>
            </Link>
            <Link
              href="/print/banners"
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-[#003d6b] transition-all"
            >
              <p className="font-semibold text-[#003d6b] hover:underline">Banners</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#003d6b] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us today for a free quote on your print project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-[#66bb6a] text-[#003d6b] font-semibold px-8 py-3 rounded hover:bg-white transition-colors"
            >
              Request Quote
            </Link>
            <a
              href="tel:8134019820"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded hover:bg-white hover:text-[#003d6b] transition-colors"
            >
              Call (813) 401-9820
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
