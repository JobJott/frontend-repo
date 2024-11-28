import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typewriter } from "react-simple-typewriter";
import SplitType from "split-type";
import scribble from "../assets/scribble.svg";
import "../styles/Features.css";
import dashboard from "../assets/Dashboard.svg";
import tracking from "../assets/Tracking.svg";
import organize from "../assets/Organize.svg";
import notification from "../assets/Notification.svg";
import visualization from "../assets/Visualization.svg";

gsap.registerPlugin(ScrollTrigger);

function FeatureItem({
  isImageRight,
  header,
  subtext,
  buttonText,
  imageSrc,
  className,
}) {
  return (
    <div className={`feature-item ${className}`}>
      {isImageRight ? (
        <>
          <div className="features-left">
            <div className="features-text">
              <h1>{header}</h1>
              <p>{subtext}</p>
              <div className="features-button">
                <button className="btn-features1 btn-3 btn-5">
                  <a href="/">{buttonText}</a>
                </button>
              </div>
            </div>
          </div>
          <div className="features-right">
            <img
              src={imageSrc}
              alt="feature illustration"
              className="feature-image"
            />
          </div>
        </>
      ) : (
        <>
          <div className="features-left">
            <img
              src={imageSrc}
              alt="feature illustration"
              className="feature-image"
            />
          </div>
          <div className="features-right">
            <div className="features-text">
              <h1>{header}</h1>
              <p>{subtext}</p>
              <div className="features-button">
                <button className="btn-features1 btn-4">
                  <a href="/">{buttonText}</a>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Features() {
  const imgRef = useRef(null);

  useEffect(() => {
    const featuresCont = ".features-container";
    const mainTextP = ".features-main-text p";
    gsap.fromTo(
      mainTextP,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: featuresCont,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    featureData.forEach((_, index) => {
      const featureClass = `.feature-item-${index + 1}`;
      const featureText = `${featureClass} .features-text h1, ${featureClass} .features-text p`;
      const featureImage = `${featureClass} .feature-image`;

      const animations = [
        () => {
          gsap.fromTo(
            featureText,
            { y: -50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.2,
              ease: "power2.out",
              duration: 1,
              scrollTrigger: {
                trigger: featureClass,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
          gsap.fromTo(
            featureImage,
            { y: -100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: featureClass,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        },
        () => {
          gsap.fromTo(
            featureText,
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              stagger: 0.2,
              ease: "power2.out",
              duration: 1,
              scrollTrigger: {
                trigger: featureClass,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
          gsap.fromTo(
            featureImage,
            { x: 200, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: featureClass,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        },
        () => {
          gsap.fromTo(
            featureText,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.2,
              ease: "power2.out",
              duration: 1,
              scrollTrigger: {
                trigger: featureClass,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
          gsap.fromTo(
            featureImage,
            { y: -200, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "bounce.out",
              scrollTrigger: {
                trigger: featureClass,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        },
        () => {
          gsap.fromTo(
            featureText,
            { y: -50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.2,
              ease: "power2.out",
              duration: 1,
              scrollTrigger: {
                trigger: featureClass,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
          gsap.fromTo(
            featureImage,
            { y: -200, rotate: 0 },
            {
              rotate: 15,
              y: 0,
              duration: 1,
              ease: "elastic.out(1, 0.3)",
              scrollTrigger: {
                trigger: featureClass,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        },
        () => {
          gsap.fromTo(
            featureText,
            { scale: 0.5, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              stagger: 0.2,
              ease: "power2.out",
              duration: 1,
              scrollTrigger: {
                trigger: featureClass,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
          gsap.fromTo(
            featureImage,
            { rotateY: 90, opacity: 0 },
            {
              rotateY: 0,
              opacity: 1,
              duration: 1,
              ease: "bounce.out",
              scrollTrigger: {
                trigger: featureClass,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        },
      ];

      animations[index]();
    });
  }, []);

  const featureData = [
    {
      header: "Dashboard Overview",
      subtext:
        "A clean and concise dashboard that gives a summary of all active applications. Key metrics such as the number of applications submitted, interviews scheduled, and offers received.",
      buttonText: "Get Started",
      imageSrc: dashboard,
    },
    {
      header: "Keep Track of Deadlines",
      subtext:
        "Set and view deadlines for application submissions and follow-ups. Visual timelines or calendars to track upcoming deadlines.",
      buttonText: "Track an application!",
      imageSrc: tracking,
    },
    {
      header: "Organize Your Interviews",
      subtext:
        "Schedule interviews with date, time, and location or platform details. Sync with personal calendars for seamless integration.",
      buttonText: "Start Now",
      imageSrc: organize,
    },
    {
      header: "Set Custom Reminders and Notifications",
      subtext:
        "Set reminders for important dates and tasks. Receive notifications via email or in-app alerts for upcoming deadlines and interview.",
      buttonText: "Try It Out",
      imageSrc: notification,
    },
    {
      header: "Visualize Your Job Hunt",
      subtext:
        "Gain insights into your job applications with our easy-to-understand visual analytics.",
      buttonText: "View Analytics",
      imageSrc: visualization,
    },
  ];

  return (
    <section className="features-main-section">
      <div className="features-container">
        <div className="features-main-text">
          <h1>
            <span>
              <Typewriter
                words={["Streamline your job application process today with"]}
                loop={2}
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
                cursor={false}
              />
            </span>
            <span className="text-colour">JobJot's tracking tools.</span>
            <span>
              <img ref={imgRef} src={scribble} alt="scribble" />
            </span>
          </h1>
          <p>
            Easily manage your job applications, deadlines, and interview
            schedules all in one place. Stay organized and never miss an
            opportunity with our intuitive tracking system.
          </p>
        </div>

        <div className="features-details">
          {featureData.map((feature, index) => (
            <FeatureItem
              key={index}
              isImageRight={index % 2 === 0}
              header={feature.header}
              subtext={feature.subtext}
              buttonText={feature.buttonText}
              imageSrc={feature.imageSrc}
              className={`feature-item-${index + 1} `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
