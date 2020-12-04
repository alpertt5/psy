import React, {useState} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./Presentations.css";
import presentationList from "./PresentationList";


const Presentations = () => {



    return (
        <ReactCSSTransitionGroup
        transitionName="example" transitionAppear={true}
        transitionAppearTimeout={700}>

        <div className="presentations-container">
            {presentationList.map((listItem, index) => (
                <>
                    { 
                    !(index % 2)
                    ? 
                    <>
                    <div key={index} className="presentation-card">
                        <div className="flex-item">
                            <h1> {listItem.title} </h1>
                            <p> {listItem.content}</p>
                        </div>
                        <div className="flex-item">
                            <img alt="image" src={require( `${listItem.imageUrl}`).default}/>
                        </div>
                    </div>
                    </> 
                    : 
                    <>
                    <div key={index} className="presentation-card flex-reverse">
                        <div className="flex-item">
                            <img alt="image" src={require( `${listItem.imageUrl}`).default}/>
                        </div>
                        <div className="flex-item">
                            <h1> {listItem.title} </h1>
                            <p> {listItem.content}</p>
                        </div>
                    </div>
                    </> 
                    }
                    
                    </>
            ))}
            
        </div>

        </ReactCSSTransitionGroup>
    );
}

export default Presentations
