import React, { Component } from 'react';

class CatComponent extends Component {
    render() {
        return(
            <div style={catComponentStyle}>
                <h3 style={catComponentHeaderStyle}>Hello From Cat Component</h3>
                <img style={{height: '400px', width: '400px'}}  src="http://www.cutestpaw.com/wp-content/uploads/2011/11/Henke.jpg" alt="Cute Cat"/>
                <button style={catComponentBottonStyle} onClick={this.props.handleCatDownvote}>Down Vote: {this.props.catDownvote}</button><button style={catComponentBottonStyle} onClick={this.props.handleCatUpvote}>Up Vote: {this.props.catUpvote}</button>
                <h3 style={catComponentHeaderStyle}>Total Score: {this.props.catDownvote + this.props.catUpvote}</h3>
            </div>
        );
    }
}

// BEST PRACTICE TO KEEP OUT OF RENDER METHOD
const catComponentHeaderStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#444',
};

const catComponentStyle = {
    displayl: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    float: 'left',
}

const catComponentBottonStyle = {
    width: '200px',
    margin: '5px auto',
    fontSize: '1.8rem',
    color: '#444',
};

export default CatComponent;