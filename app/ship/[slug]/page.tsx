import ServiceDetail from "@/components/ServiceDetail";

const shipServices: Record<string, any> = {
  "ups-shipping": { title: "UPS Shipping", description: "Fast and reliable UPS shipping services. Ground, expedited, and overnight options available.", sizes: [], materials: ["Various Box Sizes", "Packing Materials"], finishes: [], pricing: [{ option: "UPS Ground", price: "$8-25" }, { option: "UPS Express", price: "$20-50" }, { option: "UPS Overnight", price: "$40-100" }], image: "/service-shipping.jpg", faqs: [{ question: "Shipping hours?", answer: "Mon-Fri 8AM-6PM, Sat 9AM-5PM." }, { question: "Tracking included?", answer: "Yes, all shipments include full tracking and insurance." }] },
  "fedex-shipping": { title: "FedEx Shipping", description: "Comprehensive FedEx shipping solutions including ground and express options.", sizes: [], materials: ["Various Box Sizes", "Packing Materials"], finishes: [], pricing: [{ option: "FedEx Ground", price: "$7-20" }, { option: "FedEx Express", price: "$25-60" }, { option: "FedEx Overnight", price: "$45-120" }], image: "/service-shipping.jpg", faqs: [{ question: "Ground vs Express?", answer: "Ground is 3-5 days, Express is 2-3 days, Overnight is next business day." }] },
  "usps": { title: "USPS Shipping", description: "Affordable USPS shipping for domestic and international packages.", sizes: [], materials: ["USPS Priority Boxes", "Flat Rate Options"], finishes: [], pricing: [{ option: "Priority Mail", price: "$5-15" }, { option: "Priority Mail Express", price: "$15-35" }, { option: "Flat Rate Boxes", price: "$8-25" }], image: "/service-shipping.jpg", faqs: [{ question: "Cheapest option?", answer: "USPS Priority Mail is affordable with tracking and $100 insurance." }] },
  "dhl": { title: "DHL Shipping", description: "International shipping services with DHL. Global reach and reliability.", sizes: [], materials: ["Various Box Sizes", "Packing Materials"], finishes: [], pricing: [{ option: "DHL International", price: "$25-100" }, { option: "DHL Express", price: "$50-200" }], image: "/service-shipping.jpg", faqs: [{ question: "Countries served?", answer: "DHL ships to over 220 countries and territories worldwide." }] },
  "international-shipping": { title: "International Shipping", description: "Complete international shipping solutions with customs documentation.", sizes: [], materials: ["Various Box Sizes", "Customs Forms"], finishes: [], pricing: [{ option: "Standard International", price: "$30-150" }, { option: "Express International", price: "$100-500" }], image: "/service-shipping.jpg", faqs: [{ question: "Customs handled?", answer: "Yes, we handle all customs documentation and paperwork." }] },
  "packaging-services": { title: "Packaging Services", description: "Professional packing and packaging solutions for safe shipping.", sizes: [], materials: ["Boxes", "Padded Envelopes", "Packing Paper", "Bubble Wrap"], finishes: [], pricing: [{ option: "Packing Service", price: "$5-15 per item" }, { option: "Shipping Supplies", price: "Starting at $0.50 per item" }], image: "/service-shipping.jpg", faqs: [{ question: "What do you pack?", answer: "Fragile items, electronics, artwork, and more." }, { question: "Insured?", answer: "Yes, all items can be insured during packing and shipping." }] },
};

export default async function ShipServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = shipServices[slug];

  if (!service) {
    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The shipping service "{slug}" is currently unavailable. Please contact us for details.
          </p>
          <a href="/#services" className="inline-block bg-[#003d6b] text-white font-semibold px-6 py-3 rounded hover:bg-[#66bb6a] transition-colors">
            View All Services
          </a>
        </div>
      </div>
    );
  }

  return <ServiceDetail {...service} />;
}
