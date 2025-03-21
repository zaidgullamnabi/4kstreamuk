import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Info,
  ChevronLeft,
  ChevronRight,
  Film,
  Trophy,
} from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "Unlimited Entertainment",
      subtitle: "Movies • TV Shows • Sports • Kids",
      description:
        "Stream thousands of shows and movies in stunning 4K quality. Start your entertainment journey today.",
      image: "/assets/41.jpg",
      tagline: "New & Exclusive",
      features: ["4K Ultra HD", "Live Sports", "Premium Content"],
      icon: Film,
    },
    {
      title: "DISCOVER OUR PREMIUM CHANNELS",
      subtitle: "Premier League • NFL • NBA • F1",
      description:
        "Experience the thrill of live sports with crystal clear streaming and multi-device support.",
      image: "/assets/subscribe.jpg",
      tagline: "Live & Exclusive",
      features: ["No Delay", "Multi-cam", "Stats"],
      icon: Trophy,
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            currentSlide === index
              ? "translate-x-0 opacity-100"
              : index < currentSlide
              ? "-translate-x-full opacity-0"
              : "translate-x-full opacity-0"
          }`}
        >
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/95" />

          {/* Background Image with Enhanced Ken Burns effect */}
          <img
            src={slide.image}
            alt={slide.title}
            className={`h-full w-full object-cover transform scale-110 transition-transform duration-[8000ms] ${
              currentSlide === index ? "scale-100" : "scale-110"
            }`}
          />
        </div>
      ))}

      {/* Content Layer */}
      <div className="relative h-full">
        <div className="container mx-auto px-6 h-full flex items-center">
          {/* Left Content */}
          <div className="max-w-2xl space-y-6 z-10">
            <div
              className={`transition-all duration-700 ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {/* Icon & Tagline Badge */}
              <div className="flex items-center gap-3 mb-4">
                {React.createElement(slides[currentSlide].icon, {
                  className: "w-6 h-6 text-red-500 animate-bounce",
                })}
                <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full animate-pulse">
                  {slides[currentSlide].tagline}
                </span>
              </div>

              {/* Enhanced Title Section with Smaller Size */}
              <div className="space-y-3">
                <h2 className="text-red-500 font-semibold text-lg tracking-wider uppercase opacity-0 animate-slideUp">
                  {slides[currentSlide].subtitle}
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight opacity-0 animate-slideUp animation-delay-100">
                  {slides[currentSlide].title}
                </h1>
              </div>

              {/* Enhanced Feature Tags */}
              <div className="flex gap-4 mt-6">
                {slides[currentSlide].features.map((feature, idx) => (
                  <span
                    key={feature}
                    className="text-sm text-gray-300 border border-gray-600 rounded-full px-4 py-2 opacity-0 animate-slideUp backdrop-blur-sm hover:border-red-500 transition-all duration-300"
                    style={{ animationDelay: `${idx * 100 + 200}ms` }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 max-w-lg mt-6 opacity-0 animate-slideUp animation-delay-200 leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-8 opacity-0 animate-slideUp animation-delay-300">
                <Link
                  to="/shopping"
                  className="group flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="group flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  <Info className="w-5 h-5 transition-transform group-hover:scale-110" />
                  View Plans
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative"
            >
              <div
                className={`w-16 h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-red-600" : "bg-gray-600"
                } hover:bg-red-400`}
              >
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-progress" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-progress {
          animation: progress 8s linear;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
