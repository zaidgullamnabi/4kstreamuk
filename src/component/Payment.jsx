import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutPage = () => {
  const location = useLocation();
  const { title, price } = location.state || {};

  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  // Fetch Client Secret
  useEffect(() => {
    const fetchClientSecret = async () => {
      if (!price) return;

      try {
        const amountInCents = Math.round(price * 100);
        const response = await fetch(
          "http://localhost:5000/api/v1/payment/process",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: amountInCents }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to initialize payment.");
        }

        const data = await response.json();
        if (data.success && data.client_secret) {
          setClientSecret(data.client_secret);
        } else {
          throw new Error("Invalid response from server.");
        }
      } catch (err) {
        setError(`Error initializing payment: ${err.message}`);
      }
    };

    fetchClientSecret();
  }, [price]);

  // Handle Payment Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded. Please refresh the page.");
      return;
    }

    setLoading(true);

    try {
      const cardElement = elements.getElement(CardElement);
      const { error: cardError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            name: "Customer Name", // Update this to dynamically capture customer name
          },
        });

      if (cardError) {
        throw new Error(cardError.message);
      }

      const { error: confirmError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      if (paymentIntent.status === "succeeded") {
        alert("Thank you! Your order has been placed, soon you'll receive an email from our side.");
      } else {
        setError("Payment could not be completed. Please try again.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
    hidePostalCode: true,
  };

  return (
    <div className="bg-gradient-to-r from-red-700 via-red-800 to-red-950 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-red-50 rounded-lg shadow-lg p-8 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 tracking-wide">
            Checkout
          </h2>
          <p className="mt-2 text-gray-600">Complete your purchase securely.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Order Summary
            </h3>
            <p className="text-gray-600">Subscription: {title || "Plan"}</p>
            <p className="text-gray-600">
              Price: £{price?.toFixed(2) || "0.00"}
            </p>
          </div>

          <div>
            <label
              htmlFor="card-element"
              className="block text-gray-700 font-medium mb-2"
            >
              Card Details
            </label>
            <div className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm">
              <CardElement options={cardElementOptions} />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !stripe || !elements || !clientSecret}
            className={`w-full py-3 px-6 bg-gradient-to-r from-red-700 via-red-800 to-red-950 
              hover:via-red-700 hover:to-red-800 focus:outline-none focus:ring-4 
              focus:ring-red-500 text-white font-medium rounded-full transition 
              duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 
              hover:-translate-y-1 ${
                loading || !stripe || !elements || !clientSecret
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
