import React from "react";
import Image from "next/image";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/blog1.png",
      title: "Going all-in with millennial design",
      date: "14 Oct 2022",
      category: "Wood",
    },
    {
      id: 2,
      image: "/blog2.png",
      title: "Exploring new ways of decorating",
      date: "14 Oct 2022",
      category: "Handmade",
    },
    {
      id: 3,
      image: "/blog3.png",
      title: "Handmade pieces that took time to make",
      date: "14 Oct 2022",
      category: "Wood",
    },
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = blogPosts.map((post) => ({
    title: post.title,
    date: post.date,
    image: post.image,
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="w-full h-[316px] relative">
        <Image src="/b1.png" alt="blog Banner" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row">
        {/* Blog Posts Section */}
        <div className="w-full lg:w-8/12 space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="w-full h-[300px] relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                  <span>Admin</span>
                  <span>{post.date}</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mt-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="text-yellow-500 mt-4 block">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <aside className="w-full lg:w-4/12 mt-8 lg:mt-0 lg:ml-8">
          {/* Categories */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between text-gray-600 text-sm"
                >
                  <span>{category.name}</span>
                  <span>({category.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium">
                      {post.title}
                    </p>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`px-4 py-2 ${
              page === 1
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded-lg mx-1`}
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg mx-1">
          Next
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
  );
};

export default Blog;
