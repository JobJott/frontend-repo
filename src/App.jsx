import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Loader from "./components/Pages/Loader";
import Error from "./components/Pages/Error";
import "./index.css";

const Nav = lazy(() => import("./components/Pages/Nav"));
const HeroSection = lazy(() => import("./components/Pages/HeroSection"));
const Features = lazy(() => import("./components/Pages/Features"));
const Services = lazy(() => import("./components/Pages/Services"));
const Mission = lazy(() => import("./components/Pages/Mission"));
// const Testimonials = lazy(() => import("./components/Pages/Testimonials"));
const FAQ = lazy(() => import("./components/Pages/Faq"));
const CTA = lazy(() => import("./components/Pages/Cta"));
const Footer = lazy(() => import("./components/Pages/Footer"));
const AuthPage = lazy(() => import("./components/Pages/AuthPage"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));

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
                  <Services />
                  <Mission />
                  {/* <Testimonials /> */}
                  <FAQ />
                  <CTA />
                </div>
                <Footer />
              </div>
            </Suspense>
          }
        />
        <Route
          path="/auth/*"
          element={
            <Suspense fallback={<Loader />}>
              <AuthPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
