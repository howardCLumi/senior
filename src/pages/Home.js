import React from "react";
import nova from "../assets/homenova.jpg";
import salute from "../assets/cat-9.JPG";
import { NavLink } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__body-container">
          <div>
            <h1 className="home__body-hello-text">
              Welcome to<br></br>
              Senior Design<br></br>
              Group sdmay 23-42
            </h1>
            <br></br>
            <NavLink className="home__body-continue-button" to="/journey">
              JOURNEY MAP
            </NavLink>
          </div>
          <div>
            <img src={nova} className="home__body-nova" alt="" />
          </div>
        </div>
      </div>
      <div className="home__bottom">
        <div className="home__bottom-container">
          <div>
            <h2 className="home__bottom-about-title">ABOUT OUR PROJECT</h2>
            <div className="home__bottom-about-text-container">
              <p className="home__bottom-about-text">
                <h3>Problem Statement:</h3> The problem we are addressing is the
                lack of instructor and student resources that analyze student
                and course data to predict student resonance with the course.
                Instructors need a way to accurately understand students
                experiences in their courses, so they can empathize with
                students, improve student interactions, and course design.
              </p>
              <div>
                <img src={salute} className="home__bottom-salute" alt="" />
              </div>
            </div>
            <a
              className="home__bottom-continue-button"
              href="https://sdmay23-42.sd.ece.iastate.edu/"
            >
              Design
            </a>
          </div>
        </div>
      </div>
      <div className="home__closing">
        <div className="home__closing-container"></div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Home;
