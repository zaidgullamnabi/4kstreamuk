import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Banner2 } from './Banner2';

function PricingPage2() {
  const [selectedConnections, setSelectedConnections] = useState(1); // State for selected connections
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.3;
      const element = document.getElementById('pricing-cards');
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Price calculation function based on base price and selected connections
 

  // Pricing Plans
  const plans = [
    {
      title: "1 Month",
      basePrice: 13.00,
      duration: "/ 1 Month",
      description: "Unlimited Entertainment: 30 Days of IPTV Bliss!",
      prices: {
        1: 13.00,
        2: 16.00,  
        3: 25.00,  
      },
      
    },
    {
      title: "3 Months",
      basePrice: 25.00,
      duration: "/ 3 Months",
      description: "Stream Smarter: 90 Days of Premium IPTV Entertainment.",
      prices: {
        1: 25.00,
        2: 35.00,
        3: 40.00,
      },
      
    },
    {
      title: "6 Months",
      basePrice: 45.00,
      duration: "/ 6 Months",
      description: "Endless Entertainment: 6 Months of Premium IPTV.",
      prices: {
        1: 45.00,
        2: 48.00,
        3: 59.99,
      },
      
    },
    {
      title: "1 Year",
      basePrice: 50.00,
      duration: "/ 1 Year",
      description: "365 Days of Uninterrupted IPTV Entertainment.",
      prices: {
        1: 50.00,
        2: 70.00,
        3: 95.00,
      },
     
    },
  ];

  const features = [
    "+16000 Live Channels",
    "+60000 Movies & VOD",
    "SD / HD / FHD*",
    "UK / USA / IE / ASIAN",
    "Plus More Countries",
    "EPL / EFL / UFC / 3pm KOs",
    "ALL PPV & More",
    "All Devices are supported",
    "Anti Freeze System",
    "24/7 Live Chat Support",
  ];

  const handleOrderNow = (plan) => {
    // Retrieve the price for the selected connections
    const price = plan.prices[selectedConnections];
  
    // Navigate to the target page with the title and price in the state
    navigate('/shopping', { state: { title: plan.title, price, connections: selectedConnections } });
  };
  

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 py-16 px-4 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Choose Your Perfect Plan</h2>
      </div>

      {/* Connection Selection Buttons */}
      <div className="flex justify-center mb-8 flex-wrap gap-4">
        {[1, 2, 3].map((connection) => (
          <button
            key={connection}
            className={`px-6 py-3 font-semibold rounded-full transition duration-300 ${
              selectedConnections === connection
                ? "bg-yellow-500 text-gray-800"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedConnections(connection)}
          >
            {connection} Connection{connection > 1 ? "s" : ""}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div
        id="pricing-cards"
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
       {plans.map((plan, index) => (
  <div
    key={index}
    className={`bg-white shadow-xl rounded-lg p-6 text-center transform transition duration-500 ${
      isVisible ? "animate-fadeInLeft" : "opacity-0"
    }`}
  >
    <h3 className="text-xl font-semibold text-blue-600">{plan.title}</h3>
    <p className="text-3xl font-bold text-yellow-500">
    £{plan.prices[selectedConnections].toFixed(2)}{" "}
      <span className="text-lg font-normal text-gray-500">
        {plan.duration}
      </span>
    </p>
    <p className="text-gray-700 mt-2">{plan.description}</p>
    <hr className="my-4 border-gray-300" />
    <ul className="text-left space-y-2 text-gray-700 font-medium">
      <li>✔ {selectedConnections} Device{selectedConnections > 1 ? "s" : ""} Connection</li>
      {features.map((feature, idx) => (
        <li key={idx}>✔ {feature}</li>
      ))}
    </ul>
    <button
      className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-200"
      onClick={() => handleOrderNow(plan)} // Pass the plan to the handler
    >
      ORDER NOW
    </button>
  </div>
))}

      </div>
      <Banner2 />
    </section>
  );
}

export default PricingPage2;
