import ServiceDetail from "@/components/ServiceDetail";

const serviceDetails: Record<string, any> = {
  "business-cards": {
    title: "Business Cards",
    description: "Professional business cards that make a lasting impression. Choose from various sizes, finishes, and materials.",
    sizes: ["3.5\" x 2\"", "3.5\" x 2.125\"", "2\" x 3.5\""],
    materials: ["100lb Gloss Cover", "110lb Matte Cover", "Cardstock", "Kraft Paper"],
    pricing: [
      { option: "250 Cards (Standard)", price: "$25-45" },
      { option: "500 Cards", price: "$35-65" },
      { option: "1000 Cards", price: "$55-95" },
    ],
    image: "/service-digital-printing.jpg",
  },
  "brochures": {
    title: "Brochures",
    description: "Eye-catching brochures to showcase your business. Tri-fold, bi-fold, and custom sizes available.",
    sizes: ["8.5\" x 11\" (Tri-fold)", "8.5\" x 14\" (Bi-fold)", "Custom sizes"],
    materials: ["100lb Gloss Cover", "110lb Matte Cover", "Text Weight", "Cardstock"],
    pricing: [
      { option: "100 Brochures", price: "$50-100" },
      { option: "250 Brochures", price: "$90-150" },
      { option: "500 Brochures", price: "$150-250" },
    ],
    image: "/service-digital-printing.jpg",
  },
  "flyers": {
    title: "Flyers",
    description: "Promote your business with high-quality flyers. Perfect for events, sales, and announcements.",
    sizes: ["8.5\" x 11\"", "5.5\" x 8.5\"", "4\" x 6\"", "3\" x 5\""],
    materials: ["24lb Uncoated", "80lb Gloss", "100lb Gloss Cover", "Cardstock"],
    pricing: [
      { option: "100 Flyers", price: "$20-35" },
      { option: "250 Flyers", price: "$35-60" },
      { option: "500 Flyers", price: "$55-95" },
    ],
    image: "/service-digital-printing.jpg",
  },
  "banners": {
    title: "Banners",
    description: "Large format banners for maximum visibility. Indoor and outdoor options with various materials.",
    sizes: ["2' x 4'", "3' x 6'", "4' x 8'", "Custom sizes available"],
    materials: ["Vinyl Banner", "Mesh Banner", "Canvas", "Fabric"],
    pricing: [
      { option: "2' x 4' Banner", price: "$35-60" },
      { option: "3' x 6' Banner", price: "$60-100" },
      { option: "4' x 8' Banner", price: "$100-150" },
    ],
    image: "/service-digital-printing.jpg",
  },
  "postcards": {
    title: "Postcards",
    description: "Cost-effective direct mail postcards. Perfect for marketing campaigns and announcements.",
    sizes: ["4\" x 6\"", "5\" x 7\"", "5\" x 8\""],
    materials: ["14pt Cardstock", "Glossy Finish", "Matte Finish"],
    pricing: [
      { option: "250 Postcards", price: "$25-45" },
      { option: "500 Postcards", price: "$40-70" },
      { option: "1000 Postcards", price: "$70-120" },
    ],
    image: "/service-digital-printing.jpg",
  },
  "letterhead": {
    title: "Letterhead",
    description: "Professional letterhead printing for your business correspondence.",
    sizes: ["8.5\" x 11\" (Standard)", "8.5\" x 14\" (Legal)"],
    materials: ["24lb Bond", "28lb Bond", "32lb Bond"],
    pricing: [
      { option: "250 Sheets", price: "$30-50" },
      { option: "500 Sheets", price: "$50-80" },
      { option: "1000 Sheets", price: "$80-130" },
    ],
    image: "/service-digital-printing.jpg",
  },
  "envelopes": {
    title: "Envelopes",
    description: "Custom printed envelopes for professional mailing.",
    sizes: ["#10 (4.125\" x 9.5\")", "#9 (3.875\" x 8.875\")", "#6 (3.625\" x 6.5\")"],
    materials: ["24lb Bond", "28lb Bond", "White", "Kraft"],
    pricing: [
      { option: "250 Envelopes", price: "$20-35" },
      { option: "500 Envelopes", price: "$35-60" },
      { option: "1000 Envelopes", price: "$60-100" },
    ],
    image: "/service-digital-printing.jpg",
  },
  "labels": {
    title: "Labels",
    description: "Custom labels for products, shipping, and branding.",
    sizes: ["1\" x 1\"", "2\" x 2\"", "4\" x 6\"", "Custom sizes"],
    materials: ["Glossy", "Matte", "Metallic", "Clear"],
    pricing: [
      { option: "100 Labels", price: "$15-30" },
      { option: "500 Labels", price: "$40-70" },
      { option: "1000 Labels", price: "$70-120" },
    ],
    image: "/service-digital-printing.jpg",
  },
  "signs": {
    title: "Signs",
    description: "Professional signage for your business. Indoor and outdoor options.",
    sizes: ["12\" x 18\"", "18\" x 24\"", "24\" x 36\"", "Custom sizes"],
    materials: ["Coroplast", "Vinyl", "PVC", "Metal"],
    pricing: [
      { option: "Single Sided (10)", price: "$50-100" },
      { option: "Double Sided (10)", price: "$80-150" },
      { option: "Large Format", price: "Call for quote" },
    ],
    image: "/service-digital-printing.jpg",
  },
  "posters": {
    title: "Posters",
    description: "Eye-catching posters for events, promotions, and decoration.",
    sizes: ["11\" x 17\"", "18\" x 24\"", "24\" x 36\""],
    materials: ["Gloss Paper", "Matte Paper", "Premium Poster Stock"],
    pricing: [
      { option: "10 Posters", price: "$25-50" },
      { option: "25 Posters", price: "$50-100" },
      { option: "50 Posters", price: "$90-180" },
    ],
    image: "/service-digital-printing.jpg",
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug];

  if (!service) {
    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the service you're looking for.
          </p>
          <a
            href="/#services"
            className="inline-block bg-[#003d6b] text-white font-semibold px-6 py-3 rounded hover:bg-[#66bb6a] transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    );
  }

  return <ServiceDetail {...service} />;
}
