import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./Plans.scss";

const plansData = [
  {
    id: 0,
    name: "Training program #1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptatum nemo ipsa quisquam voluptatem natus aut facere suscipit neque quam dolorum nesciunt.",
    price: "39,99€",
    imgUrl: images.gym,
    tags: ["Training Programs", "All"],
  },
  {
    id: 1,
    name: "Diet #1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptatum nemo ipsa quisquam voluptatem natus aut facere suscipit neque quam dolorum nesciunt.",
    price: "10,99€",
    imgUrl: images.gym,
    tags: ["Diets", "All"],
  },
  {
    id: 2,
    name: "Diet #2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptatum nemo ipsa quisquam voluptatem natus aut facere suscipit neque quam dolorum nesciunt.",
    price: "29,99€",
    imgUrl: images.gym,
    tags: ["Diets", "All"],
  },
  {
    id: 3,
    name: "Training program #2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptatum nemo ipsa quisquam voluptatem natus aut facere suscipit neque quam dolorum nesciunt.",
    price: "99,99€",
    imgUrl: images.gym,
    tags: ["Training Programs", "All"],
  },
];

const Plans = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [plans, setPlans] = useState(plansData);
  const [filterPlans, setFilterPlans] = useState(plansData);
  const [isHovering, setIsHovering] = useState({});

  const handlePlanFilter = (item) => {
    setActiveFilter(item);

    if (item === "All") {
      setFilterPlans(plans);
    } else {
      setFilterPlans(plans.filter((plan) => plan.tags.includes(item)));
    }
  };

  const handleMouseOver = (index) => {
    setIsHovering(filterPlans[index]);
  };

  const handleMouseLeave = () => {
    setIsHovering({});
  };

  return (
    <div id="plans" className="app__plans">
      <div className="app__plans-header head-text">
        <motion.h2
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          My plans
        </motion.h2>
        <motion.h2
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          For <span>You</span>
        </motion.h2>
      </div>
      <div className="app__plans-filter">
        {["Training Programs", "Diets", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handlePlanFilter(item)}
            className={`app__plans-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        className="app__plans-container"
      >
        {filterPlans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: [1, 1.3] }}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}
            className="app__plans-item app__flex"
          >
            <h2>{plan.name}</h2>
            {isHovering === plan && (
              <p className="app__plans-description">{plan.description}</p>
            )}
            <p>{plan.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Plans;
