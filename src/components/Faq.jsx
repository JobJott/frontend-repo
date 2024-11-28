import React, { useState } from "react";
import "../styles/Faq.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import FAQImage from "../assets/faq.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What is JOBDOTT?", answer: "JOBDOTT is a job tracking application that helps users manage their job applications, set reminders, and provide status updates." },
    { question: "How do I add a new job application?", answer: "Navigate to the 'Add Job' section, fill out the required details, and click 'Save' to track your application." },
    { question: "Can I set reminders for deadlines?", answer: "Yes, you can set reminders for each job application to stay on track with deadlines." },
    { question: "Is JOBDOTT free to use?", answer: "JOBDOTT offers both free and premium plans. Check our pricing page for details." }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqContainer">
      <div className="faqHeader">
        <img src={FAQImage} alt="" className="faqImage" />
        <h1 className="faqTitle">Frequently Asked Questions</h1>
      </div>
      <div className="faqItems">
        {faqs.map((faq, index) => (
          <div key={index} className="faqItem">
            <div className="faqQuestion" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
            </div>
            <div className={`faqAnswer ${activeIndex === index ? 'show' : ''}`}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
