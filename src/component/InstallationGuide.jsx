import React, { useState, useRef } from "react";
import {
  Smartphone,
  Apple,
  Tv,
  Monitor,
  Box,
  MonitorSmartphone,
  Tv2,
  Laptop,
} from "lucide-react";

const InstallationGuide = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const setupGuideRef = useRef(null);
  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    // Scroll to setup guide with smooth animation
    setTimeout(() => {
      setupGuideRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  const devices = [
    {
      id: 1,
      name: "Amazon Devices = Firestick / FireTV",
      icon: MonitorSmartphone,
      description: "Setup | Amazon Devices = Firestick / FireTV etc.",
      note: "Please Check your emails for the Login details to Login into Our Custom application on your Firestick.",
      steps: [
        {
          title:
            " From the Home Screen of your Device, hover over the Find Option",
          image: "/assets/1.png",
        },
        {
          title: "Click Search.",
          image: "/assets/1.png",
        },
        {
          title: "Search for and select Downloader.",
          image: "/assets/2.png",
        },
        {
          title: "Choose the Downloader app.",

          image: "/assets/3.png",
        },

        {
          title: " Click Download.",

          image: "/assets/5.png",
        },

        {
          title: "Wait for the app to install.",

          image: "/assets/6.png",
        },
        {
          title: "Once the app finishes installing click Open.",

          image: "/assets/7.png",
        },
        {
          title: "Return to the home screen and open Settings..",

          image: "/assets/8.png",
        },
        {
          title: "Click My Fire TV.",

          image: "/assets/9.png",
        },
        {
          title: " Choose Developer options.",

          image: "/assets/10.png",
        },
        {
          title: "Click Install unknown apps.",

          image: "/assets/11.1.png",
        },
        {
          title: "Find the Downloader app and click it.",

          image: "/assets/12.1.png",
        },
        {
          title:
            "This will turn Unknown Sources to On for the Downloader app. This will enable side-loading on your device..",

          image: "/assets/13.png",
        },
        {
          title: "Launch Downloader.",

          image: "/assets/14.png",
        },
        {
          title: "Click Allow.",

          image: "/assets/15.png",
        },
        {
          title: "Click Ok.",

          image: "/assets/16.png",
        },
        {
          title:
            " Type the following URL exactly as shown here: https://iptvsmarters.com/smarters.apk",

          image: "/assets/17.png",
        },

        {
          title: " Wait for file to download.",

          image: "/assets/18.png",
        },
        {
          title: "Click Install.",

          image: "/assets/19.png",
        },
        {
          title: "Click Done.",

          image: "/assets/20.png",
        },
        {
          title: "Now Please Login with the credentials which we provide you",
        },
      ],
    },
    {
      id: 2,
      name: "Android Devices",
      icon: Smartphone,
      description: "Setup | Android Devices / Boxes",
      note: "Please note, we also send a copy of your login details via email after receiving payment for your subscription.",
      steps: [
        {
          title: "Step 1",
          content:
            "Firstly, make sure to Allow installation from Unknown Sources on Settings > Applications.Open your web browser and type the following URL's one by one to download our custom apps directly.https://iptvsmarters.com/smarters.apk As you download the app simply login with details which you get from us.",
        },
        {
          title: "Step 2",
          content:
            "If you have PlayStore app in your device simply open the app and do search for IPTV Smarters Pro and download it then simply login with the details which we provide to you.",
        },
      ],
    },
    {
      id: 3,
      name: "Apple IOS Devices",
      icon: Apple,
      description: "Setup | Apple IOS Devices = IPHONE & IPAD",
      note: "Please note, we also send a copy of your login details via email after receiving payment for your subscription.",
      steps: [
        {
          title: "Step One:",
          content: `Open the purple playlist player\n\nTap on login with code option (at bottom)\n\nType the following Code`,
        },
        {
          title: "Step Two:",
          content: `Enter your Apple ID\n\nDownload the required application\n\nStart using the device.`,
        },
        {
          title: "Step Three:",
          content: `Select server "IOS PLAYER"`,
        },
      ],
    },
    {
      id: 4,
      name: "Apple MAC Devices",
      icon: Laptop,
      description: "Setup | Apple MAC Devices = MAC Book",
      note: "Please note, we also send a copy of your login details via email after receiving payment for your subscription.",
      steps: [
        {
          title: "Step One:",
          content:
            "Install our custom app for MAC book by using the following link.https://bit.ly/macpurple",
        },
        {
          title: "Step Two:",
          content:
            "Once Installation is complete, please open the app and enter your login details supplied to you when you purchased your subscription via the Prime hd stream UK website.",
        },
      ],
    },
    {
      id: 5,
      name: "IPTV Smarters Pro App",
      icon: Tv,
      description:
        "Setup | IPTV Smarters Pro App (for Android, IOS, and Smart TV's)",
      note: "    IF you face any issues, Please come to our Live Chat and report your issue with your Email Address to our LIVE CHAT Support Agents.",
      steps: [
        {
          title:
            "Download IPTV Smarters app for android or IOS and install the app on your device.",
        },
        {
          title:
            "After installing the IPTV Smarters Pro on Android, IOS or any other device. Open the app it will ask you to ADD NEW USER",

          image: "/assets/21.png",
        },
        {
          title: " Now click the Add User button.",

          image: "/assets/22.1.png",
        },
        {
          title: " Now click on Live TV icon ",

          image: "/assets/23.png",
        },
        {
          title:
            " Now you must select the channel category of your Choice from LIVE TV | MOVIES | SERIES. ",

          image: "/assets/24.png",
        },
      ],
    },
    {
      id: 6,
      name: "MAG Devices",
      icon: Box,
      description: "Setup | MAG Devices",
      steps: [
        {
          title: "Step One",
          content:
            "Once you have plugged in your Mag Box, please switch on and Go to settings > system settings > servers > portals.",
        },

        {
          title: "Step Two",
          content:
            "Please type the portal url which we provide you via email under portal 1 URL and then press OK to save.",
        },

        {
          title: "Step Three",
          content: "Press the “Home” symbol on your remote control two times.",
        },
        {
          title: "Then go to Restart / Reload Portal.",
        },
      ],
    },
    {
      id: 7,
      name: " Roku Devices",
      icon: Tv2,
      description: "iOS and Android tablets",
      steps: [
        {
          title: "Step One:",
          content:
            "Enable the Developer mode from the settings of your ROKU Device.",
        },
        {
          title: "Step Two:",
          content:
            "Install Our Custom App by using the following link in your android mobile. https://bit.ly/rokupurple",
        },
        {
          title: "Step Three:",
          content:
            "Make sure that your ROKU device and your mobile is on same network, Open the app and click on install.",
        },
        {
          title: "Step Four:",
          content:
            "Once Installation is complete, please open the app and enter your login details supplied to you when you purchased your subscription via the 4K STREAM UK  website.Please note, we also send a copy of your login details via email after receiving payment for your subscription.",
        },
      ],
    },
    {
      id: 8,
      name: " Windows User",
      icon: Monitor,
      description: "Setup | Windows User",
      steps: [
        {
          title: "Step One:",
          content:
            "Download our custom app in your PC or any Windows device by using the following link.https://bit.ly/windowspurple (Put this link in any Web Browser, and downloading will start)",
          image: "/api/placeholder/600/400",
        },
        {
          title: "Step Two:",
          content:
            "Once Installation is complete, please open the app and enter your login details supplied to you when you purchased your subscription via the 4K STREAM UK website.Please note, we also send a copy of your login details via email after receiving payment for your subscription.",
          image: "/api/placeholder/600/400",
        },
      ],
    },
  ];

  const renderTextStep = (step, index) => {
    if (step.title && step.title.startsWith("Step")) {
      return (
        <div className="mb-4 sm:mb-6 p-4 bg-white/50 rounded-lg">
          <h3 className="text-red-950 font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 break-words">
            {step.title}
          </h3>
          {step.content && (
            <p className="text-black font-semibold text-sm sm:text-base md:text-lg mb-2 whitespace-pre-wrap break-words">
              {step.content}
            </p>
          )}
        </div>
      );
    }

    // Rest of the renderTextStep logic remains the same but with added break-words and whitespace-pre-wrap classes
    return (
      <div className="mb-3 sm:mb-4">
        {step.title && (
          <p className="text-black font-normal text-sm sm:text-base whitespace-pre-wrap break-words">
            {step.title}
          </p>
        )}
        {step.content && (
          <p className="text-black font-normal text-sm sm:text-base whitespace-pre-wrap break-words">
            {step.content}
          </p>
        )}
      </div>
    );
  };

  const renderStep = (step, index) => {
    return (
      <div className="mb-4 sm:mb-6 bg-gradient-to-r from-red-100 to-red-200 p-4 sm:p-6 rounded-xl shadow-md">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center text-white font-bold">
            {index + 1}
          </div>
          <div className="ml-3 sm:ml-4 flex-1">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 break-words">
              {step.title}
            </h3>
            {step.content && (
              <p className="text-sm sm:text-base text-gray-600 whitespace-pre-wrap break-words">
                {step.content}
              </p>
            )}
          </div>
        </div>
        {step.image && !step.image.includes("/api/placeholder/") && (
          <div className="mt-3 sm:mt-4 w-full overflow-hidden rounded-xl shadow-lg">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-300 via-red-400 to-red-500 p-4 sm:p-6 md:p-8">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-5xl font-bold text-white mt-5">
          Installation Guide
        </h1>
        <p className="text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
          Select your device to view setup instructions
        </p>
      </div>

      {/* Devices Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {devices.map((device) => (
          <button
            key={device.id}
            onClick={() => handleDeviceSelect(device)}
            className={`p-4 sm:p-6 rounded-xl transition-all duration-300 transform hover:scale-105 w-full
              ${
                selectedDevice?.id === device.id
                  ? "bg-gradient-to-r from-red-700 to-red-950 shadow-xl scale-105"
                  : "bg-gradient-to-r from-red-700 to-red-950 hover:shadow-xl"
              }`}
          >
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
              <device.icon size={32} className="text-yellow-300" />
              <div className="w-full">
                <h3 className="text-base sm:text-lg font-semibold text-yellow-300 break-words">
                  {device.name}
                </h3>
                <p className="text-xs sm:text-sm text-yellow-300 mt-1 break-words">
                  {device.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Installation Steps */}
      {selectedDevice && (
        <div
          ref={setupGuideRef}
          className="max-w-5xl mx-auto bg-gradient-to-b from-red-50 to-red-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 flex items-center text-gray-800 break-words">
            <selectedDevice.icon
              size={24}
              className="mr-3 sm:mr-4 text-red-500 flex-shrink-0"
            />
            <span className="break-words">
              {selectedDevice.name} Setup Guide
            </span>
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {selectedDevice.steps.map((step, index) =>
              step.content
                ? renderTextStep(step, index)
                : renderStep(step, index)
            )}
          </div>

          {/* Note Section */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border-l-4 border-yellow-400">
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
              Important Note:
            </h4>
            <p className="text-sm sm:text-base text-gray-600 break-words">
              {selectedDevice.note ||
                "Please ensure you follow all steps carefully. If you encounter any issues during installation, don't hesitate to contact our support team."}
            </p>
          </div>

          {/* Help Section */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-red-100 to-red-200 rounded-xl">
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
              Need Help?
            </h4>
            <p className="text-sm sm:text-base text-gray-600">
              If you're having trouble with the installation, please contact our
              24/7 support team.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstallationGuide;
