// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address */}
          <div>
            <h5 className="font-medium text-lg text-gray-800 mb-3">Contact</h5>
            <p className="text-sm text-gray-600">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-medium text-lg text-gray-800 mb-3">Links</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h5 className="font-medium text-lg text-gray-800 mb-3">Help</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-medium text-lg text-gray-800 mb-3">Newsletter</h5>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm text-gray-500">
          2022 Meubel House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
