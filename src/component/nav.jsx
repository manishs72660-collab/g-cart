import { Briefcase, Search, Tag, HelpCircle, User, ShoppingCart, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-12 py-3">
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            G
          </div>

          {/* Other Dropdown */}
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

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition">
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
    </nav>
  );
}