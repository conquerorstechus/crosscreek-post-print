import { Metadata } from "next";
import SendFilesForm from "@/components/SendFilesForm";

export const metadata: Metadata = {
  title: "Send Print Files | Post & Print Tampa",
  description:
    "Send your print-ready files directly to Post & Print Tampa. Upload PDF, JPG, PNG, DOCX files. (813) 401-9820",
};

export default function SendFilesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#003d6b] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Send Print Files</h1>
          <p className="text-lg text-blue-100">
            Submit your print-ready files directly to our team. We'll review and get started on
            your project.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <SendFilesForm />
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-bold text-gray-900 mb-2">Accepted Formats</h3>
            <p className="text-sm text-gray-700">
              PDF, JPG, PNG, DOCX, DOC, AI, PSD, EPS and more
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-sm text-gray-700">
              We review submissions within 24 hours during business hours
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold text-gray-900 mb-2">Direct Contact</h3>
            <p className="text-sm text-gray-700">
              We'll contact you with pricing and availability
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            Have questions about file formats or need guidance? Contact us directly:
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="tel:8134019820"
              className="inline-block bg-[#003d6b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#66bb6a] transition-colors"
            >
              Call: (813) 401-9820
            </a>
            <a
              href="mailto:info@postandprint.com"
              className="inline-block bg-[#66bb6a] text-[#003d6b] font-semibold px-6 py-3 rounded-lg hover:bg-[#20b2aa] hover:text-white transition-colors"
            >
              Email: info@postandprint.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
