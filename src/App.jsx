import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Loader from "./components/Pages/Loader";
import Error from "./components/Pages/Error";

const Nav = lazy(() => import("./components/Pages/Nav"));
const HeroSection = lazy(() => import("./components/Pages/HeroSection"));
const Features = lazy(() => import("./components/Pages/Features"));
const About = lazy(() => import("./components/Pages/About"));
const Testimonials = lazy(() => import("./components/Pages/Testimonials"));
const FAQ = lazy(() => import("./components/Pages/Faq"));
const Footer = lazy(() => import("./components/Pages/Footer"));
const AuthPage = lazy(() => import("./components/Pages/AuthPage"));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <div className="jobjot-entire-wrap">
                <Nav />
                <div className="jobjot-main-container">
                  <HeroSection />
                  <Features />
                  <About />
                  <Testimonials />
                  <FAQ />
                </div>
                <Footer />
              </div>
            </Suspense>
          }
        />
        <Route
          path="/auth/*"
          element={
              <AuthPage />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
