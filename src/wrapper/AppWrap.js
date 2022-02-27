import React from "react";

const AppWrap = (Component, idName, classNames) => {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <Component />
    </div>
  );
};

export default AppWrap;
