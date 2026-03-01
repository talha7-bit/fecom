import React from "react";
import footer from "/footer.png";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-300 to-white px-6 py-12">
      
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <img src={footer} alt="Shopper Logo" className="w-10 h-10" />
          <h1 className="font-bold text-2xl">SHOPPER</h1>
        </div>

        <ul className="flex flex-col sm:flex-row gap-4 text-gray-700 font-medium">
          <li className="hover:text-orange-600 cursor-pointer">Company</li>
          <li className="hover:text-orange-600 cursor-pointer">Products</li>
          <li className="hover:text-orange-600 cursor-pointer">Offices</li>
          <li className="hover:text-orange-600 cursor-pointer">About</li>
          <li className="hover:text-orange-600 cursor-pointer">Contact</li>
        </ul>

        <div className="flex gap-6 mt-4">
          <a href="#">
            <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition" />
          </a>
          <a href="#">
            <FaTwitter className="text-blue-400 text-2xl hover:scale-110 transition" />
          </a>
          <a href="#">
            <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition" />
          </a>
          <a href="#">
            <FaWhatsapp className="text-green-500 text-2xl hover:scale-110 transition" />
          </a>
        </div>

        <div className="w-full max-w-4xl border-t border-gray-300 mt-6"></div>

        <p className="text-sm text-gray-600 text-center mt-4">
          © 2025 Shopper. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;