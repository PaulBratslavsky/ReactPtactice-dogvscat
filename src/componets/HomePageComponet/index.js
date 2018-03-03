import React, { Component } from 'react';
import DRYCatDogComponent from '../DRYCatDogComponent';

class HomePage extends Component {
    constructor(props) {
        super(props);
        
        this.handleCatUpvote = this.handleCatUpvote.bind(this);
        this.handleCatDownvote = this.handleCatDownvote.bind(this);
        this.handleDogUpvote = this.handleDogUpvote.bind(this);
        this.handleDogDownvote =this.handleDogDownvote.bind(this);

        this.state = {
            catUpvote: 0,
            catDownvote: 0,
            dogUpvote: 0,
            dogDownvote: 0,
        }
    }

    handleCatUpvote() {
        console.log('Cat upvote clicked');
        this.setState( prevState => {
            return {
                catUpvote: prevState.catUpvote + 1
            };
        });
    }

    handleCatDownvote() {
        console.log('Cat downvote clicked');
        this.setState( prevState => {
            return {
                catDownvote: prevState.catDownvote - 1
            };
        });
    }

    handleDogUpvote() {
        console.log('Dog upvote clicked');
        this.setState( prevState => {
            return {
                dogUpvote: prevState.dogUpvote + 1
            };
        });
    }

    handleDogDownvote() {
        console.log('Dog down vote clicked');
        this.setState( prevState => {
            return {
                dogDownvote: prevState.dogDownvote - 1
            };
        });
    }

    render() {
        return(
            <div style={mainIndexPageStyle}>
                <h1 style={homePageStyle}>Hello from home page component</h1>
                
                <DRYCatDogComponent 
                    headerText={"Hello from cat component"}
                    imageUrl={"http://www.cutestpaw.com/wp-content/uploads/2011/11/Henke.jpg"}
                    upvote={this.state.catUpvote}
                    downvote={this.state.catDownvote}
                    handleUpvote={this.handleCatUpvote}
                    handleDownvote={this.handleCatDownvote}
                />

                <DRYCatDogComponent 
                    headerText={"Hello from dog component"}
                    imageUrl={"http://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"}
                    upvote={this.state.dogUpvote}
                    downvote={this.state.dogDownvote}
                    handleUpvote={this.handleDogUpvote}
                    handleDownvote={this.handleDogDownvote}
                />

                
            </div>
        );
    }
}

// BEST PRACTICE TO KEEP OUT OF RENDER METHOD
const homePageStyle = {
    textAlign: 'center',
    fontSize: '3rem',
    color: '#eee',
};

const mainIndexPageStyle = {
    textAlign: 'center',
    background: '#444',
    maxWidth: '960px',
    margin: '0 auto',
};

export default HomePage;

// ALWAYS THINK ABOUT DRY CODE DONT REPEAT YOURSELF

/*

<CatComponent 
    catUpvote={this.state.catUpvote}
    catDownvote={this.state.catDownvote}
    handleCatUpvote={this.handleCatUpvote}
    handleCatDownvote={this.handleCatDownvote}
/>
<DogComponent 
dogUpvote={this.state.dogUpvote}
dogDownvote={this.state.dogDownvote}
handleDogUpvote={this.handleDogUpvote}
handleDogDownvote={this.handleDogDownvote}
/>

REPLACED WIHT MY DRYCATDOGCOMPONENT

*/