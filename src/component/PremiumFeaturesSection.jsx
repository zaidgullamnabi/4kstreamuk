import React, { useState, useEffect, useRef } from "react";
import { FaCrown, FaUsers, FaServer } from "react-icons/fa";
import CountUp from "react-countup";
const img1 = "/assets/shock.jpg"; 


function PremiumFeaturesSection() {
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
      className="bg-gradient-to-r from-red-50 via-red-100 to-red-200 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-[20%] relative"
      ref={ref}
    >
      {/* Floating Background Design */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(0,0,0,0.05)] to-[rgba(0,0,0,0)] rounded-[50px] blur-2xl -z-10" />

      {/* Image Collage */}
      <div className="flex flex-wrap items-center justify-center md:justify-start mb-10 md:mb-0 relative">
        <div className="relative flex flex-col items-center space-y-10 space-x-10 animate-upDown">
          <img
            src={img1}
            alt="Android"
            className="rounded-full shadow-xl border-4 object-cover  w-[300px] h-[300px] bg-gray-200 transform transition-all duration-500 hover:scale-110"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-lg text-center md:text-left">
        {/* Header */}
        <div className="flex items-center justify-center md:justify-start mb-4">
          <FaCrown size={48} className="text-red-950 animate-spin-slow mr-3" />
          <span className="text-lg font-semibold text-red-950 uppercase tracking-wide">
            Premium Features of 4K Stream Uk
          </span>
        </div>

        {/* Title and Description */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-950 mb-4">
          Experience IPTV Like Never Before
        </h2>
        <p className="text-lg text-red-800 leading-relaxed mb-8">
          Transform your entertainment journey with our advanced IPTV service,
          offering unmatched streaming quality, robust infrastructure, and an
          unparalleled channel lineup.
        </p>

        {/* Statistics Section */}
        <div className="flex space-x-8 justify-center md:justify-start">
          <div className="text-center">
            <FaUsers
              size={48}
              className="mx-auto mb-2 text-red-950 animate-bounce"
            />
            <p className="text-3xl font-bold text-red-900">
              {startCount ? (
                <CountUp start={0} end={71000} duration={3} separator="," />
              ) : (
                0
              )}
              +
            </p>
            <span className="text-2xl text-red-700">Clients</span>
          </div>
          <div className="text-center">
            <FaServer
              size={48}
              className="mx-auto mb-2 text-red-950 animate-bounce"
            />
            <p className="text-3xl font-bold text-red-900">
              {startCount ? (
                <CountUp start={0} end={500} duration={3} separator="," />
              ) : (
                0
              )}
              +
            </p>
            <span className="text-2xl text-red-700">Servers</span>
          </div>
          <div className="text-center">
            <FaUsers
              size={48}
              className="mx-auto mb-2 text-red-950 animate-bounce"
            />
            <p className="text-3xl font-bold text-red-900">
              {startCount ? (
                <CountUp start={0} end={27} duration={3} separator="," />
              ) : (
                0
              )}
              +
            </p>
            <span className="text-2xl text-red-700">Team Members</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumFeaturesSection;
