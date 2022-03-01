import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  return (
    <div id="about" className="app__about">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__about-who"
      >
        <h2>Who am I?</h2>
        <p className="p-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
          facilis est nemo harum qui odit atque quia ad quo laboriosam, alias
          temporibus ratione magni pariatur debitis culpa minus esse adipisci.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
          facilis est nemo harum qui odit atque quia ad quo laboriosam, alias
          temporibus ratione magni pariatur debitis culpa minus esse adipisci.
        </p>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__about-image"
      >
        <img src={images.profile} alt=" me" />
      </motion.div>
      <motion.div
        whileInView={{ x: [0, -100], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__about-offer"
      >
        <h2>What I offer?</h2>
        <p className="p-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur,
          alias aut laborum quibusdam molestiae voluptate. Perferendis laborum
          voluptas at qui officiis incidunt odio, sapiente error libero mollitia
          velit quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Animi, facilis est nemo harum qui odit atque quia ad quo
          laboriosam, alias temporibus ratione magni pariatur debitis culpa
          minus esse adipisci.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
