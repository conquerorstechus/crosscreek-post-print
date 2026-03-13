import ServiceDetail from "@/components/ServiceDetail";

const designServices: Record<string, any> = {
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
      { question: "How long does the design process take?", answer: "Typical design projects take 1-3 weeks depending on complexity and revisions." },
      { question: "How many revisions are included?", answer: "We include 2-3 rounds of revisions in most design packages. Additional revisions available." },
      { question: "Do you provide all file formats?", answer: "Yes, we provide files in all formats you need - PDF, AI, PSD, PNG, JPEG, SVG, etc." },
      { question: "Can I see samples of your design work?", answer: "Yes, our portfolio is available on request. Contact us to schedule a consultation." },
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
      { question: "What's included in a branding package?", answer: "Logo design, color palette, typography selection, brand guidelines, and application mockups." },
      { question: "How long does full branding take?", answer: "Complete branding typically takes 4-8 weeks from initial consultation to delivery." },
      { question: "Can you help us rebrand an existing business?", answer: "Yes, we specialize in rebranding projects while maintaining brand equity and customer recognition." },
      { question: "Do you provide brand strategy consulting?", answer: "Yes, we include brand strategy and positioning analysis in our comprehensive packages." },
    ],
  },
  "logo-design": {
    title: "Logo Design",
    description: "Custom logo design that captures your brand essence. We create unique, memorable logos that set your business apart from the competition.",
    sizes: [],
    materials: ["Digital Files", "Vector Graphics", "Multiple Variations"],
    finishes: [],
    pricing: [
      { option: "Basic Logo Design", price: "$300-500" },
      { option: "Professional Logo Design", price: "$500-1000" },
      { option: "Premium Logo Design", price: "$1000-2000" },
      { option: "Logo Redesign", price: "Call for pricing" },
    ],
    image: "/service-custom-design.jpg",
    faqs: [
      { question: "How many concepts will I receive?", answer: "Most packages include 3-5 initial logo concepts to choose from." },
      { question: "Do I get the source files?", answer: "Yes, all logo files are provided in multiple formats including AI, PSD, PNG, and SVG." },
      { question: "Can I trademark my new logo?", answer: "Yes, your logo design will be original and trademarked in your name." },
      { question: "How many revisions are included?", answer: "Unlimited revisions on your chosen concept until you're completely satisfied." },
    ],
  },
  "marketing-materials": {
    title: "Marketing Materials",
    description: "Comprehensive marketing material design including brochures, flyers, posters, and digital assets. Consistent branding across all platforms.",
    sizes: [],
    materials: ["Digital Assets", "Print Ready Files", "Social Media Graphics"],
    finishes: [],
    pricing: [
      { option: "Single Marketing Piece", price: "$200-400" },
      { option: "Marketing Material Bundle", price: "$800-1500" },
      { option: "Complete Campaign Design", price: "$2000-5000" },
      { option: "Ongoing Design Services", price: "Call for pricing" },
    ],
    image: "/service-custom-design.jpg",
    faqs: [
      { question: "What file formats do you provide?", answer: "We provide PDFs for print and JPG/PNG for digital use, plus editable source files." },
      { question: "Can you help with copywriting?", answer: "We can work with your copywriter or recommend local copywriting services." },
      { question: "Do you offer rush design services?", answer: "Yes, rush services available for an additional fee." },
      { question: "Can you design for multiple platforms?", answer: "Yes, we can adapt your design across print, web, and social media platforms." },
    ],
  },
  "packaging-design": {
    title: "Packaging Design",
    description: "Eye-catching packaging design that protects and showcases your product. From concept to final print files, we handle it all.",
    sizes: [],
    materials: ["Custom Box Design", "Label Design", "Print Ready Files"],
    finishes: [],
    pricing: [
      { option: "Basic Packaging Design", price: "$500-1000" },
      { option: "Professional Packaging Design", price: "$1000-2500" },
      { option: "Premium Packaging Design", price: "$2500-5000" },
      { option: "Full Packaging Solution", price: "Call for pricing" },
    ],
    image: "/service-custom-design.jpg",
    faqs: [
      { question: "Do you include structural design?", answer: "Yes, we can design the structural layout of your packaging or work with your specifications." },
      { question: "Can you design for different materials?", answer: "Yes, we design for boxes, bottles, labels, pouches, and more." },
      { question: "How do revisions work?", answer: "We include 2-3 rounds of revisions to ensure your packaging is perfect." },
      { question: "Do you provide printing recommendations?", answer: "Yes, we recommend printers and can coordinate with them on your behalf." },
    ],
  },
  "web-design": {
    title: "Web Design",
    description: "Modern, responsive web design that engages visitors and converts them into customers. User-friendly interfaces with beautiful aesthetics.",
    sizes: [],
    materials: ["Web Design", "Responsive Design", "UI/UX"],
    finishes: [],
    pricing: [
      { option: "Basic Website Design", price: "$1500-3000" },
      { option: "Professional Website Design", price: "$3000-7500" },
      { option: "E-Commerce Website Design", price: "$5000-15000" },
      { option: "Custom Web Solution", price: "Call for pricing" },
    ],
    image: "/service-custom-design.jpg",
    faqs: [
      { question: "Do you provide hosting?", answer: "We can recommend hosting providers or you can use your own." },
      { question: "Is the design mobile-responsive?", answer: "Yes, all our designs are fully responsive for mobile, tablet, and desktop." },
      { question: "Do you handle SEO?", answer: "We design with SEO best practices in mind. Additional SEO services available." },
      { question: "Can you integrate with e-commerce platforms?", answer: "Yes, we can integrate Shopify, WooCommerce, and other e-commerce platforms." },
    ],
  },
};

export default async function DesignServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = designServices[slug];

  if (!service) {
    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The design service "{slug}" is currently unavailable. Please check back soon or contact us for details.
          </p>
          <a href="/design" className="inline-block bg-[#003d6b] text-white font-semibold px-6 py-3 rounded hover:bg-[#66bb6a] transition-colors">
            View All Design Services
          </a>
        </div>
      </div>
    );
  }

  return <ServiceDetail {...service} />;
}
