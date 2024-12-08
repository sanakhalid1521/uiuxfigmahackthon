import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-[#FBEBB5] w-full h-[100px]">
      <div className="container mx-auto flex items-center justify-between h-full px-6">

        {/* Menu Items */}
        <ul className="flex-grow flex justify-center space-x-8 text-black text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons with Links */}
        <div className="flex items-center space-x-6 text-black text-xl">
          <Link href="/profile">
            <FiUser />
          </Link>
          <Link href="/search">
            <FaSearch />
          </Link>
          <Link href="/wishlist">
            <CiHeart />
          </Link>
          <Link href="/cart">
            <FaCartPlus />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
