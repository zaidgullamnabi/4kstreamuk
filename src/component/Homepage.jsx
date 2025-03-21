import React from "react";

import HeroSection from "./HeroSection";
import PricingPage from "./PricingPage";
import FeatureCards from "./FeatureCards";
import SubscriptionSection from "./SubscriptionSection";
import PremiumFeaturesSection from "./PremiumFeaturesSection";
import FAQSection from "./FAQSection";
import { Banner2 } from "./Banner2";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <PricingPage />
      <FeatureCards />
      <SubscriptionSection />
      <PremiumFeaturesSection />
      <FAQSection />
      <Banner2 />
    </div>
  );
};
