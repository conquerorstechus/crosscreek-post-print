'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  extension: string;
  jobDescription: string;
  files: File[];
}

interface FormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  jobDescription?: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    extension: '',
    jobDescription: '',
    files: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...files].slice(0, 21),
    }));
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.jobDescription.trim()) {
      newErrors.jobDescription = 'Job description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const mailtoLink = `mailto:info@postandprint.com?subject=${encodeURIComponent(
      `Quote Request from ${formData.firstName} ${formData.lastName}`
    )}&body=${encodeURIComponent(
      `Quote Request\n\nFirst Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}${
        formData.extension ? ` ext. ${formData.extension}` : ''
      }\n\nJob Description:\n${formData.jobDescription}\n\nFiles Attached: ${
        formData.files.length
      } file(s)`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        extension: '',
        jobDescription: '',
        files: [],
      });
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg p-8">
      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          Thank you! Your quote request has been submitted. We'll be in touch shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Quote Request Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quote Request</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b] ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b] ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Phone Number
            </label>
            <div className="flex gap-2">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b] ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="(813) 401-9820"
              />
              <input
                type="text"
                name="extension"
                value={formData.extension}
                onChange={handleInputChange}
                className="w-20 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b]"
                placeholder="ext"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Job Description Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleInputChange}
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b] resize-none ${
              errors.jobDescription ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us about your project. Include details such as quantity, paper type, colors, size, finishing, and any special instructions. Also mention if shipping is required."
          />
          {errors.jobDescription && (
            <p className="text-red-500 text-sm mt-1">{errors.jobDescription}</p>
          )}
        </div>

        {/* Attach Files Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Attach Files (Optional)</h2>

          <div className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
            <p className="font-semibold mb-1">Attach a File</p>
            <p className="text-sm">
              Attach up to 21 files (e.g. Front, Back, Samples, Mock-ups, etc.)
            </p>
          </div>

          <label className="inline-block mb-4">
            <input
              type="file"
              onChange={handleFileChange}
              multiple
              className="hidden"
            />
            <span className="bg-[#003d6b] hover:bg-[#66bb6a] text-white font-semibold px-6 py-2 rounded cursor-pointer transition-colors inline-block">
              Choose Files
            </span>
          </label>

          {formData.files.length > 0 ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-blue-900 mb-3">
                Attached Files ({formData.files.length}/21):
              </p>
              <ul className="space-y-2">
                {formData.files.map((file, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-sm text-blue-800 bg-white p-2 rounded"
                  >
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
              There are currently no files attached.
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#66bb6a] hover:bg-[#003d6b] text-white font-bold py-3 rounded-lg transition-colors"
          >
            Request Quote
          </button>
        </div>
      </form>
    </div>
  );
}
