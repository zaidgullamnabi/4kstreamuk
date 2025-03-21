import React from "react";
import { useNavigate } from "react-router-dom";

export const Banner2 = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/shopping");
  };

  const handleNavigateToHome = () => {
    navigate("/pricing");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen px-4 bg-gradient-to-r from-red-50 via-red-100 to-red-200">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Free Trial Card */}
        <div className="group relative flex flex-col justify-between items-center text-center rounded-[30px] p-6 sm:p-8 md:p-10 shadow-lg transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-red-600 via-red-700 to-transparent">
          {/* Blurred Overlay */}
          <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-r from-transparent to-red-900/50 opacity-80 rounded-[35px] border border-white/50"></div>
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300 uppercase">
              Feeling Unsure?
            </p>
            <h2 className="mt-2 text-lg sm:text-2xl md:text-3xl font-bold text-white">
              Try It For Free!
            </h2>
            <p className="mt-4 text-xs sm:text-sm md:text-base text-white/80">
              Start your journey with a free trial. No commitments, just
              explore.
            </p>
          </div>
          <button
            onClick={handleNavigate}
            className="mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white text-teal-700 font-semibold rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 text-sm sm:text-base"
          >
            Start Free Trial →
          </button>
        </div>

        {/* Tailored Plans Card */}
        <div className="group relative flex flex-col justify-between items-center text-center rounded-[30px] p-6 sm:p-8 md:p-10 shadow-lg transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-red-700 via-red-800 to-transparent">
          {/* Blurred Overlay */}
          <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-r from-transparent to-red-950/50 opacity-80 rounded-[35px] border border-white/50"></div>
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300 uppercase">
              Your Perfect Plan
            </p>
            <h2 className="mt-2 text-lg sm:text-2xl md:text-3xl font-bold text-white">
              Plans Tailored For You
            </h2>
            <p className="mt-4 text-xs sm:text-sm md:text-base text-white/80">
              Explore flexible plans designed to meet your needs. Let’s get
              started.
            </p>
          </div>
          <button
            onClick={handleNavigateToHome}
            className="mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white text-red-700 font-semibold rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 text-sm sm:text-base"
          >
            View Plans →
          </button>
        </div>
      </div>
    </div>
  );
};
