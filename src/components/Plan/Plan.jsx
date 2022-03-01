import React from "react";

import "./Plan.scss";

const Plan = ({ plan }) => {
  return <div className="app__plan">{plan.name}</div>;
};

export default Plan;
