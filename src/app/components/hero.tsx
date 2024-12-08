'use client'
import React, { useState } from 'react';
import Image from 'next/image';

function Hero() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full bg-[#FBEBB5] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10">
        {/* Text Section */}
        <div className="lg:w-1/2 text-black text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="font-extrabold text-5xl lg:text-6xl mb-6 leading-snug">
            Rocket <br />
            Single Seater
          </h1>
          <button className="bg-black text-white w-[121px] h-[49px] underline">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/rocketsetter.png"
            alt="Rocket Single Seater"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Side Tables Section */}
      <div className="bg-[#FAF4F4] w-full flex flex-wrap items-center justify-center gap-8 py-10">
        {/* Side Table 1 */}
        <Image
          src="/sidetable.png"
          alt="Side Table 1"
          width={600}
          height={550}
          className="rounded-lg"
        />

        {/* Side Table 2 */}
        <Image
          src="/sidetable1.png"
          alt="Side Table 2"
          width={600}
          height={550}
          className="rounded-lg"
        />
      </div>

      {/* Top Picks Section */}
      <div className="w-full bg-white py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 text-black">Top Picks For You</h1>
        <p className="text-lg text-gray-700 mb-10">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>

        {/* Images Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Image 1 */}
          <div className="w-[287px] h-[397px]">
            <Image
              src="/a1.png"
              alt="Lighting Option 1"
              width={287}
              height={397}
              className="rounded-lg"
            />
          </div>

          {/* Image 2 */}
          <div className="w-[287px] h-[397px]">
            <Image
              src="/a2.png"
              alt="Lighting Option 2"
              width={287}
              height={397}
              className="rounded-lg"
            />
          </div>

          {/* Image 3 */}
          <div className="w-[287px] h-[397px]">
            <Image
              src="/a3.png"
              alt="Lighting Option 3"
              width={287}
              height={397}
              className="rounded-lg"
            />
          </div>

          {/* Image 4 */}
          <div className="w-[287px] h-[397px]">
            <Image
              src="/a4.png"
              alt="Lighting Option 4"
              width={287}
              height={397}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-8">
          <button
            className="text-gray-700 underline"
            onClick={toggleShowMore}
          >
            View More
          </button>
          {showMore && (
            <div className="border-t border-gray-300 mt-4 pt-2">
              <p className="text-lg text-gray-700">
                Here are more lighting options. You can browse a wider selection of stylish and modern light fixtures for your home or office.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* New Arrival Section (Asgaard Sofa) */}
      <div className="w-full bg-[#FAF4F4] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10">
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/asgaardsofa.png"
            alt="Asgaard Sofa"
            width={983}
            height={799}
            className="rounded-lg"
          />
        </div>

        <div className="lg:w-1/2 text-black text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-xl">New Arrival</p>
          <h1 className="font-extrabold text-4xl lg:text-6xl mb-6 leading-snug">
            Asgaard Sofa
          </h1>
          <button className="bg-white text-black w-[121px] h-[49px] underline">
            Order Now
          </button>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-full bg-[#FFFFFF] py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 text-black">Our Blog</h1>
        <p className="text-lg text-gray-700 mb-10">
          Find a bright idea to suit your taste with our great selection
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Blog Image 1 */}
          <div className="w-[393px] h-[555px]">
            <Image
              src="/blog1.png"
              alt="Blog Post 1"
              width={393}
              height={555}
              className="rounded-lg"
            />
          </div>

          {/* Blog Image 2 */}
          <div className="w-[393px] h-[555px]">
            <Image
              src="/blog2.png"
              alt="Blog Post 2"
              width={393}
              height={555}
              className="rounded-lg"
            />
          </div>

          {/* Blog Image 3 */}
          <div className="w-[393px] h-[555px]">
            <Image
              src="/blog3.png"
              alt="Blog Post 3"
              width={393}
              height={555}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* View All Posts Link */}
        <div className="mt-8">
          <a href="/blog" className="text-lg text-gray-700 underline">
            View All Posts
          </a>
        </div>
      </div>
      <div className="w-full h-[450px] relative">
  {/* Image Section */}
  <Image
    src="/instagram.png"
    alt="Instagram"
    width={1440}
    height={450}
    className="object-cover w-full h-full"
  />

  {/* Text Section */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <h1 className="text-4xl font-bold mb-6 text-black">Our Instagram</h1>
    <p className="text-lg text-black mb-10">
      Follow our store on Instagram
    </p>
    <h4 className="text-black">Follow Us</h4>
  </div>
</div>
        </div>
       );
}

export default Hero;
