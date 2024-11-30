import React, { useEffect } from "react";
import "../styles/HeroSection.css";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";

const HeroSection = () => {
  useEffect(() => {
    const ctcp = ".call-to-action p";
    gsap.fromTo(
      ctcp,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1,
      }
    );
  }, []);

  return (
    <>
      <div className="hero-section-container">
        <div className="hero">
        {/* text content */}
        <div className="textContent">
          <div className="headline">
            <h1>
              <span>
                <Typewriter
                  words={["Simplify Your Job Search with Our Tracker"]}
                  loop={1}
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}
                  cursor={false}
                />
              </span>
            </h1>
          </div>
          <div className="call-to-action">
            <p>
              {" "}
              Stay organized and on top of your job applications with our
              intuitive tracker. Manage deadlines, schedule interviews, and
              receive timely reminders to ensure you never miss an opportunity
            </p>
          </div>
          <div className="hero-section-btn">
            <button className="get-started-btn">Get Started</button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default HeroSection;
