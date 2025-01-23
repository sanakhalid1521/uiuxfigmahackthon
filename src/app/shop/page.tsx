import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: string;
  label: string;
  img: string;
}

const Shop: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "", price: "Rs 2500.00", label: "Trenton modular sofa_3", img: "/p1.png" },
    { id: 2, name: "", price: "Rs 2500.00", label: "Granite dining table with dining chair", img: "/p2.png" },
    { id: 3, name: "", price: "Rs 2500.00", label: "Outdoor bar table and stool", img: "/p3.png" },
    { id: 4, name: "", price: "Rs 2500.00", label: "Plain console with teak mirror", img: "/p4.png" },
  ];

  return (
    <div className="container bg-[#FFFFFF] mx-auto px-6 py-8">
      <div className="w-full h-[316px] relative mb-8">
        <Image src="/sh.png" alt="Shop Banner" layout="fill" objectFit="cover" priority />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#FFFFFF] p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <Link href="/cart">
              <div className="relative w-full h-[200px] mb-4 cursor-pointer">
                <Image
                  src={product.img}
                  alt={product.label}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </Link>
            <h3 className="text-lg font-semibold text-gray-800">{product.name || product.label}</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-600">{product.label}</p>
              <p className="text-gray-800 font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/blog">
          <div className="text-blue-500 underline">View All Products</div>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
