import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";

const Header = () => {
  return (
    <div id="home" className="app__header">
      <motion.h1
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-head head-text"
      >
        Are you ready for a <br />
        <span>Challenge?</span>
      </motion.h1>
      <motion.p
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ delay: 1, duration: 1 }}
        className="app__header-paragraph"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ex
        suscipit commodi qui saepe veritatis eaque amet reprehenderit voluptas.
      </motion.p>
    </div>
  );
};

export default Header;
