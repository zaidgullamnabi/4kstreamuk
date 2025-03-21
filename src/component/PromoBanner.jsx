import React from "react";

const PromoBanner = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="flex w-11/12 max-w-6xl overflow-hidden rounded-lg shadow-2xl space-x-6">
        {/* Left Side - Free Trial Card */}
        <div className="relative w-1/2 p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase text-gray-500">
              Limited Time Offer
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-800">
              Free Trial: Experience the Magic
            </h2>
            <p className="mt-4 text-gray-600">
              Unlock a world of possibilities with our free trial. Explore our
              features and see why we're the best.
            </p>
            <button className="px-8 py-3 mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition duration-300 ease-in-out">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Right Side - Explore Plans Card */}
        <div className="relative w-1/2 p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase text-gray-500">
              Choose Your Plan
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-800">
              Flexible Plans to Fit Your Needs
            </h2>
            <p className="mt-4 text-gray-600">
              Find the perfect plan that suits your budget and requirements.
              Enjoy exclusive benefits and premium features.
            </p>
            <button className="px-8 py-3 mt-6 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-md transition duration-300 ease-in-out">
              Explore Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
