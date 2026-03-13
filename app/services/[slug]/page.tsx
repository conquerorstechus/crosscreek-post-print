import ServiceDetail from "@/components/ServiceDetail";

const serviceDetails: Record<string, any> = {
  "business-cards": {
    title: "Business Cards",
    description: "Professional business cards that make a lasting impression. Perfect for networking, trade shows, and client meetings. Choose from various sizes, finishes, and materials to match your brand.",
    sizes: ["3.5\" x 2\"", "3.5\" x 2.125\"", "2\" x 3.5\""],
    materials: ["100lb Gloss Cover", "110lb Matte Cover", "Cardstock", "Kraft Paper"],
    finishes: ["Gloss", "Matte", "Silk", "Spot UV", "Foil Stamping"],
    pricing: [
      { option: "250 Cards (Standard)", price: "$25-45" },
      { option: "500 Cards", price: "$35-65" },
      { option: "1000 Cards", price: "$55-95" },
      { option: "2500 Cards", price: "$95-150" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "What file format do you accept for business cards?",
        answer: "We accept PDF, AI, PSD, and TIFF files. Please ensure your design includes 0.25\" bleed on all sides."
      },
      {
        question: "How quickly can I get my business cards?",
        answer: "Standard turnaround is 5-7 business days. Rush orders available upon request."
      },
      {
        question: "Can you help design my business cards?",
        answer: "Yes! Our design team can help create custom business cards. Contact us for a design consultation."
      },
      {
        question: "Do you offer variable data printing?",
        answer: "Yes, we offer variable data printing for personalized business cards."
      },
    ],
  },
  "brochures": {
    title: "Brochures",
    description: "Eye-catching brochures to showcase your business. Tri-fold, bi-fold, and custom sizes available. Perfect for trade shows, direct mail, and customer information.",
    sizes: ["8.5\" x 11\" (Tri-fold)", "8.5\" x 14\" (Bi-fold)", "Custom sizes"],
    materials: ["100lb Gloss Cover", "110lb Matte Cover", "Text Weight", "Cardstock"],
    finishes: ["Gloss", "Matte", "Satin", "Embossing", "Die-cut"],
    pricing: [
      { option: "100 Brochures", price: "$50-100" },
      { option: "250 Brochures", price: "$90-150" },
      { option: "500 Brochures", price: "$150-250" },
      { option: "1000+ Brochures", price: "Call for pricing" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "What is the standard tri-fold size?",
        answer: "Standard tri-fold brochures are 8.5\" x 11\" when folded to 3.67\" x 11\"."
      },
      {
        question: "Can you fold and bindmy brochures?",
        answer: "Yes, we offer professional folding services for all brochure orders."
      },
      {
        question: "Do you offer digital proofs?",
        answer: "Yes, we provide free digital proofs before production."
      },
      {
        question: "What's the best format for brochure files?",
        answer: "PDF files work best. Please include all fonts and images embedded in the PDF."
      },
    ],
  },
  "flyers": {
    title: "Flyers",
    description: "Promote your business with high-quality flyers. Perfect for events, sales, and announcements. Available in multiple sizes and paper stocks.",
    sizes: ["8.5\" x 11\"", "5.5\" x 8.5\"", "4\" x 6\"", "3\" x 5\""],
    materials: ["24lb Uncoated", "80lb Gloss", "100lb Gloss Cover", "Cardstock"],
    finishes: ["Gloss", "Matte", "Semi-gloss", "Coated", "Uncoated"],
    pricing: [
      { option: "100 Flyers", price: "$20-35" },
      { option: "250 Flyers", price: "$35-60" },
      { option: "500 Flyers", price: "$55-95" },
      { option: "1000 Flyers", price: "$85-145" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "What's the most popular flyer size?",
        answer: "8.5\" x 11\" is the most popular for standard flyers, followed by 5.5\" x 8.5\"."
      },
      {
        question: "Can I get perforated flyers?",
        answer: "Yes, we can add tear-off tabs or perforations to your flyers."
      },
      {
        question: "How long does production take?",
        answer: "Standard production is 3-5 business days from approved proof."
      },
      {
        question: "Do you offer distribution services?",
        answer: "We can help with door hanger distribution and direct mail campaigns. Contact sales for details."
      },
    ],
  },
  "banner-printing": {
    title: "Banners",
    description: "Large format banners for maximum visibility. Indoor and outdoor options with various materials. Perfect for events, promotions, and branding.",
    sizes: ["2' x 4'", "3' x 6'", "4' x 8'", "Custom sizes available"],
    materials: ["Vinyl Banner", "Mesh Banner", "Canvas", "Fabric", "Satin"],
    finishes: ["Matte", "Gloss", "Mesh", "Satin"],
    pricing: [
      { option: "2' x 4' Banner", price: "$35-60" },
      { option: "3' x 6' Banner", price: "$60-100" },
      { option: "4' x 8' Banner", price: "$100-150" },
      { option: "Custom large sizes", price: "Call for quote" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "What material should I choose for outdoor use?",
        answer: "Vinyl banners are UV-resistant and perfect for outdoor use. Mesh is ideal for windy areas."
      },
      {
        question: "Do you include grommets?",
        answer: "Yes, all banners include grommets for easy hanging."
      },
      {
        question: "Can I reuse my banner?",
        answer: "Yes, vinyl banners are durable and reusable. They can last 2-3 years outdoors."
      },
      {
        question: "What is the lead time for banners?",
        answer: "Standard lead time is 5-7 business days. Rush orders available."
      },
    ],
  },
  "postcard-printing": {
    title: "Postcards",
    description: "Cost-effective direct mail postcards. Perfect for marketing campaigns, announcements, and customer outreach. Available in standard and custom sizes.",
    sizes: ["4\" x 6\"", "5\" x 7\"", "5\" x 8\"", "Custom sizes"],
    materials: ["14pt Cardstock", "16pt Cardstock", "20pt Cardstock"],
    finishes: ["Glossy Finish", "Matte Finish", "Uncoated"],
    pricing: [
      { option: "250 Postcards", price: "$25-45" },
      { option: "500 Postcards", price: "$40-70" },
      { option: "1000 Postcards", price: "$70-120" },
      { option: "2500+ Postcards", price: "Call for pricing" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "Are postcards mailable without envelope?",
        answer: "Yes, postcards can be mailed directly. Standard 4x6 postcards are USPS-approved."
      },
      {
        question: "Can you handle the mailing for me?",
        answer: "Yes, we offer full mailing services including list management and postage."
      },
      {
        question: "What's the best stock weight for postcards?",
        answer: "14-16pt cardstock is standard. 20pt is heavier and more durable."
      },
      {
        question: "Do you offer variable postcards?",
        answer: "Yes, we can personalize postcards with names and addresses."
      },
    ],
  },
  "letterhead-printing": {
    title: "Letterhead",
    description: "Professional letterhead printing for your business correspondence. Enhance your brand with quality letterhead.",
    sizes: ["8.5\" x 11\" (Standard)", "8.5\" x 14\" (Legal)"],
    materials: ["24lb Bond", "28lb Bond", "32lb Bond", "Cotton Blend"],
    finishes: ["Gloss", "Matte", "Uncoated", "Smooth"],
    pricing: [
      { option: "250 Sheets", price: "$30-50" },
      { option: "500 Sheets", price: "$50-80" },
      { option: "1000 Sheets", price: "$80-130" },
      { option: "2500+ Sheets", price: "Call for pricing" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "What paper weight is best for letterhead?",
        answer: "28lb bond is standard for business letterhead. 32lb is heavier and more premium."
      },
      {
        question: "Can you match my existing letterhead?",
        answer: "Yes, send us a sample and we can match the design, color, and specs."
      },
      {
        question: "Do you offer blank letterhead?",
        answer: "Yes, we can print your logo only or provide completely blank letterhead."
      },
      {
        question: "Can I add color to my letterhead?",
        answer: "Absolutely! We offer full-color printing for custom designs and multiple colors."
      },
    ],
  },
  "custom-envelopes": {
    title: "Envelopes",
    description: "Custom printed envelopes for professional mailing. Available in multiple sizes and styles.",
    sizes: ["#10 (4.125\" x 9.5\")", "#9 (3.875\" x 8.875\")", "#6 (3.625\" x 6.5\")", "Custom sizes"],
    materials: ["24lb Bond", "28lb Bond", "White", "Kraft", "Colored"],
    finishes: ["Standard", "Window", "Security Flap"],
    pricing: [
      { option: "250 Envelopes", price: "$20-35" },
      { option: "500 Envelopes", price: "$35-60" },
      { option: "1000 Envelopes", price: "$60-100" },
      { option: "5000+ Envelopes", price: "Call for pricing" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "What is the most common envelope size?",
        answer: "#10 envelope (4.125\" x 9.5\") is the standard business envelope."
      },
      {
        question: "Do you offer window envelopes?",
        answer: "Yes, window envelopes are available for #10, #9, and other sizes."
      },
      {
        question: "Can I print on both sides?",
        answer: "Yes, we can print on the front and back of envelopes."
      },
      {
        question: "What's the minimum order?",
        answer: "Minimum order is typically 250 envelopes."
      },
    ],
  },
  "custom-labels": {
    title: "Labels",
    description: "Custom labels for products, shipping, and branding. Available in various shapes, sizes, and finishes.",
    sizes: ["1\" x 1\"", "2\" x 2\"", "4\" x 6\"", "Custom sizes"],
    materials: ["Glossy", "Matte", "Metallic", "Clear", "Kraft"],
    finishes: ["Permanent", "Removable", "Waterproof", "Outdoor"],
    pricing: [
      { option: "100 Labels", price: "$15-30" },
      { option: "500 Labels", price: "$40-70" },
      { option: "1000 Labels", price: "$70-120" },
      { option: "5000+ Labels", price: "Call for pricing" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "What's the difference between permanent and removable?",
        answer: "Permanent adhesive is long-lasting. Removable adhesive allows labels to be peeled off cleanly."
      },
      {
        question: "Can I get custom shapes?",
        answer: "Yes, we offer die-cut options for custom shapes."
      },
      {
        question: "Are your labels waterproof?",
        answer: "We offer waterproof labels for outdoor and wet environments."
      },
      {
        question: "What format should I submit my label design?",
        answer: "Submit as PDF, AI, or PSD with your design including bleed and cut lines."
      },
    ],
  },
  "custom-signs": {
    title: "Signs",
    description: "Professional signage for your business. Indoor and outdoor options with various materials and finishes.",
    sizes: ["12\" x 18\"", "18\" x 24\"", "24\" x 36\"", "Custom sizes"],
    materials: ["Coroplast", "Vinyl", "PVC", "Metal", "Foam Board"],
    finishes: ["Matte", "Gloss", "Laminated", "UV Protected"],
    pricing: [
      { option: "Single Sided (10)", price: "$50-100" },
      { option: "Double Sided (10)", price: "$80-150" },
      { option: "Single Large Format", price: "$100-250" },
      { option: "Custom large format", price: "Call for quote" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "What material is best for outdoor signs?",
        answer: "Vinyl or corrugated plastic (Coroplast) are best for outdoor durability."
      },
      {
        question: "Can you laminate my signs?",
        answer: "Yes, lamination adds protection and extends the life of your signs."
      },
      {
        question: "Do you offer installation services?",
        answer: "We can provide installation services in the local Tampa area. Contact us for details."
      },
      {
        question: "How long do outdoor signs last?",
        answer: "Quality outdoor signs last 2-5 years depending on weather and material."
      },
    ],
  },
  "poster-printing": {
    title: "Posters",
    description: "Eye-catching posters for events, promotions, and decoration. Available in various sizes and premium paper stocks.",
    sizes: ["11\" x 17\"", "18\" x 24\"", "24\" x 36\"", "Custom sizes"],
    materials: ["Gloss Paper", "Matte Paper", "Premium Poster Stock", "Canvas"],
    finishes: ["Gloss", "Matte", "Satin", "Canvas Texture"],
    pricing: [
      { option: "10 Posters", price: "$25-50" },
      { option: "25 Posters", price: "$50-100" },
      { option: "50 Posters", price: "$90-180" },
      { option: "100+ Posters", price: "Call for pricing" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "What's the most popular poster size?",
        answer: "18\" x 24\" is the most popular for event posters."
      },
      {
        question: "Can you print canvas posters?",
        answer: "Yes, we offer premium canvas poster printing."
      },
      {
        question: "Do you offer lamination?",
        answer: "Yes, lamination is available to protect your posters."
      },
      {
        question: "What file resolution do I need?",
        answer: "Submit files at 300 DPI for best quality."
      },
    ],
  },
  // Design Services
  "graphic-design": {
    title: "Graphic Design",
    description: "Professional graphic design services to bring your brand to life. Our creative team specializes in logo design, branding, marketing materials, and custom illustrations.",
    sizes: [],
    materials: ["Digital Files", "Print Ready Files", "Vector Graphics"],
    finishes: [],
    pricing: [
      { option: "Logo Design", price: "$300-1000" },
      { option: "Business Branding Package", price: "$1000-3000" },
      { option: "Marketing Collateral Design", price: "$200-500 per item" },
      { option: "Custom Illustration", price: "Call for pricing" },
    ],
    image: "/service-custom-design.jpg",
    faqs: [
      {
        question: "How long does the design process take?",
        answer: "Typical design projects take 1-3 weeks depending on complexity and revisions."
      },
      {
        question: "How many revisions are included?",
        answer: "We include 2-3 rounds of revisions in most design packages. Additional revisions available."
      },
      {
        question: "Do you provide all file formats?",
        answer: "Yes, we provide files in all formats you need - PDF, AI, PSD, PNG, JPEG, SVG, etc."
      },
      {
        question: "Can I see samples of your design work?",
        answer: "Yes, our portfolio is available on request. Contact us to schedule a consultation."
      },
    ],
  },
  "branding": {
    title: "Branding",
    description: "Complete branding solutions including logo design, brand guidelines, color palettes, and identity systems. Create a cohesive brand presence across all platforms.",
    sizes: [],
    materials: ["Digital Brand Guidelines", "Logo Files", "Color Palettes", "Typography"],
    finishes: [],
    pricing: [
      { option: "Starter Branding", price: "$1500-2500" },
      { option: "Complete Brand Identity", price: "$3000-7500" },
      { option: "Brand Guidelines Development", price: "$500-1500" },
      { option: "Rebrand Existing Business", price: "Call for pricing" },
    ],
    image: "/service-custom-design.jpg",
    faqs: [
      {
        question: "What's included in a branding package?",
        answer: "Logo design, color palette, typography selection, brand guidelines, and application mockups."
      },
      {
        question: "How long does full branding take?",
        answer: "Complete branding typically takes 4-8 weeks from initial consultation to delivery."
      },
      {
        question: "Can you help us rebrand an existing business?",
        answer: "Yes, we specialize in rebranding projects while maintaining brand equity and customer recognition."
      },
      {
        question: "Do you provide brand strategy consulting?",
        answer: "Yes, we include brand strategy and positioning analysis in our comprehensive packages."
      },
    ],
  },
  // Shipping Services
  "ups-shipping": {
    title: "UPS Shipping",
    description: "Fast and reliable UPS shipping services. Ground, expedited, and overnight options available. We handle all packaging and label creation.",
    sizes: [],
    materials: ["Various Box Sizes", "Packing Materials", "Label Printing"],
    finishes: [],
    pricing: [
      { option: "UPS Ground", price: "$8-25 per shipment" },
      { option: "UPS Express", price: "$20-50 per shipment" },
      { option: "UPS Overnight", price: "$40-100 per shipment" },
      { option: "UPS International", price: "Call for pricing" },
    ],
    image: "/service-shipping.jpg",
    faqs: [
      {
        question: "What are your shipping hours?",
        answer: "We accept shipments during our business hours: Mon-Fri 8AM-6PM, Sat 9AM-5PM."
      },
      {
        question: "Do you provide tracking?",
        answer: "Yes, all shipments include full tracking and insurance options."
      },
      {
        question: "Can you ship internationally?",
        answer: "Yes, we offer international UPS shipping to most countries worldwide."
      },
      {
        question: "Do you offer packaging supplies?",
        answer: "Yes, we provide boxes, tape, padding, and all necessary packing materials."
      },
    ],
  },
  "fedex-shipping": {
    title: "FedEx Shipping",
    description: "Comprehensive FedEx shipping solutions including ground and express options. Door-to-door delivery with professional handling.",
    sizes: [],
    materials: ["Various Box Sizes", "Packing Materials", "Label Printing"],
    finishes: [],
    pricing: [
      { option: "FedEx Ground", price: "$7-20 per shipment" },
      { option: "FedEx Express", price: "$25-60 per shipment" },
      { option: "FedEx Overnight", price: "$45-120 per shipment" },
      { option: "FedEx International", price: "Call for pricing" },
    ],
    image: "/service-shipping.jpg",
    faqs: [
      {
        question: "What's the difference between FedEx Ground and Express?",
        answer: "Ground is 3-5 days, Express is 2-3 days, and Overnight is next business day delivery."
      },
      {
        question: "Do you handle signature requirements?",
        answer: "Yes, we can arrange signature confirmation for valuable shipments."
      },
      {
        question: "Are your rates competitive?",
        answer: "Yes, as a business partner we offer discounted FedEx rates for regular shippers."
      },
      {
        question: "Can you print custom labels?",
        answer: "Yes, we can print FedEx labels with your company branding and information."
      },
    ],
  },
  "usps-shipping": {
    title: "USPS Shipping",
    description: "Affordable USPS shipping for domestic and international packages. Flat-rate boxes and Priority Mail options available.",
    sizes: [],
    materials: ["USPS Priority Boxes", "Flat Rate Options", "Regional Rate"],
    finishes: [],
    pricing: [
      { option: "Priority Mail", price: "$5-15 per shipment" },
      { option: "Priority Mail Express", price: "$15-35 per shipment" },
      { option: "Flat Rate Boxes", price: "$8-25 per box" },
      { option: "International", price: "$10-50 per shipment" },
    ],
    image: "/service-shipping.jpg",
    faqs: [
      {
        question: "What's the cheapest USPS option?",
        answer: "USPS Priority Mail is affordable and includes tracking and $100 insurance."
      },
      {
        question: "Can I use Flat Rate boxes?",
        answer: "Yes, USPS Flat Rate boxes ship anywhere in the US for a flat fee regardless of weight."
      },
      {
        question: "Do you offer bulk mailing discounts?",
        answer: "Yes, we offer discounted rates for high-volume mailers and direct mail campaigns."
      },
      {
        question: "How does First Class differ from Priority?",
        answer: "First Class is slower (3-5 days) but cheaper. Priority is 2-3 days and includes tracking."
      },
    ],
  },
  "document-copying": {
    title: "Document Copying",
    description: "Professional document copying services. Black & white and color copying available with various paper stock options.",
    sizes: [],
    materials: ["20lb White", "Colored Paper", "Cardstock", "Specialty Paper"],
    finishes: ["Single-sided", "Double-sided", "Collated", "Stapled"],
    pricing: [
      { option: "B&W Copy (per page)", price: "$0.05-0.15" },
      { option: "Color Copy (per page)", price: "$0.25-0.50" },
      { option: "Large Format Copy", price: "$1-3 per page" },
      { option: "Bulk Copy Discount", price: "Call for pricing" },
    ],
    image: "/service-digital-printing.jpg",
    faqs: [
      {
        question: "What's the difference between copying and printing?",
        answer: "Copying scans an original document, printing uses digital files. Copying is faster for urgent needs."
      },
      {
        question: "Do you offer collating and binding?",
        answer: "Yes, we can collate, staple, fold, and bind your copied documents."
      },
      {
        question: "Can you copy from books and bound materials?",
        answer: "Yes, our equipment handles books and bound materials without damage."
      },
      {
        question: "What's your fastest turnaround?",
        answer: "Most copy jobs are completed the same day or within hours of submission."
      },
    ],
  },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The service "{slug}" is currently unavailable. Please check back soon or contact us for details.
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
