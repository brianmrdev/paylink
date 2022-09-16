import React from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/social-media/SocialMedia";
import Payment from "./components/payments/Payment";

function App() {
  return (
    <>
      <Hero src="" alt="" name="" description="" />

      <section id="social-media" className="d-flex justify-content-center mb-5">
        {/* Social media components are placed here */}
      </section>

      <section
        id="payment-options"
        className="d-flex flex-column align-items-center pb-5"
      >
        {/* Payment components are placed here */}
      </section>
    </>
  );
}

export default App;
