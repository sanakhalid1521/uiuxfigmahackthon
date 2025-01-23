import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  label: string;
  img: string;
}

const Cart: React.FC = () => {
  const cartItems: Product[] = [
    { id: 1, name: "", price: "Rs 2500.00", label: "Trenton modular sofa_3", img: "/p1.png" },
    { id: 2, name: "", price: "Rs 2500.00", label: "Granite dining table with dining chair", img: "/p2.png" },
  ];

  return (
    <div className="container bg-[#FFFFFF] mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 bg-[#FFFFFF] p-4 rounded-lg shadow-md">
            <img src={item.img} alt={item.label} className="w-20 h-20 object-contain rounded-lg" />
            <div>
              <h3 className="text-lg font-semibold">{item.name || item.label}</h3>
              <p className="text-gray-800 font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
