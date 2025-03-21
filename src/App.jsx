import "./App.css";
import { Homepage } from "./component/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PricingPage from "./component/PricingPage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ContactForm from "./component/ContactForm";
import Shopping from "./component/Shopping";
import Form2 from "./component/Form2";
import SellerCard from "./component/SellerCards";
import Payment from "./component/Payment";
import InstallationGuide from "./component/InstallationGuide";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51QdnDr01IUV84quJ1vzrTIZYPwzqEPN5IDQHiGFXADhSK3Q1TxejrwNFgbQ5jnFCGDYiBsfya5otiTfN4kxKI1zc00IbtybRuO"
); // Replace with your actual publishable key

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<Homepage />} />
          {/* Pricing Page Route */}
          <Route exact path="/pricing" element={<PricingPage />} />
          <Route path="/form" element={<ContactForm />} />
          <Route exact path="/shopping" element={<Shopping />} />
          <Route path="/subform" element={<Form2 />} />
          <Route path="/sellercard" element={<SellerCard />} />
          {/* Wrap Payment Route in <Elements> */}
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/installguide" element={<InstallationGuide />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
