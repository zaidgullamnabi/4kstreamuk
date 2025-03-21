import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Shopping() {
  const location = useLocation();
  const { title, price } = location.state || {};

  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/subform", { state: { title: title, price: price || 0 } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-700 via-red-800 to-red-950 px-4 sm:px-6 py-20">
      {/* Light background for overall page */}
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg lg:w-96 overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-105">
        {/* Card with white background and rounded corners */}
        <div className="bg-gradient-to-l from-red-700 via-red-800 to-red-950 text-white p-4 sm:p-6">
          {/* Gradient header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-red-200">
              Free Trial Available!
            </h2>
            {/* Clearer header text */}
          </div>
          <p className="text-sm sm:text-base">
            Are you aware of the many cards available for free trial?
          </p>
          <button
            onClick={handleOrderClick}
            className="mt-4 bg-white text-red-800 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-red-100 hover:text-red-900 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
          >
            Start Free Trial
          </button>
        </div>
        <div className="p-4 sm:p-6">
          {/* Content area with padding */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base sm:text-lg font-semibold">
              {title || "Package Details"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {"£" + (price !== undefined ? price : 0)}
            </p>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            {/* Improved list styling */}
            <li>+16000 Channels</li>
            <li>+60000 Movies & VOD</li>
            <li>HD / FHD / UHD*</li>
            <li>UK / USA / IE / ASIAN</li>
            <li className="text-blue-600">Plus More Countries (WorldWide)</li>
            {/* Stronger color for emphasis */}
            <li className="text-green-600">ALL PPV & More</li>
            <li className="text-red-600">NO EPL/SPORTS on Trial</li>
            <li>Movies On Demand</li>
            <li>TV Shows On Demand</li>
            <li>24/7 Live Chat Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
