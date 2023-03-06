import React from "react";
import './services.css'
import {AiOutlineCheckCircle} from "react-icons/ai";
const Service=()=>{
    return (
        <>
             <section id='services'>
                <h5>What I Offer</h5>
                <h2>Services</h2>

                <div className="container services__container">
                    <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        
                    </ul>
                    </article>
                    {/* /*End of UI UX */ }

                    <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        
                    </ul>
                    </article>
                     {/* End of web development */}

                     <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi unde, voluptatibus, nam et suscipit error iste recusandae dicta quasi non molestiae quae? Reiciendis, tenetur doloribus? Beatae et maxime culpa.</p>
                        </li>
                        
                    </ul>
                    </article>
                    {/* //end of content creation */}
                </div>
             </section>
        </>
    )
}

export default Service;