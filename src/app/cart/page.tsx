import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="w-full h-[316px] relative">
        <Image src="/ins.png" alt="blog Banner" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        
        </div>
      </div>

      {/* Main Cart Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-yellow-50">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-yellow-100">
                <th className="p-4 text-gray-600">Product</th>
                <th className="p-4 text-gray-600">Price</th>
                <th className="p-4 text-gray-600">Quantity</th>
                <th className="p-4 text-gray-600">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 flex items-center space-x-4">
                  <img
                    src="/cs2.png"
                    alt="Asgaard sofa"
                    className="w-16 h-16 rounded-lg"
                  />
                  <span className="text-gray-700">Asgaard sofa</span>
                </td>
                <td className="p-4 text-gray-700">Rs. 250,000.00</td>
                <td className="p-4">
                  <input
                    type="number"
                    min="1"
                    value="1"
                    className="w-12 p-2 border border-gray-300 rounded"
                  />
                </td>
                <td className="p-4 text-gray-700">Rs. 250,000.00</td>
                <td className="p-4">
                  <button className="text-yellow-600 hover:text-yellow-800">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 bg-yellow-50 p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-600">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-800 font-semibold">Total</span>
            <span className="text-yellow-600 font-semibold">Rs. 250,000.00</span>
          </div>
          {/* Check Out Button with Link */}
          <Link href="/checkout">
            <div className="w-full py-3 mt-4 bg-yellow-100 border border-yellow-400 rounded-lg text-yellow-800 font-medium hover:bg-yellow-200 text-center cursor-pointer">
              Check Out
            </div>
          </Link>
        </div>
      </div>

      {/* Promotional Section */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-2">
            <h1 className="text-xl font-bold text-black">Free Delivery</h1>
            <p className="text-gray-500">For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-bold text-black">90 Days Return</h1>
            <p className="text-gray-500">If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-bold text-black">Secure Payment</h1>
            <p className="text-gray-500">100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
