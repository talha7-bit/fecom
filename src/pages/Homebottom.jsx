import React from "react";

const Homebottom = () => {
  const features = [
    {
      title: "Premium Quality",
      desc: "Crafted with attention to detail using high-quality materials for long-lasting comfort.",
      icon: "✨",
    },
    {
      title: "Fast Delivery",
      desc: "Quick and reliable shipping to ensure your order reaches you on time.",
      icon: "🚚",
    },
    {
      title: "Secure Payment",
      desc: "Safe and secure transactions with trusted payment gateways.",
      icon: "🔒",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 py-20 px-6">
      
      <div className="max-w-6xl mx-auto text-center space-y-14">
        

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We focus on delivering the best shopping experience with quality,
            reliability, and customer satisfaction at the core.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Homebottom;