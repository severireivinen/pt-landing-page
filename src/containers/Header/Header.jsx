import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div id="home" className="app__header">
      <h1 className="app__header-head head-text">
        Are you ready for a <br />
        <span>Challenge</span>
      </h1>
      <p className="app__header-paragraph">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ex
        suscipit commodi qui saepe veritatis eaque amet reprehenderit voluptas.
      </p>
    </div>
  );
};

export default Header;
