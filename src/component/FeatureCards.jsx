import React from "react";
import { FiShield, FiHeadphones, FiTv, FiServer } from "react-icons/fi";

function FeatureCards() {
  const features = [
    {
      icon: <FiShield size={38} className="text-red-200" />,
      title: "Secured",
      description: "Our team ensures your streaming is always safe and secure.",
    },
    {
      icon: <FiHeadphones size={38} className="text-red-200" />,
      title: "Support",
      description: "We are available 24/7 on Live Chat to resolve any issues.",
    },
    {
      icon: <FiTv size={38} className="text-red-200" />,
      title: "Channels",
      description:
        "We provide Premium Channels from the UK, USA, Canada, & more.",
    },
    {
      icon: <FiServer size={38} className="text-red-200" />,
      title: "100% Uptime",
      description: "With over 100 stable servers, downtime is not a concern.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-red-50 via-red-100 to-red-200 py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-950 to-red-800 animate-pulse">
          Why Choose Us?
        </h2>
        <p className="text-lg text-red-700 mt-2">
          Discover the features that make our IPTV service stand out.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative w-72 h-80 perspective-1000 mx-auto group"
          >
            <div className="relative w-full h-full rounded-[50px] bg-gradient-to-br from-red-300 to-red-600 transition-transform duration-500 ease-in-out transform-style-preserve-3d shadow-[rgba(71,17,17,0)_40px_50px_25px_-40px,_rgba(71,17,17,0.2)_0px_25px_25px_-5px] group-hover:rotate-3d-[1,1,0,30deg] group-hover:scale-105 group-hover:shadow-[rgba(71,17,17,0.3)_30px_50px_25px_-40px,_rgba(71,17,17,0.1)_0px_25px_30px_0px]">
              <div className="absolute inset-2 rounded-[55px] rounded-tr-[100%] bg-gradient-to-t from-red-600 to-red-700  50 translate-z-[25px] border-l border-b border-white transition-all duration-500 ease-in-out group-hover:translate-z-[30px] group-hover:shadow-lg">
                <div className="p-10 pl-7 translate-z-[26px]">
                  <div className="mb-4 flex justify-center animate-bounce">{feature.icon}</div>
                  <span className="block text-white font-extrabold text-xl">
                    {feature.title}
                  </span>
                  <span className="block mt-5 text-black text-sm">
                    {feature.description}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between px-3 translate-z-[26px]">
                <div className="flex gap-3">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[rgba(71,17,17,0.5)_0px_7px_5px_-5px] hover:bg-black active:bg-yellow-300 transition-transform duration-500 group-hover:scale-110">
                    <svg
                      className="w-4 fill-red-950 hover:fill-white active:fill-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;
