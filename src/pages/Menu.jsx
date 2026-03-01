import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAdmin } from "../useAuth";

const MobileMenu = ({isOpen,setIsOpen}) => {
  //const [isOpen, setIsOpen] = useState(true);
  const {data:admin}=useAdmin();

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6 text-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            About
          </Link>

          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Products
          </Link>

          <Link
            to="/add"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            {admin ? "Add" : ""}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;