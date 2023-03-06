import React from "react";
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage2Line} from 'react-icons/ri'
import { useState } from "react";


const Nav=()=>{

    const [activeNav,setActiveNav]=useState('#')

    return(
        <>
            <nav>
                <a href="#" onClick={()=>setActiveNav('#')} 
                className={activeNav===`#` ? `active`:`` }><AiOutlineHome/></a>
                <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav===`#about` ? `active`:`` }><BiUser/></a>
                <a href="#education" onClick={()=>setActiveNav('#education')} className={activeNav===`#education` ? `active`:`` }><RiServiceLine/></a>
                {/* <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav===`#services` ? `active`:`` }><RiServiceLine/></a> */}
                <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav===`#experience` ? `active`:`` }><BiBook/></a>
                <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav===`#contact` ? `active`:`` }><RiMessage2Line/></a>
            </nav>
        </>
    )
};

export default Nav;