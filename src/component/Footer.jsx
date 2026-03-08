import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://i.pinimg.com/736x/f0/7d/3c/f07d3cd69f0e5b3c55733337f8168833.jpg"
              alt="logo"
              className="h-10 w-10 rounded-full"
            />
            <h2 className="text-xl font-semibold">Luxecart</h2>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            Premium shopping experience with the best fashion and lifestyle products.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-red-500">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        © 2025 Luxecart Limited. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;