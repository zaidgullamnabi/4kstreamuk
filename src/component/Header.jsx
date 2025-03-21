import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo (2).png";

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-red-950 to-red-700 shadow-lg relative">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            4KStream<span className="text-red-300">UK</span>
          </h1>
          </Link>
        </div>

        {/* Menu Button for Small Screens */}
        <button
          className="md:hidden text-white hover:text-gray-200 focus:outline-none transform hover:scale-110 transition-transform duration-300"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links for Large Screens */}
        <div className="hidden md:flex space-x-8 text-white font-semibold text-lg">
          {[
            { to: "/", text: "Home" },
            { to: "/shopping", text: "Free Trial" },
            { to: "/pricing", text: "Pricing" },
            { to: "/sellercard", text: "Become a Reseller" },
            {
              to: "installguide",
              text: "Installation Guide",
            },
            { to: "/form", text: "Contact Us" },
          ].map((link) =>
            link.href ? (
              <a
                key={link.text}
                href={link.href}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-800/50 hover:text-gray-200 transform hover:-translate-y-1"
              >
                {link.text}
              </a>
            ) : (
              <Link
                key={link.text}
                to={link.to}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-800/50 hover:text-gray-200 transform hover:-translate-y-1"
              >
                {link.text}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gradient-to-b from-red-950 to-red-900 w-64 z-20 shadow-lg`}
      >
        <div className="flex items-center justify-between p-4 border-b border-red-800">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-200 focus:outline-none transform hover:rotate-90 transition-transform duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4 text-white font-medium">
          {[
            { to: "/", text: "Home" },
            { to: "/shopping", text: "Free Trial" },
            { to: "/pricing", text: "Pricing" },
            { to: "/sellercard", text: "Become a Reseller" },
            { to: "installguide", text: "Installation Guide" },

            { to: "/form", text: "Contact Us" },
          ].map((link) =>
            link.href ? (
              <a
                key={link.text}
                href={link.href}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-800/50 hover:text-gray-200 transform hover:translate-x-2"
                onClick={toggleSidebar}
              >
                {link.text}
              </a>
            ) : (
              <Link
                key={link.text}
                to={link.to}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-800/50 hover:text-gray-200 transform hover:translate-x-2"
                onClick={toggleSidebar}
              >
                {link.text}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
