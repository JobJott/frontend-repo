import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import FAQImage from "../../assets/faq.png";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  useEffect(() => {
    gsap.fromTo(
      ".faqItem, .faqTitle",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faqItems",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does it work?",
      answer:
        "Our job application tracker simplifies your job search by organizing applications, deadlines, and interviews. You can easily set reminders and receive notifications to ensure you never miss an opportunity. It's designed to keep you on top of your job hunt efficiently.",
    },

    {
      question: "Is it user-friendly?",
      answer:
        "Absolutely! Our tracker is designed with simplicity in mind, making it accessible for everyone. You don’t need to be tech-savvy to navigate through its features. Just sign up and start managing your applications effortlessly.",
    },

    {
      question: "How do I add a new job application?",
      answer:
        "Navigate to the 'Add Job' section, fill out the required details, and click 'Save' to track your application.",
    },

    {
      question: "Can I set reminders for deadlines?",
      answer:
        "Yes, you can set customized reminders for application deadlines and interview schedules. This feature ensures you stay organized and prepared for every step of your job search. You’ll receive timely notifications to keep you on track.",
    },

    {
      question: "Is my data secure?",
      answer:
        "We prioritize your privacy and data security. Your information is stored securely and is only accessible to you. We implement industry-standard security measures to protect your data from unauthorized access.",
    },

    {
      question: "What if I need help?",
      answer:
        "What if I need help?Our support team is here to assist you with any questions or issues you may encounter. You can reach out to us via the contact button for prompt assistance. We're dedicated to ensuring you have a smooth experience with our tracker.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqContainer info-container">
      <div className="faqHeader">
        <img src={FAQImage} alt="" className="faqImage" />
        <h1 className="faqTitle">Frequently Asked Questions</h1>
      </div>
      <div className="faqItems">
        {faqs.map((faq, index) => (
          <div key={index} className="faqItem">
            <div className="faqQuestion" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
              />
            </div>
            <div className={`faqAnswer ${activeIndex === index ? "show" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
