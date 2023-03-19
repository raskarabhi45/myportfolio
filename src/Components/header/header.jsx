import React , { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {

  return (
    <>
    

      <header>
        {/* <div class="day-night s-icon">
          <i class="fa fa-moon"></i>
        </div> */}

        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Abhishek Raskar</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>

          <div data-aos="slide-up" className="me">
            <img src={ME} alt="me" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
