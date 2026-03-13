import { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Print Quote | Post & Print Tampa',
  description:
    'Request a quote for your print project. Submit project details, dimensions, and files to get an accurate estimate from Post & Print Tampa.',
};

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#003d6b] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold mb-3">Get a Print Quote</h1>
            <p className="text-lg text-blue-100">
              Tell us about your printing project and we'll provide an accurate quote. Upload your files and our team will review them to give you the best price.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <QuoteForm />

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-[#003d6b] mb-3">Fast Quotes</h3>
              <p className="text-gray-600 text-sm">
                We typically respond to quote requests within 24 business hours with detailed pricing and turnaround options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-[#003d6b] mb-3">Upload Files</h3>
              <p className="text-gray-600 text-sm">
                Attach up to 21 files including designs, mockups, artwork, samples, or any reference materials to help us understand your vision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-[#003d6b] mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">
                All our print work is backed by our quality guarantee. We'll make sure your project exceeds expectations.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              If you prefer to discuss your project directly with one of our specialists, feel free to reach out:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-[#003d6b] font-semibold mb-2">
                  Phone
                </p>
                <a
                  href="tel:8134019820"
                  className="text-lg font-semibold text-[#003d6b] hover:text-[#66bb6a] transition-colors"
                >
                  (813) 401-9820
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[#003d6b] font-semibold mb-2">
                  Email
                </p>
                <a
                  href="mailto:info@postandprint.com"
                  className="text-lg font-semibold text-[#003d6b] hover:text-[#66bb6a] transition-colors"
                >
                  info@postandprint.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
