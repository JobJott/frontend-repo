import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Features from "./components/Features";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import FAQ from "./components/Faq";
import Testimonials from "./components/Testimonials";
import AuthPage from "./components/AuthPage";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="jobjot-entire-wrap">
              <Nav />
              <div className="jobjot-main-container">
                <HeroSection />
                <Features />
                <About />
                <Testimonials />
                <FAQ />
              </div>
              {/* Footer goes here */}
            </div>
          }
        />
        <Route path="/auth/*" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
