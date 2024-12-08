import React from "react";
import Image from "next/image";

function Shop() {
  const products = [
    { id: 1, name: "", price: "Rs 2500.00", label: "Trenton modular sofa_3", img: "/p1.png" },
    { id: 2, name: "", price: "Rs 2500.00", label: "Granite dining table with dining chair", img: "/p2.png" },
    { id: 3, name: "", price: "Rs 2500.00", label: "Outdoor bar table and stool", img: "/p3.png" },
    { id: 4, name: "", price: "Rs 2500.00", label: "Plain console with teak mirrorr", img: "/p4.png" },
    { id: 5, name: "", price: "Rs 2500.00", label: "Grain coffee table", img: "/p5.png" },
    { id: 6, name: "", price: "Rs 2500.00", label: "Kent coffee table", img: "/p6.png" },
    { id: 7, name: "", price: "Rs 2500.00", label: "Round coffee table_color 2", img: "/p7.png" },
    { id: 8, name: "", price: "Rs 2500.00", label: "Reclaimed teak coffee table", img: "/p8.png" },
    { id: 9, name: "", price: "Rs 2500.00", label: "Plain console_", img: "/p9.png" },
    { id: 10, name: "", price: "Rs 2500.00", label: "Reclaimed teak Sideboard", img: "/p10.png" },
    { id: 11, name: "", price: "Rs 2500.00", label: "JP_0825 ", img: "/p11.png" },
    { id: 12, name: "", price: "Rs 2500.00", label: "Bella chair and table", img: "/p12.png" },
    { id: 13, name: " ", price: "Rs 2500.00", label: "Granite square side table", img: "/p13.png" },
    { id: 14, name: " ", price: "Rs 2500.00", label: "Asgaard sofa", img: "/p14.png" },
    { id: 15, name: " ", price: "Rs 2500.00", label: "Maya sofa three seater", img: "/p15.png" },
    { id: 16, name: " ", price: "Rs 2500.00", label: "Outdoor sofa set", img: "/p16.png" },
  ];

  return (
    <div className="container bg-[#FFFFFF] mx-auto px-6 py-8">
      <div className="w-full h-[316px] relative">
      <Image src="/sh.png" alt="Instagram" layout="fill" objectFit="cover" />
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#FFFFFF] p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-600">{product.label}</p> {/* Unique Text */}
              <p className="text-gray-800 font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
