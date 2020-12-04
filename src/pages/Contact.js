import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Contact = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={700}
    >
      <h1>İletişim</h1>
    </ReactCSSTransitionGroup>
  );
};

export default Contact;
