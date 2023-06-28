import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const toastOptions = {
    position: 'top-right',
    autoClose: 8000,
    pauseOnHover: true,
    theme: 'dark',
  };

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvgfozl', 'template_qflxgnc', form.current, 'xuiiD69Xt78yM9-d1')
    
    const data="Your form is successfully submitted";
    toast.success(data, toastOptions);
        console.log(data);
    e.target.reset();
      //toast.error(data.error, toastOptions);
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div  className="contact__options">
          <article data-aos="fade-up" className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
           <h4>Email</h4>
           <h5>raskarabhi45@gmail.com</h5>
           <a href="mailto:raskarabhi45@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article data-aos="fade-up" className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
           <h4>Messanger</h4>
           <h5>raskarabhi45</h5>
           <a href="https://m.me/100085959834129/" target='_blank'>Send a message</a>
          </article>

          <article data-aos="fade-up" className='contact__option'>
          <ImWhatsapp className='contact__option-icon'/>
           <h4>WhatsApp</h4>
           <h5>+123456789</h5>
           <a href=" https://wa.me/+919359899826" target='_blank'>Send a message</a>
          </article>

        </div>

        {/* END of Contact option */}
        <form ref={form} onSubmit={sendEmail}>
        <ToastContainer/>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message 'required></textarea>
          <button data-aos="fade-up" type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;