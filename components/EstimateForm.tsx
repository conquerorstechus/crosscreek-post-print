'use client';

import { useState } from 'react';

interface ShippingItem {
  id: string;
  description: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  value: string;
  needsPacking: 'yes' | 'no';
}

export default function EstimateForm() {
  const [items, setItems] = useState<ShippingItem[]>([
    { id: '1', description: '', length: '', width: '', height: '', weight: '', value: '', needsPacking: 'yes' }
  ]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    originAddress: '',
    originZip: '',
    originType: 'residential',
    destinationAddress: '',
    destinationZip: '',
    destinationType: 'residential',
    role: 'shipper',
    additionalInfo: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleItemChange = (id: string, field: string, value: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const addItem = () => {
    const newId = String(Math.max(...items.map(item => parseInt(item.id)), 0) + 1);
    setItems(prev => [...prev, {
      id: newId,
      description: '',
      length: '',
      width: '',
      height: '',
      weight: '',
      value: '',
      needsPacking: 'yes'
    }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, items });
    alert('Estimate request submitted! We will contact you soon.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
              placeholder="Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
              placeholder="(813) 555-0000"
            />
          </div>
        </div>
      </div>

      {/* Origin Address */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Origin Address</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Street Address <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              name="originAddress"
              value={formData.originAddress}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
              placeholder="123 Main St"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="originZip"
                value={formData.originZip}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
                placeholder="33604"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Residential/Commercial <span className="text-red-500">*</span>
              </label>
              <select
                name="originType"
                value={formData.originType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Address */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Destination Address</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Street Address <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              name="destinationAddress"
              value={formData.destinationAddress}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
              placeholder="456 Oak Ave"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="destinationZip"
                value={formData.destinationZip}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
                placeholder="33604"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Residential/Commercial <span className="text-red-500">*</span>
              </label>
              <select
                name="destinationType"
                value={formData.destinationType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Role */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Are you the shipper or receiver? <span className="text-red-500">*</span>
        </h3>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="shipper"
              checked={formData.role === 'shipper'}
              onChange={handleInputChange}
              className="w-4 h-4 accent-[#003d6b]"
            />
            <span className="text-sm font-medium text-gray-700">Shipper</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="receiver"
              checked={formData.role === 'receiver'}
              onChange={handleInputChange}
              className="w-4 h-4 accent-[#003d6b]"
            />
            <span className="text-sm font-medium text-gray-700">Receiver</span>
          </label>
        </div>
      </div>

      {/* Items Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900">Items</h3>
        {items.map((item, index) => (
          <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Item Header */}
            <div className="bg-[#003d6b] text-white px-6 py-3 font-semibold">
              Item {index + 1}
            </div>

            {/* Item Content */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
                  placeholder="e.g., Painting, Sculpture, etc."
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Length (inches)
                  </label>
                  <input
                    type="number"
                    value={item.length}
                    onChange={(e) => handleItemChange(item.id, 'length', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Width (inches)
                  </label>
                  <input
                    type="number"
                    value={item.width}
                    onChange={(e) => handleItemChange(item.id, 'width', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Height (inches)
                  </label>
                  <input
                    type="number"
                    value={item.height}
                    onChange={(e) => handleItemChange(item.id, 'height', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Weight (lbs)
                  </label>
                  <input
                    type="number"
                    value={item.weight}
                    onChange={(e) => handleItemChange(item.id, 'weight', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Value (USD)
                  </label>
                  <input
                    type="number"
                    value={item.value}
                    onChange={(e) => handleItemChange(item.id, 'value', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Needs Packing?
                  </label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={item.needsPacking === 'yes'}
                        onChange={() => handleItemChange(item.id, 'needsPacking', 'yes')}
                        className="w-4 h-4 accent-[#003d6b]"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={item.needsPacking === 'no'}
                        onChange={() => handleItemChange(item.id, 'needsPacking', 'no')}
                        className="w-4 h-4 accent-[#003d6b]"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addItem}
          className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          + Add Another Item
        </button>
      </div>

      {/* Additional Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Additional Information / Comments
        </label>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
          placeholder="Any special instructions or requests..."
        />
      </div>

      {/* Agreement */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            required
            className="w-4 h-4 mt-1 accent-[#003d6b]"
          />
          <span className="text-sm text-gray-700">
            I have read and agree with the <a href="#" className="text-[#003d6b] hover:text-[#66bb6a] font-semibold transition-colors">Estimate Disclaimer</a>
            <span className="text-red-500"> *</span>
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#003d6b] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#66bb6a] hover:text-[#003d6b] transition-colors"
      >
        Request Estimate
      </button>
    </form>
  );
}
