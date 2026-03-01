import React from "react";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../pages/Footer";

const About = () => {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-gray-800">

      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-gray-700">SHOPPER</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          We are committed to delivering high-quality products with exceptional
          customer service. Our goal is to make online shopping simple,
          secure, and enjoyable for everyone.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/ahero.jfif"
            alt="About"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Shopper was founded with a vision to provide customers with
            affordable and premium products. We focus on quality, trust,
            and long-term relationships.
          </p>
          <p className="text-gray-700">
            With thousands of happy customers, we continue to expand
            and innovate in the world of eCommerce.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaShippingFast className="text-4xl mx-auto mb-4 text-gray-700" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable delivery service at your doorstep.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaLock className="text-4xl mx-auto mb-4 text-gray-700" />
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">
              Your transactions are fully protected and secure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaHeadset className="text-4xl mx-auto mb-4 text-gray-700" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our support team is always ready to help you.
            </p>
          </div>

        </div>
      </section>

      <section className="text-center py-20 px-6 mt-15">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Shopping?
        </h2>
        <p className="text-gray-700 mb-8">
          Explore our products and experience the best online shopping platform.
        </p>
        <button onClick={()=>navigate("/products")} className="bg-gray-800 text-white px-8 py-3 rounded-xl hover:bg-gray-900 transition">
          Explore Products
        </button>
      </section>
      <div className="mt-35">
        <Footer/>
      </div>
    </div>
  );
};

export default About;