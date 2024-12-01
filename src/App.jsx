import React from "react";
import Nav from "./components/Nav";
import Features from "./components/Features";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import FAQ from "./components/Faq";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="jobjot-entire-wrap">
      {/*insert Navbar goes here */}
      <Nav />
      <div className="jobjot-main-container">
        <HeroSection />
        <Features />
        <Testimonials/>
        <About />
        <FAQ />
      </div>
      {/*insert footer goes here */}
    </div>
  );
}

export default App;
