import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../../styles/Services.css";

function ServicesItem({ number, header, subtext, className }) {
  return (
    <div className={`services-item ${className}`}>
      <div className="services-card">
        <div className="services-number">{number}</div>
        <div className="services-card-text">
          <h1>{header}</h1>
          <p>{subtext}</p>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const servicesData = [
    {
      number: 1,
      header: "Create Your Profile",
      subtext:
        "Sign up and set up your JobJot account to start managing your job applications in one place.",
    },
    {
      number: 2,
      header: "Track Your Applications",
      subtext:
        "Log your job applications, deadlines, and interviews with ease, and let JobJot handle the rest.",
    },
    {
      number: 3,
      header: "Stay Ahead",
      subtext:
        "Get reminders, view insights, and watch your job hunt progress toward success.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".services-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-text">
        <h3>STEPS</h3>
        <h1>
          Three Simple Steps to <br /> Master Your Job Hunt with JobJott
          </h1>
        </div>
        <div className="services-details">
          {servicesData.map((services, index) => (
            <ServicesItem
              key={index}
              number={services.number}
              header={services.header}
              subtext={services.subtext}
              className={`services-item-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
