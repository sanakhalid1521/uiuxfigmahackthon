'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Checkout = () => {
    const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: "/cs2.png",
    },
    {
      id: 2,
      name: "Norway Dining Set",
      price: 150000,
      quantity: 1,
      image: "/cs2.png",
    },
  ]);

  // State for order message
  const [orderMessage, setOrderMessage] = useState("");

  // Calculate Subtotal and Total
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    return 10000; // You can calculate shipping based on certain logic or shipping region
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  // Handle order placement
  const handlePlaceOrder = () => {
    setOrderMessage("Order placed successfully!");
    // Optionally, reset cart or perform other actions like API calls
    // setCartItems([]); // Uncomment to clear cart after order is placed
  };

  useEffect(() => {
    // This is where you would fetch cart data if it's coming from a global state or API
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="w-full h-[316px] relative">
        <Image
          src="/ch1.png"
          alt="Checkout Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white"></div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Billing Details */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-black">Billing Details</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="postal" className="block text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-black">Order Summary</h2>
            <div className="bg-gray-500 p-6 rounded-lg shadow-md">
              {cartItems.length === 0 ? (
                <p className="text-red-500 text-center">Your cart is empty!</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between mb-4">
                    <span>{item.name}</span>
                    <span>{item.quantity} x Rs. {item.price}</span>
                  </div>
                ))
              )}
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>Rs. {calculateSubtotal()}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>Rs. {calculateShipping()}</span>
              </div>
              <div className="flex justify-between mb-4 font-semibold">
                <span>Total</span>
                <span>Rs. {calculateTotal()}</span>
              </div>
              <button
                type="button"
                onClick={handlePlaceOrder} // Trigger the order message
                className="w-full py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>

        {/* Order Confirmation Message */}
        {orderMessage && (
          <div className="mt-6 text-center text-green-600 font-semibold">
            {orderMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
