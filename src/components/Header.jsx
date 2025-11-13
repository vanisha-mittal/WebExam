import React from 'react';
import { CiShoppingCart, CiSearch } from "react-icons/ci";

function Header({ allProducts, setAllProductData }) {

  function handleSearch(searchedText) {
    setAllProductData(
      allProducts.filter((item) =>
        item.title.toLowerCase().includes(searchedText.toLowerCase())
      )
    );
  }

  return (
    <div>
      <nav className="bg-white shadow-md flex justify-between items-center px-12 py-5">
        
        <div className="flex items-center space-x-3">
          <CiShoppingCart className="text-3xl text-gray-800" />
          <span className="font-semibold text-xl text-gray-800">
            Web3 Shopping Cart
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => handleSearch(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-72 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
          />
          <CiSearch 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
