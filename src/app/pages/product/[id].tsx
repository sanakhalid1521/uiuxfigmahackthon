'use client';
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

// Configure Sanity Client
const sanity = sanityClient({
  projectId: "uxu14cqp", // Replace with your Sanity project ID
  dataset: "production",
  apiVersion: "2023-01-01", // Replace with your Sanity API version
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

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic ID from the route
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch product details by ID
  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      const query = `*[_type == "product" && _id == $id][0]{
        _id,
        title,
        price,
        description,
        discountpercentage,
        "image": productImage.asset->url,
        tags
      }`;
      const data = await sanity.fetch(query, { id });

      if (data) {
        setProduct(data);
      } else {
        setError("Product not found");
      }
    } catch (err) {
      console.error("Error fetching product details:", err);
      setError("Failed to load product details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  if (loading) {
    return <p className="text-center mt-4">Loading product details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }

  if (!product) {
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.image || "/fallback-image.jpg"} // Fallback image
            alt={product.title}
            width={500}
            height={500}
            className="object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 mb-4">
            {product.title}
          </h1>
          <p className="text-slate-600 mb-4">{product.description}</p>
          <p className="text-slate-800 font-bold text-lg">
            ${product.price.toFixed(2)}
          </p>
          {product.discountpercentage > 0 && (
            <p className="text-red-500 text-sm mb-4">
              {product.discountpercentage}% off
            </p>
          )}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>

          {/* Tags */}
          <div className="mt-4">
            <h3 className="text-slate-800 font-medium mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
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
                <p className="text-gray-500">No tags available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
