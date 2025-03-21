import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Form2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, price } = location.state || {};

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyname: "",
    country: "",
    state: "",
    town: "",
    streetAddress1: "",
    streetAddress2: "",
    zipcode: "",
    phone: "",
    additionalInfo: "",
    device:""
  });
  const Devices = [
    "Smart TV (Samsung/Sony/LG)",
    "Fire TVStick/Fire TVStick 4K/Fire TVCube",
    "Android (Smartphones/Android Box)",
    "STB",
    "MAGBOX",
    "Enigma2/Dreambox/Vu+",
    "Dreamlink",
    "AVOV BOX/Formuler",
    "iOS (Apple/Phone/iPad)",
    "Others Device"
  ];


  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Send email function using Email.js
  const sendEmail = (e) => {
    e.preventDefault();

    const emailParams = {
      to_name: "IPTV",
      from_name: formData.firstName + " " + formData.lastName, // Combining first and last name
      email: formData.email,
      message: `
    Customer Name: ${formData.firstName} ${formData.lastName}
    Email: ${formData.email}
    Company Name: ${formData.companyname || "N/A"}
    Phone: ${formData.phone || "N/A"}
    Country: ${formData.country || "N/A"}
    State: ${formData.state || "N/A"}
    Town: ${formData.town || "N/A"}
    Street Address 1: ${formData.streetAddress1 || "N/A"}
    Street Address 2: ${formData.streetAddress2 || "N/A"}
    Zip Code: ${formData.zipcode || "N/A"}
    Device : ${formData.device || "N/A"}
    Additional Information: ${formData.additionalInfo || "None provided"} 
  `,
    };
    emailjs
      .send(
        "service_onmey3c",
        "template_4a9xd68",
        emailParams,
        "nGzV5a-x3CnHcz51M"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setStatusMessage("Your subscription details has been sent!");
        setFormData({
          username: "",
          email: "",
          companyname: "",
          country: "",
          state: "",
          town: "",
          streetAddress1: "",
          streetAddress2: "",
          zipcode: "",
          phone: "",
          additionalInfo: "",
          device:""
        });
        navigate("/payment", { state: { title, price } });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setStatusMessage("Failed to send your message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 via-red-100 to-red-200  flex justify-center items-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Configure</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {" "}
              {/* Improved paragraph styling */}
              Configure your desired options and continue to checkout.
            </p>
            {/* Features Section */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-inner border border-gray-200">
              {" "}
              {/* Refined features section */}
              <div className="flex justify-between items-center mb-4">
                {" "}
                {/* Price and Title Container */}
                <h3 className="text-lg font-medium text-gray-800">
                  {title || "Free Trial - 12 Hours"}
                </h3>
                <p className="text-lg font-semibold text-blue-600">
                  £{price || "0.00"}
                </p>{" "}
                {/* Highlighted price */}
              </div>
              <ul className="text-gray-700 text-sm space-y-3 leading-relaxed">
                {" "}
                {/* Improved list styling */}
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  16,000+ Channels
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  66,000+ Movies & VOD
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  4K / FHD / HD Quality
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  US / UK / EU / Asian Content
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Plus Extra Countries (Worldwide)
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Full EPG & M3U Support
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Works with All Apps (or M3U)
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  No VPN Required (Most Locations)
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Movies On Demand
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  TV Shows On Demand
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  24/7 Live Chat Support
                </li>
              </ul>
            </div>
            {/* Form Section */}
            <form
              onSubmit={sendEmail}
              className="space-y-6 bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Subscription Form
              </h2>

              {/* Customer Name: First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="companyname"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              <label
                  htmlFor="device"
                  className="block text-gray-700 font-medium "
                >
                  Device
                </label>
              <select
                  id="device"
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  className="w-full px-4  py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Select a device</option>
                  {Devices.map((device) => (
                    <option key={device} value={device}>
                      {device}
                    </option>
                  ))}
                </select>
              <div>
                <label
                  htmlFor="device"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Country/Region *
                </label>
                <input
  type="text"
  id="country"
  name="country"
  value={formData.country}
  onChange={handleChange}
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Enter your country or region"
  required
/>

              </div>

              {/* states  */}
              <div>
                <label
                  htmlFor="state"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Select State
                </label>
                <input
  type="text"
  id="state"
  name="state"
  value={formData.state}
  onChange={handleChange}
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Enter your state"
  required
/>

              </div>
              {/* town */}
              <div>
                <label
                  htmlFor="town"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your town"
                />
              </div>
              <div>
                <label
                  htmlFor="streetAddress1"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="streetAddress1"
                  name="streetAddress1"
                  value={formData.streetAddress1}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="House number and street name "
                />
                <input
                  type="text"
                  id="streetAddress2"
                  name="streetAddress2"
                  value={formData.streetAddress2}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Apartment,suite Unit,etc.(optional)"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone *
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Other fields remain the same */}

              <div>
                <label
                  htmlFor="zipcode"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the Zip Code"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="additional-info"
                  className="block font-medium text-3xl text-gray-700"
                >
                  Additional Information:
                </label>
                <p className="mt-1 text-sm text-gray-500">Order notes (Optional)</p>
                <textarea
                  id="additional-info" // This is fine to leave as is
                  name="additionalInfo" // Change this to match the key in formData
                  rows="6"
                  value={formData.additionalInfo} // Add this to bind the textarea value
                  onChange={handleChange} // Ensure changes are handled
                  placeholder="Enter any additional details here..."
                  className="mt-2 block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-red-700 via-red-800 to-red-950 hover:via-red-700 hover:to-red-800 focus:outline-none focus:ring-4 focus:ring-red-500 text-white font-medium rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                Confirm Subscription
              </button>
            </form>

            {statusMessage && (
              <p className="mt-4 text-center text-sm text-gray-700">
                {statusMessage}
              </p>
            )}
          </div>
          {/* Right Section */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              {" "}
              {/* Main container with white background, shadow, and subtle border */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">
                {" "}
                {/* Improved heading style */}
                Order Summary
              </h3>
              <div className="mb-6 space-y-2">
                {" "}
                {/* Improved spacing */}
                <div className="flex justify-between items-center">
                  {" "}
                  {/* Product info with flexbox */}
                  <p className="text-gray-700 font-medium">
                    {title || "Free Trial - 12 Hours"}
                  </p>{" "}
                  {/* Darker text for product name */}
                  {price !== "0" && price !== 0 && (
                    <p className="text-gray-600 text-sm">£{price}</p>
                  )}{" "}
                  {/* Conditionally render price if not 0 */}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  {" "}
                  {/* Separator line */}
                  <div className="flex justify-between items-center">
                    <p className="text-gray-700 font-medium">Total</p>
                    <p className="text-2xl font-bold text-blue-600">
                      £{price || "0.00"}
                    </p>
                  </div>
                </div>
              </div>
              {/*       <div className="text-blue-600 text-2xl font-bold mb-4">
        £{price || "0.00"}
      </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
