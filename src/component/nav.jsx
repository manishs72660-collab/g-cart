import { useState } from "react";
import {
  Briefcase,
  Search,
  Tag,
  HelpCircle,
  User,
  ShoppingCart,
  ChevronDown,
  X,
} from "lucide-react";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="relative w-full bg-white shadow-sm px-6 md:px-12 py-3">
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            G
          </div>

          <div className="flex items-center gap-1 font-semibold cursor-pointer hover:text-green-500 transition">
            Other
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition">
            <Briefcase size={18} />
            Swiggy Corporate
          </div>

          {/* Search Button */}
          <div
            onClick={handleSearchClick}
            className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition"
          >
            <Search size={18} />
            Search
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition relative">
            <Tag size={18} />
            Offers
            <span className="absolute -top-2 -right-6 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded">
              NEW
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition">
            <HelpCircle size={18} />
            Help
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition">
            <User size={18} />
            Sign In
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition">
            <ShoppingCart size={18} />
            Cart
            <span className="border border-gray-700 text-xs px-1.5 rounded">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Floating Search Box */}
      {showSearch && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-20 w-1/2 bg-white shadow-xl rounded-xl p-5 border z-50">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-3"
          >
            <input
              type="text"
              placeholder="Search for restaurants, food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              autoFocus
            />

            <button
              type="submit"
              className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Search
            </button>

            <X
              size={20}
              className="cursor-pointer text-gray-500 hover:text-red-500"
              onClick={() => setShowSearch(false)}
            />
          </form>
        </div>
      )}
    </nav>
  );
}