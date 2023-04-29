import React from "react";
import { NavLink } from "react-router-dom";
import catlogo from "../../assets/blackcatlogo.svg";
import Lottie from "lottie-react";
import blackcatrunning from "../../assets/blackcatrunning.json";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__lottie">
          <NavLink className="header__navigation-home" to="/">
            <Lottie animationData={blackcatrunning} loop={true} />
          </NavLink>
        </div>
        <nav className="header__navigation">
          <NavLink className="header__navigation-home" to="/">
            Home
          </NavLink>
          <NavLink className="header__navigation-contact" to="/faq">
            Q&A
          </NavLink>
          <a href="https://sdmay23-42.sd.ece.iastate.edu/">
            <img src={catlogo} className="header__main-logo" alt="" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
