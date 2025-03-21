import React, { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I Use My Subscription On Multiple Devices?",
      answer:
        "Yes, but simultaneous streaming is limited to one device at a time.",
    },
    {
      question: "How Soon Can I Start Using The Service?",
      answer: "You can start using the service immediately after activation.",
    },
    {
      question: "What Internet Quality Is Required?",
      answer:
        "We recommend a stable internet connection with at least 10 Mbps for HD streaming.",
    },
    {
      question: "Can I Cancel My Subscription?",
      answer:
        "You can cancel your subscription anytime by contacting our support team.",
    },
    {
      question: "What types of channels are you offering in your IPTV service?",
      answer:
        "All types of channels are available in our premium British IPTV accounts. You will get access to more than 26 thousand channels from all over the world in your IPTV subscribed account. It includes your favorite dramas, movies, sports, news, and other entertainment channels. They all are well organized in categories, lists, and according to their locations. If you are looking for best IPTV provider in the UK, you can easily access any channel from 8KSTREAMTV",
    },
    {
      question: "How long will it take to receive my IPTV login info?",
      answer:"Normally it takes 2 Minuets to complete your order and you'll the Login Details or Product related info Via email with 3 to 4 Minutes. And when We are having a rush hour ... We aim to email you within 5min – 1 hour of purchase to arrange setup of your order. Please note during busy periods at evenings and weekends orders may take up to 2 hours to process."  },
    {
      question: "Short List of Channels We Offer",
      answer:"We have 11000+ channels.All UK, USA, ASIANS, IRISH,FRENCH. ADULTS and a number of EUROPEAN Countries Channels including Sky, BT, Amazon Prime, Bein, Fox, Netflix.All the Sports Channels:-Premier, Super Sports, Rangers TV FC, Celtic TV, SKY, BT, BEIN, EPL, EFL, SPFL, NIFL, NHL ,English Championship, Champions League, 3PM, PPV, I Follow, DAZN, LALIGA, BUNDASLIGA, GAAGO and many more."    },
    {
      question: "Payment Methods We Accept",
      answer:
        "Certainly, here are some common payment gateways that could be used to buy a subscription from us:PayPal: We prefer to get payment on PayPal of 1 month subscription because if any customer want to set for monthly then they can easily setup the payment on auto so every month he didn't have to pay by himself PayPal automatically get the money from customer and pay the invoice and from here we extend the customer subscription.Bank Transfer: We prefer this method to buy 3,6 and 12 month subscription because with this method we will be saved our money from cutting of taxes. As if customer pay us 65GBP through PayPal then we only get 61GBP only after giving the fees of PayPal. So we want to save our this money and get big Payments on Bank transfer.Debit and Credit Cards: We prefer this method also because most of the customers have debit card. They can easily pay via debit and credit cards through a invoice link.",
    },
    {
      question: "Which Devices We Support ?",
      answer:"ALL THE DEVICES ARE SUPPORTED . Now you can watch live TV & VOD at home or on-the-go — wherever you are, anytime, on your favorite devices.COMPATIBILITY We Provide IPTV Service on.. Amazon Firestick, Fire Cube/Fire TV, Android Boxes, Nvidia Shield, All Formuler Boxes, Android Phone/Tablet, MAG BOXES, Smart TVs, Windows, XBMC/KODI, iOS + Apple Devices."    },
  ];

  return (
    <section className="bg-gradient-to-br from-red-700 to-red-950 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text  bg-black mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-200">
          Get answers to the most common questions about our service.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg transition-transform transform ${
              openIndex === index
                ? "bg-gradient-to-br from-red-600 to-red-800 scale-105"
                : "bg-gray-100"
            }`}
          >
            <div
              className="flex justify-between items-center p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`text-lg font-semibold transition-colors ${
                  openIndex === index ? "text-white" : "text-gray-900"
                }`}
              >
                {faq.question}
              </h3>
              <span
                className={`text-2xl font-bold transition-transform ${
                  openIndex === index
                    ? "text-white rotate-180"
                    : "text-gray-500"
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 p-5" : "max-h-0"
              }`}
            >
              <p
                className={`${
                  openIndex === index
                    ? "text-gray-200 opacity-100"
                    : "opacity-0"
                } leading-relaxed`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
