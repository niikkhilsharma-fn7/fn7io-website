import React from "react";

const SubmitSuccess = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
    <div className="max-w-2xl w-full">
      <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-md:p-6">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent max-md:text-3xl">
          Application Submitted Successfully!
        </h1>

        <p className="text-xl text-gray-700 mb-6 max-md:text-lg">
          Thank you for applying.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">What happens next?</h2>
          <ul className="text-left text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>You'll receive a confirmation email shortly</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Our team will review your application within 2-3 business days</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>We'll contact you with next steps</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-500 mb-8">
          If you have any questions, please reach out to us at{" "}
          <a href="mailto:hello@fn7.io" className="text-blue-600 hover:underline">
            hello@fn7.io
          </a>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default SubmitSuccess;