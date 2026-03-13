"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneArea: string;
  phoneExchange: string;
  phoneNumber: string;
  extension: string;
  instructions: string;
}

interface UploadedFile {
  name: string;
  size: number;
}

export default function SendFilesForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneArea: "",
    phoneExchange: "",
    phoneNumber: "",
    extension: "",
    instructions: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) {
      const newFiles = Array.from(files).slice(0, 25 - uploadedFiles.length);
      const fileList: UploadedFile[] = newFiles.map((file) => ({
        name: file.name,
        size: file.size,
      }));
      setUploadedFiles((prev) => [...prev, ...fileList]);
      e.currentTarget.value = "";
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fileList = uploadedFiles
      .map((f) => `- ${f.name} (${(f.size / 1024).toFixed(2)} KB)`)
      .join("\n");

    const mailtoLink = `mailto:info@postandprint.com?subject=${encodeURIComponent(
      `Print Files from ${formData.firstName} ${formData.lastName}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: (${formData.phoneArea}) ${formData.phoneExchange}-${formData.phoneNumber}${formData.extension ? ` ext. ${formData.extension}` : ""}\n\nInstructions/Notes:\n${formData.instructions}\n\nFiles Attached:\n${fileList || "No files attached"}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-4xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Email Opened</h3>
        <p className="text-green-700">
          Your default email client has opened. Please complete sending the email with your files
          attached.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Customer Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900">Your Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b] focus:border-transparent"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b] focus:border-transparent"
              placeholder="Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b] focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <div className="flex gap-2">
              <input
                type="tel"
                name="phoneArea"
                value={formData.phoneArea}
                onChange={handleInputChange}
                maxLength={3}
                placeholder="813"
                className="w-16 px-3 py-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-[#003d6b] focus:border-transparent"
              />
              <span className="text-gray-400 py-2">-</span>
              <input
                type="tel"
                name="phoneExchange"
                value={formData.phoneExchange}
                onChange={handleInputChange}
                maxLength={3}
                placeholder="401"
                className="w-16 px-3 py-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-[#003d6b] focus:border-transparent"
              />
              <span className="text-gray-400 py-2">-</span>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                maxLength={4}
                placeholder="9820"
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-[#003d6b] focus:border-transparent"
              />
              <input
                type="text"
                name="extension"
                value={formData.extension}
                onChange={handleInputChange}
                maxLength={6}
                placeholder="ext"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-center text-sm focus:outline-none focus:ring-2 focus:ring-[#003d6b] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Information / Instructions
        </label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleInputChange}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d6b] focus:border-transparent"
          placeholder="Please provide any information or instructions to help us understand what you need printed. Include details about quantity, paper type, finishing preferences, etc."
        />
      </div>

      {/* File Upload Section */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Attach Files (Optional)</h3>

        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4 hover:border-[#003d6b] transition-colors cursor-pointer">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png,.docx,.doc,.ai,.psd,.eps"
            className="hidden"
            id="file-input"
            disabled={uploadedFiles.length >= 25}
          />
          <label htmlFor="file-input" className="cursor-pointer block">
            <div className="text-3xl mb-2">📄</div>
            <p className="font-semibold text-gray-700 mb-1">Attach a File</p>
            <p className="text-sm text-gray-500">
              Attach up to {25 - uploadedFiles.length} more files. (PDF, JPG, PNG, DOCX)
            </p>
          </label>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          For each file you would like to attach, click the ATTACH A FILE button, use the
          pull-down to identify the type file being attached, then choose the file. Repeat for
          additional files.
        </p>

        {uploadedFiles.length === 0 ? (
          <div className="bg-blue-50 border border-blue-200 rounded p-4 text-center">
            <p className="text-sm text-blue-700">There are currently no files attached.</p>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700 mb-3">Attached Files:</p>
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded p-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">📎</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-600 hover:text-red-700 font-semibold text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#66bb6a] text-[#003d6b] font-bold py-3 px-6 rounded-lg hover:bg-[#20b2aa] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to send your files to us for review and printing.
      </p>
    </form>
  );
}
