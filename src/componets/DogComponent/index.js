import React, { Component } from 'react';

class DogComponent extends Component {
    render() {
        
        const dogComponentHeaderStyle = {
            textAlign: 'center',
            fontSize: '2rem',
            color: '#444',
        };

        const dogComponentDivStyle = {
            displayl: 'inline-block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
            float: 'left',
        };

        const dogComponentBottonStyle = {
            width: '200px',
            margin: '5px auto',
            fontSize: '1.8rem',
            color: '#444',
        };
    
        return(
            <div style={dogComponentDivStyle}>
                <h3 style={dogComponentHeaderStyle}>Hello From Dog Component</h3>
                <img style={{height: '400px', width: '400px'}} src="http://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg" alt="Cutest puppy ever"/>
                <button style={dogComponentBottonStyle} onClick={this.props.handleDogDownvote}>Down Vote: {this.props.dogDownvote}</button><button style={dogComponentBottonStyle} onClick={this.props.handleDogUpvote}>Up Vote: {this.props.dogUpvote}</button>
                <h3 style={dogComponentHeaderStyle}>Total Score: {this.props.dogDownvote + this.props.dogUpvote}</h3>
            </div>
        );
    }
}

export default DogComponent;