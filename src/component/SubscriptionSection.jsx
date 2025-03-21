import React, { useState, useEffect, useRef } from "react";
import { FaGlobe, FaTv, FaFilm, FaVideo } from "react-icons/fa";
import CountUp from "react-countup";
const img = "/assets/subscribe.jpg"; 

function SubscriptionSection() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      className="bg-gradient-to-br from-red-700 to-red-950 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-16 relative"
      ref={ref}
    >
      {/* Floating Background Design */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0)] rounded-[50px] blur-2xl -z-10" />

      {/* Text Content */}
      <div className="max-w-lg space-y-6">
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="animate-spin-slow rounded-full bg-white p-2">
            <FaGlobe size={32} className="text-red-950" />
          </div>
          <span className="text-lg font-semibold text-red-950 uppercase ml-3">
            Global Leader
          </span>
        </div>

        {/* Title and Description */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-black mb-4">
          Your Trusted IPTV Subscription Service
        </h2>
        <p className="text-lg text-white leading-relaxed">
          Experience cutting-edge entertainment with our IPTV platform. Enjoy a
          vast range of global channels, blockbuster movies, live sports, and
          exclusive shows in stunning quality. Stay ahead with the best in
          streaming technology.
        </p>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <div className="animate-bounce bg-red-950 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <FaTv size={32} className="text-red-300" />
            </div>
            <p className="text-3xl font-bold text-red-300 mt-3">
              {startCount ? (
                <CountUp start={0} end={11000} duration={3} separator="," />
              ) : (
                0
              )}
              +
            </p>
            <span className="text-2xl  text-white">Channels</span>
          </div>
          <div className="text-center">
            <div className="animate-bounce bg-red-950 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <FaFilm size={32} className="text-red-300" />
            </div>
            <p className="text-3xl font-bold text-red-300 mt-3">
              {startCount ? (
                <CountUp start={0} end={15000} duration={3} separator="," />
              ) : (
                0
              )}
              +
            </p>
            <span className="text-2xl text-white">TV Shows</span>
          </div>
          <div className="text-center">
            <div className="animate-bounce bg-red-950 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <FaVideo size={32} className="text-red-300" />
            </div>
            <p className="text-3xl font-bold text-red-300 mt-3">
              {startCount ? (
                <CountUp start={0} end={30000} duration={3} separator="," />
              ) : (
                0
              )}
              +
            </p>
            <span className="text-2xl text-white">Movies</span>
          </div>
        </div>
      </div>

      {/* TV Image Section */}
      <div className="animate-upDown">
        <img
          src={img}
          alt="4K TV"
          className="w-full max-w-sm object-contain rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default SubscriptionSection;
