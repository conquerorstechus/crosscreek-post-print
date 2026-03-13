import EstimateForm from '@/components/EstimateForm';

export const metadata = {
  title: 'Get a Shipping Estimate - Post & Print',
  description: 'Request a quick shipping or service estimate for your printing, design, or shipping needs.',
};

export default function EstimatePage() {
  return (
    <main className="bg-[#003d6b] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back to Home Button */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-[#66bb6a] transition-colors font-semibold text-sm"
          >
            <span>←</span>
            <span>Back to Home</span>
          </a>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-3">Get an Estimate</h1>
          <p className="text-lg text-blue-100">
            Request a shipping or service estimate for your printing, design, or shipping needs
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Find a Location */}
            <div className="bg-white rounded-lg border border-transparent p-6 mb-6 shadow-lg">
              <h3 className="text-lg font-bold text-[#003d6b] mb-4">Find a Location</h3>
              <p className="text-sm text-gray-600 mb-4">
                To locate nearest Post & Print store, please enter either your city, state, or zip code below.
              </p>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-[#003d6b] font-semibold mb-1">
                  City, State or ZIP
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Tampa, FL 33604"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b] text-sm"
                  />
                  <button
                    type="button"
                    className="bg-[#003d6b] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#66bb6a] hover:text-[#003d6b] transition-colors whitespace-nowrap"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Track a Package */}
            <div className="bg-white rounded-lg border border-transparent p-6 mb-6 shadow-lg">
              <h3 className="text-lg font-bold text-[#003d6b] mb-4">Track a Package</h3>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-[#003d6b] font-semibold mb-1">
                  Enter Tracking Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="1Z999AA10123456784"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b] text-sm"
                  />
                  <button
                    type="button"
                    className="bg-[#003d6b] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#66bb6a] hover:text-[#003d6b] transition-colors whitespace-nowrap"
                  >
                    Track
                  </button>
                </div>
              </div>
            </div>

            {/* Carrier Logos */}
            <div className="bg-white rounded-lg border border-transparent p-6 shadow-lg">
              <h3 className="text-sm font-bold text-[#003d6b] mb-4">Shipping Partners</h3>
              <div className="space-y-3">
                <p className="text-xs text-gray-600 font-medium">We ship with all major carriers:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#003d6b] font-semibold">
                  <div className="flex items-center justify-center px-2 py-2 border border-gray-200 rounded bg-gray-50 text-center">
                    FedEx
                  </div>
                  <div className="flex items-center justify-center px-2 py-2 border border-gray-200 rounded bg-gray-50 text-center">
                    UPS
                  </div>
                  <div className="flex items-center justify-center px-2 py-2 border border-gray-200 rounded bg-gray-50 text-center">
                    USPS
                  </div>
                  <div className="flex items-center justify-center px-2 py-2 border border-gray-200 rounded bg-gray-50 text-center">
                    DHL
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-transparent p-8 shadow-lg">
              <EstimateForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
