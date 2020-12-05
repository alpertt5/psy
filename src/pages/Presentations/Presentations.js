import React, {useState} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./Presentations.css";
import presentationList from "./PresentationList";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Presentations = () => {



    return (
        // <ReactCSSTransitionGroup
        // transitionName="example" transitionAppear={true}
        // transitionAppearTimeout={700}>
        <Zoom>

        

        <div className="presentations-container">
            {presentationList.map((listItem, index) => (
                <>
                    { 
                    !(index % 2)
                    ? 
                    <>

                    <div key={index} className="presentation-card">
                        <Fade left>

                        <div className="flex-item">
                            <h1> {listItem.title} </h1>
                            <p> {listItem.content}</p>
                        </div>
                        </Fade>


                        <Fade right>

                        <div className="flex-item">
                            <img alt="image" src={require( `${listItem.imageUrl}`).default}/>
                        </div>

                        </Fade>
                    </div>
                    </> 
                    : 
                    <>
                    <div key={index} className="presentation-card flex-reverse">

                        <Fade left>

                        <div className="flex-item">
                            <img alt="image" src={require( `${listItem.imageUrl}`).default}/>
                        </div>
                        </Fade>

                        <Fade right>
                            
                        <div className="flex-item">
                            <h1> {listItem.title} </h1>
                            <p> {listItem.content}</p>
                        </div>
                        </Fade>
                    </div>
                    </> 
                    }
                    
                    </>
            ))}
            
        </div>
        </Zoom>

        // </ReactCSSTransitionGroup>
    );
}

export default Presentations
