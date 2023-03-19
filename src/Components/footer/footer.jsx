import React from 'react'
import './footer.css'
import Aos from "aos";
import "aos/dist/aos.css";
import {FiTwitter} from 'react-icons/fi'
import { GrInstagram} from 'react-icons/gr';
import { BsFacebook} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>portfolio</a>

      <ul className='premalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://www.instagram.com/raskarabhi45/' target="_blank"><GrInstagram/></a>
      <a href='https://mobile.twitter.com/raskarabhi45' target="_blank"><FiTwitter/></a>
      <a href='https://www.facebook.com/people/Abhishek-Raskar/pfbid0EoqfyPG9Tp6j7MqpbEmHLLiWhHcdq8SR2848imXi2LnvJhgTREmF3pX3rnpvRuwJl/' target="_blank"><BsFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ABHISHEK RASKAR. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;