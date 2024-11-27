import React from "react";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="jobjot-entire-wrap">
      {/*insert Navbar goes here */}
      <div className="hero-section">
      <HeroSection />
      </div>
      <div className="jobjot-main-container">
        <Features />
      </div>
       {/*insert footer goes here */}
    </div>
  );
}

export default App;
