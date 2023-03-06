import React from "react";
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

const App=()=>{
    return (
    <>
    {/* <Navbar/> */}
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

    </>
    )
}

export default App;