import "./Contact.css";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  function sendMail() {
    let payload = {
      from_name: name,
      reply_to: email,
      from_number: number,
      message_html: message,
    };
    //console.log(payload);
    sendFeedback(payload);
  }
  const sendFeedback = (payload) => {
    window.emailjs
      .send(serviceId, templateId, payload)
      .then((res) => {
        console.log("email success");
      })
      .catch((err) => console.error("error", err));
    setName(" ");
    setEmail(" ");
    setNumber(" ");
    setMessage(" ");
  };
  let serviceId = "service_6zqc1ga";
  let publicKey = "QF3SvIB3v04g8EwuB";
  let templateId = "template_46f68qj";
  return (
    <div className="contact-us-page">
      <div className="contact-form">
        <div className="contact-us-text">Contact Us</div>
        <input
          placeholder="Name"
          className="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="Email"
          className="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="Phone Number"
          className="number"
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <input
          placeholder="Your Message"
          className="message"
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <Button variant="dark" className="submit-button" onClick={sendMail}>
          Submit
        </Button>
      </div>

      <div className="contact-us-map">
        <iframe
          style={{
            border: "0",
            filter: "grayscale(60%)",
            opacity: "100%",
            backgroundAttachment: "fixed",
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.0061843994171!2d77.63793903098518!3d12.970268849505086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bb7227497f%3A0x3084b4633af4fa97!2sFlintstones!5e0!3m2!1sen!2sin!4v1650678432883!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
          frameborder="10"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
}
export default ContactUs;
