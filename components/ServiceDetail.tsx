interface ServiceDetailProps {
  title: string;
  description: string;
  sizes?: string[];
  materials?: string[];
  finishes?: string[];
  pricing?: { option: string; price: string }[];
  image?: string;
  faqs?: { question: string; answer: string }[];
}

export default function ServiceDetail({
  title,
  description,
  sizes = [],
  materials = [],
  finishes = [],
  pricing = [],
  image,
  faqs = [],
}: ServiceDetailProps) {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{description}</p>
        </div>

        {/* Image */}
        {image && (
          <div className="mb-16 rounded-lg overflow-hidden h-96 bg-gray-200">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Available Sizes */}
          {sizes.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Sizes</h3>
              <ul className="space-y-2">
                {sizes.map((size) => (
                  <li key={size} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#66bb6a]" />
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Material Options */}
          {materials.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Materials</h3>
              <ul className="space-y-2">
                {materials.map((material) => (
                  <li key={material} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#66bb6a]" />
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Finishes */}
          {finishes.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Finishes</h3>
              <ul className="space-y-2">
                {finishes.map((finish) => (
                  <li key={finish} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#66bb6a]" />
                    {finish}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quick CTA */}
          <div className="bg-[#003d6b] rounded-lg p-6 text-white flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">Order Now</h3>
              <p className="text-xs text-blue-100">Get custom quote or send your files.</p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="/quote"
                className="bg-[#66bb6a] text-[#003d6b] font-semibold px-3 py-2 rounded text-center text-sm hover:bg-white transition-colors"
              >
                Get Quote
              </a>
              <a
                href="/send-files"
                className="border-2 border-[#66bb6a] text-white font-semibold px-3 py-2 rounded text-center text-sm hover:bg-[#66bb6a] hover:text-[#003d6b] transition-colors"
              >
                Send Files
              </a>
            </div>
          </div>
        </div>

        {/* Pricing */}
        {pricing.length > 0 && (
          <div className="mb-16">
            <h3 className="font-bold text-2xl text-gray-900 mb-6">Pricing Estimates</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {pricing.map((item) => (
                <div key={item.option} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{item.option}</span>
                  <span className="text-lg font-bold text-[#003d6b]">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#003d6b] to-[#20b2aa] rounded-lg p-8 text-white text-center mb-16">
          <h2 className="text-2xl font-bold mb-3">Need More Information?</h2>
          <p className="mb-6">Contact our team for detailed specifications and rush order options.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#003d6b] font-semibold px-6 py-3 rounded hover:bg-[#66bb6a] hover:text-white transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:8134019820"
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#003d6b] transition-colors"
            >
              Call (813) 401-9820
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 cursor-pointer group">
                  <summary className="font-bold text-gray-900 text-lg flex items-center justify-between hover:text-[#003d6b] transition-colors">
                    {faq.question}
                    <span className="text-[#66bb6a] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
