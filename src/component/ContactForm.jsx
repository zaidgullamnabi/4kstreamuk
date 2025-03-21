import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration (REPLACE WITH YOUR CREDENTIALS!)
    const serviceID = "service_onmey3c";
    const templateID = "template_4a9xd68";
    const publicKey = "nGzV5a-x3CnHcz51M";

    const templateParams = {
      to_name: "IPTV",
      from_name: formData.from_name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatusMessage("Your message has been sent!");
        setFormData({ from_name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setStatusMessage("Failed to send your message. Please try again.");
      });
  };

  return (
    <div className="bg-gradient-to-r from-red-50 via-red-100 to-red-200 py-12 flex items-center justify-center min-h-screen">
      {" "}
      {/* Added padding */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        {" "}
        {/* Added larger shadow */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {" "}
          {/* Larger heading */}
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {" "}
          {/* Increased spacing */}
          <div className="relative">
            {" "}
            {/* Added relative wrapper for icon */}
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" // Added transition
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {" "}
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject of Inquiry"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            rows="5"
            required
          />
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-red-700 via-red-800 to-red-950 hover:via-red-700 hover:to-red-800 focus:outline-none focus:ring-4 focus:ring-red-500 text-white font-medium rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
        {statusMessage && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
