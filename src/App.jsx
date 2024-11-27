import React from "react";
import Nav from "./components/Nav"
import Features from "./components/Features";
import About from "./components/About";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="jobjot-entire-wrap">
      {/*insert Navbar goes here */}
      <div className="hero-section">
      <HeroSection />
      </div>
      <Nav />
      <div className="jobjot-main-container">
        <Features />
        <About />
      </div>
      {/*insert footer goes here */}
    </div>
  );
}

export default App;
