import React from "react";

const ResellerPackages = () => {
  const handleWhatsAppOrder = () => {
    const phoneNumber = "+447366436874";
    const message = encodeURIComponent(
      "Hello, I am interested in your reseller packages!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="bg-gradient-to-r from-red-700 via-red-800 to-red-950 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Reseller Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Pack */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-105 flex flex-col items-center">
            <div className="bg-gradient-to-r from-red-700 via-red-800 to-red-950 py-8 px-10 text-white w-full text-center">
              <h3 className="text-2xl font-semibold mb-3 text-yellow-300">
                BASIC PACK
              </h3>
              <p className="text-xl font-medium">£50.00/mo</p>
            </div>
            <div className="p-6 flex-grow w-full flex flex-col items-center">
              <p className="text-gray-700 mb-4 text-center text-sm w-3/4">
                Become a Partner and double your money.
              </p>
              <div className="mb-6 w-3/4">
                <h4 className="text-base font-medium text-red-700 mb-2 text-center">
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-center text-sm">
                  <li>8 Credits included</li>
                  <li>£5.00 per additional Credit</li>
                  <li>Top-up required on activation</li>
                  <li>24/7 Reseller Support</li>
                  <li>Instant Activation</li>
                </ul>
              </div>
              <div className="mb-6 w-3/4">
                <h4 className="text-base font-medium text-red-700 mb-2 text-center">
                  Top-up Bundles
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-center text-sm">
                  <li>£100 for 20 Credits</li>
                  <li>£200 for 50 Credits</li>
                  <li>£300 for 80 Credits</li>
                  <li>£500 for 150 Credits</li>
                  <li>£1000 for 550 Credits</li>
                  <li>Contact Support for Top-up</li>
                </ul>
              </div>
              <div className="mt-8 w-3/4">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 px-6 bg-gradient-to-r from-red-700 via-red-800 to-red-950 hover:via-red-700 hover:to-red-800 focus:outline-none focus:ring-4 focus:ring-red-500 text-white font-medium rounded-full transition duration-300 shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* Unlimited Pack */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-105 flex flex-col items-center">
            <div className="bg-gradient-to-r from-red-700 via-red-800 to-red-950 py-8 px-10 text-white w-full text-center">
              <h3 className="text-2xl font-semibold mb-3 text-yellow-300">
                UNLIMITED PACK
              </h3>
              <p className="text-xl font-medium">£350.00/mo</p>
            </div>
            <div className="p-6 flex-grow w-full flex flex-col items-center">
              <p className="text-gray-700 mb-4 text-center text-sm w-3/4">
                Take advantage of our Unlimited Credits Panel.
              </p>
              <div className="mb-6 w-3/4">
                <h4 className="text-base font-medium text-red-700 mb-2 text-center">
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-center text-sm">
                  <li>Unlimited Credits Panel</li>
                  <li>No Top-ups Required</li>
                  <li>24/7 Reseller Support</li>
                  <li>Instant Activation</li>
                </ul>
              </div>
              <div className="mb-6 w-3/4">
                <h4 className="text-base font-medium text-red-700 mb-2 text-center">
                  Credit Usage
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-center text-sm">
                  <li>12 Hour Pass = 1 credit</li>
                  <li>1 Month = 1 Credit</li>
                  <li>3 Months = 3 Credits</li>
                  <li>6 Months = 6 Credits</li>
                  <li>12 Months = 4 Credits</li>
                  <li>Multiscreen Available</li>
                </ul>
              </div>
              <div className="mt-8 w-3/4">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 px-6 bg-gradient-to-r from-red-700 via-red-800 to-red-950 hover:via-red-700 hover:to-red-800 focus:outline-none focus:ring-4 focus:ring-red-500 text-white font-medium rounded-full transition duration-300 shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellerPackages;
