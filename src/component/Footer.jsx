import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-950 to-red-700 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/">
            <h2 className="text-4xl font-extrabold tracking-tight">
              4Kstream<span className="text-red-300">UK</span>
            </h2>
            </Link>
            <p className="text-base text-gray-300 leading-relaxed">
              Premium IPTV Service
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our 4K Stream UK service promises a fresh, immersive experience,
              delivering a seamless blend of quality, variety, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { to: "/shopping", text: "Free Trial" },
                { to: "/pricing", text: "Plans & Pricing" },
                { to: "/sellercard", text: "Become a Reseller" },
                { to: "https://wa.me/+447366436874?text= Hi I am interested in your services !", text: "Contact Us" },

              ].map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white flex items-center group transition-all duration-300"
                  >
                    <span className="text-lg transform group-hover:translate-x-2 transition-transform">
                      {link.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white tracking-wide">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:4kstreamukglobal@gmail.com"
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <svg
                  className="w-6 h-6 transform group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-lg">4kstreamukglobal@gmail.com</span>
              </a>
              <a
                href="https://wa.me/447366436874"
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <svg
                  className="w-6 h-6 transform group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-lg">+447366436874</span>
              </a>
            </div>
          </div>

          {/* Installation Guide */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white tracking-wide">
              Installation Guide
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Need help getting started? Check out our comprehensive
              installation guide for step-by-step instructions.
            </p>
            <Link
              to="/installguide"
              
              className="inline-block px-6 py-3 bg-red-800 hover:bg-red-700 text-lg font-medium text-white rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              View Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-800 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-300">
            © {new Date().getFullYear()} 4K Stream UK. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-300 hover:text-white transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
