import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../../styles/About.css";

function About() {
  useEffect(() => {
    gsap.fromTo(
      ".about-text h2, .about-text p",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-main",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="about-sect info-container">
      <div className="about-main">
        <div className="about-text">
          <h2>About JobJott</h2>
          <p>
            {" "}
            Welcome to <span className="text-highlight">JobJott</span>, your
            ultimate job application tracker. Our mission is to simplify your
            job hunt by helping you organize and manage your applications, track
            deadlines, schedule interviews, and set custom reminders all in one
            place. With intuitive features and notifications, JobJott ensures
            you stay ahead, seize every opportunity, and take control of your
            career journey.{" "}
          </p>
          <p>
            Whether you're a recent graduate or a seasoned professional, JobJott
            is here to empower you to achieve your career goals with ease and
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
