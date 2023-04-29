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
            <div className="faq__cover-letter-text">
              <p>Dear Snap Engineering Academy,</p>
              <p>
                I am excited to submit my Website and potentionally move on to
                the final round for a position at Snap Engineering Academy. As a
                transfer student in Software Engineering, I have tried my best
                to hone my skills in software engineering, programming, and data
                analysis through hands-on experience and academic coursework. My
                passion for innovation and technology has driven me to explore
                the latest advancements in the field and learn new technologies
                to stay current in this ever-evolving industry.
              </p>
              <p>
                My previous work experience as a software engineer at John Deere
                has given me the opportunity to develop and deliver successful
                software solutions. I have gained proficiency in programming
                languages such as Python, Java, and Web Developing languages. I
                have also gained experience in agile development methodologies
                and understand the importance of teamwork, communication, and
                collaboration in achieving project goals.
              </p>
              <p>
                I am drawn to Snapchat's commitment to creativity, innovation,
                and the company's unique culture. I am excited to join the Snap
                Engineering Academy team and contribute to developing
                high-quality software solutions that enhance the user
                experience. I am confident that my technical skills, passion for
                innovation, and eagerness to learn will make me a valuable
                addition to your team.
              </p>
              <p>
                Thank you for your time and consideration. I look forward to the
                opportunity to discuss my qualifications further.
              </p>
              <p>Sincerely, Howard Chi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
