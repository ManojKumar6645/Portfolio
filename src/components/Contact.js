import React from 'react';
import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
                      //service id      ,  template id      ,             ,   Public Key
      emailjs.sendForm("service_z1sawkh", "template_9t9pkqc",form.current, "a2e3HA2VbH4dJLZ9z")
      .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    if(done){
      setTimeout(()=>{
        setDone(false);
      }, 3500)
    }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ''}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input type="text" name="user_fname"  className="user"  placeholder="FirstName" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_lname"  className="user"  placeholder="LastName" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" className="user" placeholder="Email" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="user_PhoneNo" placeholder="Phone No." required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows='6' name="message" className="user" placeholder="Message" required/>
                      <button type="submit" style={{borderRadius: '10px'}}><span>Send</span></button> <br />
                      <h2 className='my-3'>{done && "Thanks for Contacting me"}</h2>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}