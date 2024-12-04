import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/Testimonials.css";
import igbo from "../../assets/igbo.svg";
import odidi from "../../assets/odidi.svg";
import mahmud from "../../assets/mahmud.svg";
import precious from "../../assets/precious.svg";
import olubiyi from "../../assets/olubiyi.svg";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    icon: <img src={odidi} alt="User Icon 1" />,
    name: "Hope Odidi",
    review:
      "JobJott takes the stress out of job hunting. I no longer worry about missing an important date or losing track of which companies I’ve contacted. It’s a must-have for anyone looking for a new role!",
  },
  {
    id: 2,
    icon: <img src={precious} alt="User Icon 2" />,
    name: "Adesola Precious",
    review:
      "The best part about JobJott is how it keeps me accountable. I love the dashboard view showing where I stand with all my applications. It's simple yet powerful, just what every job seeker needs.",
  },
  {
    id: 3,
    icon: <img src={mahmud} alt="User Icon 3" />,
    name: "Hujjarhtullahi",
    review:
      "JobJott is the app I didn't know I needed. The organization tools and progress tracking are incredibly intuitive. It's like having a personal assistant for my job search. Five stars!",
  },
  {
    id: 4,
    icon: <img src={olubiyi} alt="User Icon 4" />,
    name: "Olubiyi Babajide",
    review:
      "I was juggling dozens of job applications, and JobJott made it so simple to manage them all. Its clean interface and customizable reminders helped me stay on top of deadlines and interviews. Love it!",
  },
  {
    id: 5,
    icon: <div className="user-no-img">Q</div>,
    name: "Da-ala Quincy ",
    review:
      "As someone applying for jobs in a competitive market, JobJott keeps me organized and motivated. The ability to track each stage of my applications and receive reminders made me far more productive. I landed my dream role thanks to this app!",
  },
  {
    id: 6,
    icon: <img src={igbo} alt="User Icon 6" />,
    name: "Braimoh-Igbo ",
    review:
      "JobJott transformed my job search! Keeping track of multiple applications used to be overwhelming, but now I have everything in one place. The reminders are a game-changer, I never miss a follow-up.",
  },
  {
    id: 7,
    icon: <div className="user-no-img">A</div>,
    name: "Ademola ",
    review:
      "JobJot is a game-changer for tracking job applications! Its intuitive interface and reminders keep me organized and on top of deadlines. A must-have for job seekers!",
  },
];

const Testimonials = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".testimonial--card",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".jobjott-testimonials-sect",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animation;
    if (carousel) {
      const children = Array.from(carousel.children);
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        carousel.appendChild(clone);
      });

      animation = gsap.to(carousel, {
        x: -carousel.scrollWidth / 2,
        duration: 120,
        ease: "none",
        repeat: -1,
      });
    }

    return () => {
      if (animation) animation.kill();
    };
  }, []);

  return (
    <div className="jobjott-testimonials-sect info-container">
      <div className="testimonial-main">
        <div className="testimonial-card-main">
          <h1>Hear What Others Say About JobJott</h1>
        </div>

        <div className="testimonial-main">
          <div className="testimonial--cards" ref={carouselRef}>
            {cardsData.map((card) => (
              <div className="testimonial--card" key={card.id}>
                <div className="quote">
                  <p>"{card.review}"</p>
                </div>
                <div className="name-info">
                  {card.icon}
                  <span>{card.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
