import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav";
// import Features from "./components/Features";
// import About from "./components/About";
// import HeroSection from "./components/HeroSection";
// import FAQ from "./components/Faq";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Loader from "./components/Loader";
import Error from "./components/Error";
import LoaderForm from "./components/Authentication/LoaderForm";

const Nav = lazy(() => import("./components/Nav"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const Features = lazy(() => import("./components/Features"));
const About = lazy(() => import("./components/About"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const FAQ = lazy(() => import("./components/Faq"));
const Footer = lazy(() => import("./components/Footer"));
const AuthPage = lazy(() => import("./components/AuthPage"));

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
            <Suspense fallback={<LoaderForm />}>
              <AuthPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
