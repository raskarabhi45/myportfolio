import React, { useState } from "react";
import "./navbar.css";
import {
  FaYoutubeSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setshowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h2>
            <span>r</span>askar
            <span>a</span>bhi45
          </h2>
        </div>

        {/* 2nd menu part */}
        <div
          className={
            showMediaIcons ? "menu-link  mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a className="anker" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="anker" href="#">
                About
              </a>
            </li>
            <li>
              <a className="anker" href="#">
                Service
              </a>
            </li>
            <li>
              <a className="anker" href="#">
                Contact
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setshowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        {/* <div className="social-media"> */}

        {/* hamburger menu start */}
        {/* <div className="hamburger-menu">
        <a href="#" onClick={()=>setshowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu/>
        </a>

        </div>


    </div> */}
      </nav>
    </>
  );
};

export default Navbar;
