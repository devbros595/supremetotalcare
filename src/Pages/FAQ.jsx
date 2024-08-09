import React, { useState } from 'react';
import "./CSS/FAQ.css";

function Faq({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq">
      <div className="faq-question" onClick={toggle}>
        <h3>{question}</h3>
        <span className="icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

export default Faq;
