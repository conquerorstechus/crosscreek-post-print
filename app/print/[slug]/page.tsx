import Link from "next/link";
import { notFound } from "next/navigation";

const serviceDescriptions: Record<string, { title: string; description: string }> = {
  "3d-printing": {
    title: "3D Printing",
    description: "High-quality 3D printing services for prototypes, models, and custom parts. Perfect for businesses and creative projects.",
  },
  "business-cards": {
    title: "Business Cards",
    description: "Professional business cards that make a lasting impression. Choose from various finishes and materials to represent your brand.",
  },
  copies: {
    title: "Copies",
    description: "Fast and reliable copying services for all your document needs. High-quality output with quick turnaround times.",
  },
  envelopes: {
    title: "Envelopes",
    description: "Custom envelopes for mailings, events, and correspondence. Available in multiple sizes and finishes.",
  },
  invitations: {
    title: "Invitations",
    description: "Elegant custom invitations for weddings, events, and celebrations. Create a memorable first impression.",
  },
  postcards: {
    title: "Postcards",
    description: "Eye-catching postcards for direct mail campaigns and special events. Perfect for marketing and announcements.",
  },
  signs: {
    title: "Signs",
    description: "Custom signs for retail, offices, and events. Durable, professional solutions to showcase your business.",
  },
  "vehicle-graphics": {
    title: "Vehicle Graphics",
    description: "Transform your vehicles into mobile billboards with custom vehicle wraps and graphics. Increase brand visibility.",
  },
  banners: {
    title: "Banners",
    description: "Large format banners for events, promotions, and displays. Weather-resistant and attention-grabbing.",
  },
  calendars: {
    title: "Calendars",
    description: "Personalized calendars for business promotion or personal use. High-quality printing on premium stock.",
  },
  "custom-greeting-cards": {
    title: "Custom Greeting Cards",
    description: "Personalized greeting cards for every occasion. Add your photos, messages, and custom designs.",
  },
  "every-door-direct-mail": {
    title: "Every Door Direct Mail",
    description: "Cost-effective direct mail service reaching every door in targeted areas. Maximize marketing reach.",
  },
  labels: {
    title: "Labels",
    description: "Professional labels for products, shipping, and organization. Custom sizes, shapes, and finishes.",
  },
  posters: {
    title: "Posters",
    description: "Eye-catching posters for events, promotions, and displays. Available in various sizes and materials.",
  },
  stationery: {
    title: "Stationery",
    description: "Professional stationery sets including letterhead, envelopes, and notepads. Build brand consistency.",
  },
  "yard-signs": {
    title: "Yard Signs",
    description: "Durable yard signs perfect for real estate, events, and advertising. Weather-resistant outdoor printing.",
  },
  blueprints: {
    title: "Blueprints",
    description: "High-quality blueprint printing for architectural and engineering documents. Fast service with accurate reproduction.",
  },
  "canvas-wraps": {
    title: "Canvas Wraps",
    description: "Professional canvas printing for photos and artwork. Gallery-quality results for home or office.",
  },
  "direct-mail": {
    title: "Direct Mail",
    description: "Targeted direct mail campaigns with custom printing and design. Effective marketing at scale.",
  },
  flyers: {
    title: "Flyers",
    description: "Professional flyers to promote events, products, and services. Eye-catching designs and quality printing.",
  },
  letterhead: {
    title: "Letterhead",
    description: "Custom letterhead that reflects your professional image. Perfect for corporate correspondence.",
  },
  "presentation-materials": {
    title: "Presentation Materials",
    description: "Professional presentation folders, binders, and materials. Impress clients with quality printed collateral.",
  },
  stickers: {
    title: "Stickers",
    description: "Custom stickers for branding, labeling, and promotion. Various sizes, shapes, and finishes available.",
  },
  brochures: {
    title: "Brochures",
    description: "Professional brochures showcasing your products and services. Available in folded and flat formats.",
  },
  "carbonless-forms": {
    title: "Carbonless Forms",
    description: "Multi-part carbonless forms for invoices, receipts, and orders. Efficient business documentation.",
  },
  "door-hangers": {
    title: "Door Hangers",
    description: "Effective door hangers for local advertising and promotions. Attention-grabbing designs.",
  },
  forms: {
    title: "Forms",
    description: "Custom forms for business processes, surveys, and documentation. Quality printing on durable stock.",
  },
  newsletters: {
    title: "Newsletters",
    description: "Professional newsletters to communicate with customers and clients. Engaging content and quality design.",
  },
  "promotional-products": {
    title: "Promotional Products",
    description: "Custom branded promotional products to boost customer loyalty and brand awareness.",
  },
  "trade-show-displays": {
    title: "Trade Show Displays",
    description: "Eye-catching trade show displays and booth materials. Professional presentations that attract attention.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PrintServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceDescriptions[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#003d6b] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/#services"
            className="text-[#66bb6a] hover:text-white transition-colors text-sm mb-4 inline-block"
          >
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-gray-200">{service.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Professional {service.title} Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Post & Print Tampa, we provide high-quality {service.title.toLowerCase()} services tailored to your specific needs. Our experienced team ensures every project meets the highest standards of quality and professionalism.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/quote"
                  className="bg-[#003d6b] text-white font-semibold px-6 py-3 rounded hover:bg-[#66bb6a] transition-colors"
                >
                  Get a Print Quote
                </a>
                <a
                  href="/send-files"
                  className="bg-[#66bb6a] text-[#003d6b] font-semibold px-6 py-3 rounded hover:bg-[#20b2aa] hover:text-white transition-colors"
                >
                  Send Print Files
                </a>
              </div>
            </div>

            {/* Placeholder Image */}
            <div className="bg-gradient-to-br from-[#003d6b] to-[#66bb6a] rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🖨️</div>
                <p className="text-lg">{service.title}</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Post & Print Tampa?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-[#003d6b] mb-2">Quality Guaranteed</h4>
                <p className="text-gray-600 text-sm">We use state-of-the-art equipment and premium materials for outstanding results.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#003d6b] mb-2">Fast Turnaround</h4>
                <p className="text-gray-600 text-sm">Quick delivery without compromising on quality. Rush services available.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#003d6b] mb-2">Expert Support</h4>
                <p className="text-gray-600 text-sm">Our team provides guidance on design, materials, and best practices.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#003d6b] text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">Contact us today to discuss your {service.title.toLowerCase()} needs.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:8134019820"
                className="bg-[#66bb6a] text-[#003d6b] font-semibold px-6 py-3 rounded hover:bg-white transition-colors"
              >
                Call (813) 401-9820
              </a>
              <a
                href="mailto:info@postandprint.com"
                className="border-2 border-[#66bb6a] text-white font-semibold px-6 py-3 rounded hover:bg-[#66bb6a] hover:text-[#003d6b] transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
