import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          <Link href="/" className="text-gray-300 hover:text-white">
            Logo
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/teams" className="text-gray-300 hover:text-white">
            Teams
          </Link>
          <Link href="/ratingCard" className="text-gray-300 hover:text-white">
            Rating Card
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
