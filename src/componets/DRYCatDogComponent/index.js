import React from 'react';

const DRYCatDogComponent = (props) => {
    return(
        <div style={ComponentStyle}>
            <h3 style={ComponentHeaderStyle}>{props.headerText}</h3>
            <img style={{height: '400px', width: '400px'}}  src={props.imageUrl} alt="Cute Cat"/>
            <button style={ComponentBottonStyle} onClick={props.handleDownvote}>Down Vote: {props.downvote}</button><button style={ComponentBottonStyle} onClick={props.handleUpvote}>Up Vote: {props.upvote}</button>
            <h3 style={ComponentHeaderStyle}>Total Score: {props.downvote + props.upvote}</h3>
        </div>
    );
}

// BEST PRACTICE TO KEEP OUT OF RENDER METHOD
const ComponentHeaderStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#444',
};

const ComponentStyle = {
    displayl: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    float: 'left',
}

const ComponentBottonStyle = {
    width: '200px',
    margin: '5px auto',
    fontSize: '1.8rem',
    color: '#444',
};

export default DRYCatDogComponent;