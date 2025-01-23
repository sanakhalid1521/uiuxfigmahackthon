'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const router = useRouter();

  const handleAddToCart = () => {
    // Navigate to the cart page
    router.push("/cartpage");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="flex flex-col w-full max-w-5xl bg-white rounded-lg shadow-md">
        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Section - Image Gallery */}
          <div className="flex flex-col gap-2 p-4 lg:w-2/5">
            {/* Thumbnail Images */}
            <div className="flex flex-col gap-2">
              {["/image1.jpg", "/cs2.png", "/cs3.png", "/cs4.png", "/cs5.png"].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover rounded cursor-pointer border border-gray-200"
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex justify-center mt-4">
              <img
                src="/cs1.png"
                alt="Main Sofa"
                className="w-full object-cover rounded-lg border border-gray-200"
              />
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="flex flex-col p-6 w-full lg:w-3/5">
            {/* Product Title and Price */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-gray-800">Sofa Set</h1>
              <span className="text-xl font-bold text-gray-900">Rs. 250,000.00</span>
            </div>

            {/* Reviews */}
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-500">
                {Array(5)
                  
                  .map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">5 Customer Reviews</span>
            </div>

            {/* Sizes */}
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700">Size</h3>
              <div className="flex gap-2 mt-2">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 flex justify-center items-center border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700">Color</h3>
              <div className="flex gap-2 mt-2">
                {["bg-blue-500", "bg-yellow-500"].map((colorClass, index) => (
                  <button
                    key={index}
                    className={`${colorClass} w-10 h-10 rounded-full border border-gray-300`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-3 py-2 text-gray-700">-</button>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-12 text-center border-0 focus:ring-0"
                />
                <button className="px-3 py-2 text-gray-700">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
              >
                Add to Cart
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 border-t border-gray-300 pt-4">
              <p className="text-sm text-gray-600">
                <span className="font-medium">SKU:</span> SS001
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Category:</span> Sofas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
