import React from "react";
import "./Journey.css";

const Journey = () => {
  return (
    <>
      <div className="journey-map">
        <div className="journey-map__container">
          <h2 id="form-questions" className="journey-map__form">
            Journey Map
          </h2>
          <div className="journey-map__form-real-container">
            <>
              <div className="journey-map__prompt-question"></div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
