import { useState } from "react";
import {Link} from "react-router"
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
  return (
    <nav className="relative w-full bg-white shadow-sm px-6 md:px-12 py-3">
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            L
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
            G-mart Corporate
          </div>

          {/* Search Button */}
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition"
          >
          <Link to="/search/product">
           <button className="p-3 rounded-full bg-white/40 backdrop-blur-md border border-white/30 hover:scale-105 hover:cursor-pointer transition duration-300 shadow-md">
                   <Search size={15} className="text-gray-800" />
            </button>
           </Link>
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

    </nav>
  );
}