import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-6 mt-5">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      
        <div className="flex-1 text-center lg:text-left space-y-6">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Discover Your Perfect <span className="text-gray-700">Style</span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
            Shop the latest trends with premium quality and unbeatable prices.
            Elevate your wardrobe with confidence and comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:scale-105 transition duration-300 shadow-lg">
              Shop Now
            </button>

            <button className="px-8 py-3 border-2 border-black text-black rounded-full text-lg font-medium hover:bg-black hover:text-white transition duration-300">
              Explore Collection
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-6 backdrop-blur-md">
            <img
              src="/hero.jpeg"
              alt="Fashion"
              className="rounded-2xl"
            />
          </div>

          <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-gray-400 rounded-full blur-3xl opacity-30"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;