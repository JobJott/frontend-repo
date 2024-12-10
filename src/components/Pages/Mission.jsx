import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../../styles/Mission.css";

function Mission() {
  useEffect(() => {
    gsap.fromTo(
      ".mission-subheading, .keypoint",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mission-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

    return (
      <section className="mission-section">
        <div className="mission-container">
          <h3 className="mission-heading">Our Mission</h3>
          <h2 className="mission-subheading">
            Empowering you to take control <br /> of your career journey.
          </h2>
          <div className="mission-keypoints">
            <div className="keypoint">
                 <span className="bullet-point">•</span>
              <h3>Streamlining the Job Application Process</h3>
            </div>
            <div className="keypoint">
                 <span className="bullet-point">•</span>
              <h3>Fostering Consistency and Professional Growth</h3>
            </div>
            <div className="keypoint">
                 <span className="bullet-point">•</span>
              <h3>Building Confidence through Insight and Clarity</h3>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Mission;
