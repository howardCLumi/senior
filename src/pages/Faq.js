import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <div className="faq__parallax"></div>
      <div className="faq">
        <div className="faq__container">
          <div className="faq__form-real-container">
            <h2 id="form-questions" className="faq__form">
              Journey Map
            </h2>
            <>
              <div className="faq__prompt-question"></div>
            </>
          </div>
          <div className="faq__cover-letter-real-container">
            <h2 id="cover-letter" className="faq__cover-letter">
              Cover Letter
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
