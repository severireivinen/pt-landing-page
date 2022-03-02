import React, { useState } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    /*const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });*/
  };

  return (
    <div id="contact" className="app__flex app__footer">
      <h2>Contact Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.gmail} alt="email" />
          <a href="mailto:urmail@mail.com" className="p-text">
            youremail@mail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +358501231234 " className="p-text">
            +358 50 123 1234
          </a>
        </div>
      </div>

      <h2>Or Message Me</h2>

      <motion.div
        className="app__flex app__footer-form"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your message"
            name="message"
            value={message}
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.div>
    </div>
  );
};

export default Footer;
