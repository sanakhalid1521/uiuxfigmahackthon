'use client'
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

// Configure Sanity Client
const sanity = sanityClient({
  projectId: "uxu14cqp", // Replace with your Sanity project ID
  dataset: "production",
  apiVersion: "2025-01-13", // Replace with your Sanity API versionnpm fund
  
  useCdn: true,
});

// Define the Product interface
interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountpercentage: number;
  image: string;
  tags: string[];
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        description,
        discountpercentage,
        "image": productImage.asset->url,
        tags
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
      setFilteredProducts(data); // Initially show all products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart`);
  };

  // Dynamically truncate description based on space or max length
  const truncateDescription = (text: string, maxLength: number = 100) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  // Filter products by tag
  const filterByTag = (tag: string | null) => {
    if (tag === null) {
      setFilteredProducts(products); // Show all products if no tag is selected
    } else {
      const filtered = products.filter((product) => product.tags.includes(tag));
      setFilteredProducts(filtered);
    }
    setSelectedTag(tag); // Update the selected tag
  };

  // Calculate cart total price
  const calculateCartTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-200 mt-4 mb-4">Products from API</h2>

      {/* Tags Filter Section */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <button
          onClick={() => filterByTag(null)}
          className={`px-4 py-2 rounded-md ${
            selectedTag === null
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          All Products Listing
        </button>     
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.image || "/fallback-image.jpg"} // Fallback image if URL is missing
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description, 100)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">${product.price}</p>
                  {product.discountpercentage > 0 && (
                    <p className="text-red-500 text-sm">
                      {product.discountpercentage}% off
                    </p>
                  )}
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
              {/* Display Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {product.tags && product.tags.length > 0 ? (
                  product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-gray-500"> Tags</span>
                )}
              </div>
              {/* View Details Link */}
              <div className="mt-4 text-center">
                <Link
                  href={`/product/${product._id}`}
                  className="text-black hover:underline text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          Cart Summary
        </h3>
        <ul className="space-y-2">
          {cart.map((product, index) => (
            <li
              key={index}
              className="flex items-center gap-4 bg-white p-2 rounded-md shadow-sm"
            >
              <Image
                src={product.image || "/fallback-image.jpg"} // Fallback image for cart
                alt={product.title}
                width={50}
                height={50}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <p className="font-semibold text-slate-800">{product.title}</p>
                <p className="text-slate-600">${product.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-slate-700 font-semibold mt-4">
          Total Items: <span>{cart.length}</span>
        </p>
        <p className="text-slate-700 font-semibold">
          Total Price: <span>${calculateCartTotal()}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
