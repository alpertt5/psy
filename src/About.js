import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const About = () => {
    return (
        <>
        <ReactCSSTransitionGroup
        transitionName="example" transitionAppear={true}
        transitionAppearTimeout={700}>
        <h1>Hakkimda</h1>
        </ReactCSSTransitionGroup>
        </>
    )
}

export default About
