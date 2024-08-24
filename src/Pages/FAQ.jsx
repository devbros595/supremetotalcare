import React, { useState } from "react";
import "./CSS/FAQ.css";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Do You Ship Overseas?",
      answer:
        "Yes, we ship all over the world. Shipping costs ONLY will apply and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-ques-toggle">
              <div className="faq-question">{faq.question}</div>
              <div className="faq-toggle">
                <i
                  onClick={() => toggleQuestion(index)}
                  className={`fas ${
                    selectedQuestion === index
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  }`}
                ></i>
              </div>
            </div>
            <div
              className={`faq-answer ${
                selectedQuestion === index ? "show" : ""
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="faq-support">
        <h3>Any Other Question?</h3>
        <h5>You can contact us through customerservice@supremetotalcares.com<br/>We will be happy to assist you.</h5>
      </div>
    </div>
  );
};

export default FAQ;
