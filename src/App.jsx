import React, { useEffect } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Experience from "./Components/experience/experience";
import Header from "./Components/header/header";
import Nav from "./Components/nav/nav";
import Testinomials from "./Components/testinomials/testinomials";
import Service from "./Components/services/services";
import Portfolio from "./Components/portfolio/portfolio";
import About from "./Components/about/about.jsx";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";
import Education from "./Components/education/education";
import Navbar from "./Components/navbar/navbar";
import Certificates from "./Components/certificates/certificates";
import Aos from "aos";
import "aos/dist/aos.css";

const App=()=>{

    useEffect(()=>
    {
        Aos.init({duration:2000});
    },[]);

    return (
    <>
    {/* <Navbar/> */}
    
{/* //scroll reveal */}
{/* ScrollReveal(
    {
        // reset:true,
        distance:'80px',
        duration:2000,
        delay:200
    }
); */}

{/* ScrollReveal().reveal('.home-content , heading',{origin:'top'});
ScrollReveal().reveal('.home-img , .services-container, .portfolio-box ,.contact form',{origin:'bottom'} )
ScrollReveal().reveal('.home-content h1 ,.about-img',{origin:'left'} )
ScrollReveal().reveal('.home-content p ,.about-content',{origin:'right'} )


{/* // typed js */}
{/* const typed=new Typed('.multiple-text',{
    strings:['Learner','Programmer','Frontend Developer','Java Developer'],
    typeSpeed:50,
    backSpeed:50,
    backDelay:500,
    loop:true
}); */} 
    <Header/>
    <Nav/>
    <About/>
    {/* <Service/> */}
    <Education/>
    <Experience/>
    <Portfolio/>
    <Testinomials/>
    <Contact/>
    <Footer/>

    {/* <Router>
      <Routes>
        <Route path='#certificates' element={<Certificates/>}/>
      </Routes>
    </Router> */}

   

  
    </>
    )
}


export default App;
