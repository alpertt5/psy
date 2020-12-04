import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const About = () => {
  return (
    <>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={700}
      ></ReactCSSTransitionGroup>
    </>
  );
};

export default About;
