import React from 'react';
import Image from 'next/image';

function Cart() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="w-full h-[316px] relative">
        <Image src="/ins.png" alt="Cart Banner" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        
        </div>
      </div>

      {/* Cart Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Shopping Cart</h2>

        {/* Cart Items */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Table Header */}
          <div className="flex items-center justify-between py-4 border-b text-gray-700 font-semibold">
            <div className="flex-1 text-left">Product</div>
            <div className="w-32 text-center">Price</div>
            <div className="w-32 text-center">Quantity</div>
            <div className="w-32 text-center">Subtotal</div>
            <div className="w-24 text-center">Action</div>
          </div>

          {/* Item Row */}
          <div className="flex items-center justify-between py-4 border-b">
            {/* Product Info */}
            <div className="flex items-center flex-1">
              <Image
                src="/product.png"
                alt="Product Image"
                width={60}
                height={60}
                className="rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-sm font-semibold text-gray-800">Product Name</h3>
                <p className="text-sm text-gray-500">Category</p>
              </div>
            </div>

            {/* Price */}
            <div className="w-32 text-center text-black">$25.00</div>

            {/* Quantity Controls */}
            <div className="w-32 text-center flex items-center justify-center">
              <button className="px-2 py-1 bg-gray-200 rounded-l">-</button>
              <input
                type="text"
                value="1"
                readOnly
                className="w-12 text-center border-t border-b border-gray-300 text-black"
              />
              <button className="px-2 py-1 bg-gray-200 rounded-r">+</button>
            </div>

            {/* Subtotal */}
            <div className="w-32 text-center text-black">$25.00</div>

            {/* Remove Button */}
            <div className="w-24 text-center">
              <button className="text-red-500 hover:text-red-700 transition">Remove</button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="flex flex-col items-end mt-8">
            <p className="text-gray-700 text-lg mb-4">
              Subtotal: <span className="font-semibold">$75.00</span>
            </p>
            <button className="bg-gray-300 text-black px-6 py-2 rounded-md hover:bg-blue-300">
              Checkout
            </button>
          </div>
          <div className="bg-gray-50 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-2">
            <h1 className="text-xl font-bold text-black">Free Delivery</h1>
            <p className="text-gray-500">For all oders over $50, consectetur adipim scing elit..</p>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-bold text-black">90 Days Return</h1>
            <p className="text-gray-500">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-bold text-black">Secure Payment</h1>
            <p className="text-gray-500">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Cart;
