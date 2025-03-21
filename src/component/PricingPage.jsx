import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const logo = "/assets/logo.jpg"; 

function PricingPage() {
  const [pricingType, setPricingType] = useState(1); // 1: Monthly, 2: Yearly, 3: Multiroom
  const [selectedConnections, setSelectedConnections] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.3;
      const element = document.getElementById("pricing-cards");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerPoint) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOrderClick = (plan) => {
    const price =
      pricingType === 3
        ? plan.prices[selectedConnections]
        : parseFloat(plan.price.replace("£", "").trim());
    navigate("/subform", {
      state: {
        title: plan.title,
        price,
        connections: pricingType === 3 ? selectedConnections : 1,
      },
    });
  };

  const monthlyPlans = [
    {
      title: "1 Month",
      price: "£13.00",
      duration: "/ Month",
      description: "Unlimited Entertainment: 30 Days of Nonstop IPTV Bliss!",
      details: [
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
      ],
    },
    {
      title: "3 Months",
      price: "£25.00",
      duration: "/ 3 Months",
      description: "Stream Smarter: 90 Days of Premium IPTV Entertainment",
      details: [
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
      ],
    },
    {
      title: "6 Months",
      price: "£45.00",
      duration: "/ 6 Months",
      description: "Endless Entertainment: 6 Months of Premium IPTV",
      details: [
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
      ],
    },
  ];

  const yearlyPlans = [
    {
      title: "1 Year",
      price: "£60.00",
      duration: "/ Year",
      description: "365 Days of Uninterrupted IPTV Entertainment",
      details: [
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
      ],
    },
    {
      title: "1 Year (Two Connections)",
      price: "£95.00",
      duration: "/ 2 Years",
      description: "Experience IPTV Premium for 2 Full Years",
      details: [
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
      ],
    },
    {
      title: "Lifetime",
      price: "£300.00",
      duration: "/ Lifetime",
      description: "Lifetime IPTV Access with Unlimited Entertainment",
      details: [
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
      ],
    },
  ];

  const multiRoomPlans = [
    {
      title: "1 Month",
      duration: "/ 1 Month",
      description: "Unlimited Entertainment: 30 Days of IPTV Bliss!",
      prices: {
        1: 13.0,
        2: 20.0,
        3: 28.0,
      },
      details: [
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
      ],
    },
    {
      title: "3 Months",
      duration: "/ 3 Months",
      description: "Stream Smarter: 90 Days of Premium IPTV Entertainment",
      prices: {
        1: 25.0,
        2: 40.0,
        3: 60.0,
      },
      details: [
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
      ],
    },
    {
      title: "6 Months",
      duration: "/ 6 Months",
      description: "Endless Entertainment: 6 Months of Premium IPTV",
      prices: {
        1: 45.0,
        2: 70.0,
        3: 90.0,
      },
      details: [
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
      ],
    },
  ];

  const activePlans =
    pricingType === 1
      ? monthlyPlans
      : pricingType === 2
      ? yearlyPlans
      : multiRoomPlans;

  return (
    <section className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 py-20 px-4 min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">
          Choose Your Plan
        </h2>
        <p className="text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
          Flexible and affordable pricing for everyone, tailored to your
          entertainment needs.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-12">
        <div className="bg-red-950/50 p-1 rounded-lg inline-flex">
          <button
            className={`px-8 py-3 font-semibold rounded-lg transition duration-300 ${
              pricingType === 1
                ? "bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setPricingType(1)}
          >
            MONTHLY
          </button>
          <button
            className={`px-8 py-3 font-semibold rounded-lg transition duration-300 ${
              pricingType === 2
                ? "bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setPricingType(2)}
          >
            YEARLY
          </button>
          <button
            className={`px-8 py-3 font-semibold rounded-lg transition duration-300 ${
              pricingType === 3
                ? "bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setPricingType(3)}
          >
            MULTI ROOM
          </button>
        </div>
      </div>

      {/* Connection Selection (only show for Multi Room) */}
      {pricingType === 3 && (
        <div className="flex justify-center mb-8 gap-4">
          {[1, 2, 3].map((connections) => (
            <button
              key={connections}
              className={`px-6 py-3 font-semibold rounded-full transition duration-300 ${
                selectedConnections === connections
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedConnections(connections)}
            >
              {connections} Connection{connections > 1 ? "s" : ""}
            </button>
          ))}
        </div>
      )}

      {/* Pricing Cards */}
      <div
        id="pricing-cards"
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
      >
        {activePlans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 text-center transform transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } hover:scale-105 hover:shadow-2xl border border-gray-100 overflow-hidden`}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-700 to-red-900"></div>
            <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-red-700/10 to-red-900/10 rounded-full blur-xl"></div>

            <img
              src={logo}
              alt="Logo"
              className="mx-auto mb-6 w-20 h-20 object-contain"
            />

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {plan.title}
            </h3>

            <div className="mb-6">
              <span className="text-4xl font-bold text-red-900">
                {pricingType === 3
                  ? `£${plan.prices[selectedConnections].toFixed(2)}`
                  : plan.price}
              </span>
              <span className="text-lg text-gray-600 ml-2">
                {plan.duration}
              </span>
            </div>

            <p className="text-gray-600 mb-8 h-16">{plan.description}</p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>

            <ul className="text-left space-y-4 mb-8">
              {pricingType === 3 && (
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-red-700">✔</span>
                  <span className="font-medium">
                    {selectedConnections} Device
                    {selectedConnections > 1 ? "s" : ""} Connection
                  </span>
                </li>
              )}
              {plan.details.map((detail, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="mr-2 text-red-700">✔</span>
                  <span className="font-medium">{detail}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleOrderClick(plan)}
              className="w-full py-4 px-8 bg-gradient-to-r from-red-950 to-red-700 text-white text-lg font-semibold rounded-xl hover:from-red-900 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-red-500/50 focus:outline-none"
            >
              ORDER NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingPage;
