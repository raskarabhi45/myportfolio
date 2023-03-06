import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import { GrInstagram} from 'react-icons/gr';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    
        <a href='https://www.linkedin.com/in/abhishek-raskar-954052216' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/raskarabhi45' target="_blank"><FaGithub/></a>
        <a href='https://leetcode.com/raskarabhi45/' target="_blank"><SiLeetcode/></a>
        <a href='https://www.instagram.com/raskarabhi45/' target="_blank"><GrInstagram/></a>
       
    </div>
  )
}

export default HeaderSocials