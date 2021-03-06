import React, { useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const links = ["home", "about", "plans", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.yourlogo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {links.map((link) => (
          <li className="app__flex p-text" key={`link-${link}`}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt2 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link}`} onClick={() => setToggle(false)}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
