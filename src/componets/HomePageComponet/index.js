import React, { Component } from 'react';

import DRYCatDogComponent from '../DRYCatDogComponent';

class HomePage extends Component {
    constructor(props) {
        super(props);
        
        this.handleCatUpvote = this.handleCatUpvote.bind(this);
        this.handleCatDownvote = this.handleCatDownvote.bind(this);
        this.handleDogUpvote = this.handleDogUpvote.bind(this);
        this.handleDogDownvote = this.handleDogDownvote.bind(this);
        this.handleShowWinner = this.handleShowWinner.bind(this);
        this.handleResetAll = this.handleResetAll.bind(this);

        this.state = {
            catUpvote: 0,
            catDownvote: 0,
            dogUpvote: 0,
            dogDownvote: 0,
            showWinner: <h1>Hi</h1>,
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

    handleShowWinner() {
        const totalScoreCat = ( this.state.catDownvote + this.state.catUpvote );
        const totalScoreDog = ( this.state.dogDownvote + this.state.dogUpvote );
        
        console.log('Show winner button clicked!!!');
        console.log(totalScoreCat, totalScoreDog);

        if ( totalScoreCat > totalScoreDog ) {
            this.setState( prevState => {
                return {
                    showWinner: prevState.showWinner = <h1>Cat is the Winner</h1>
                };
            });  
        } else if ( totalScoreCat < totalScoreDog ) {
            this.setState( prevState => {
                return {
                    showWinner: prevState.showWinner = <h1>Dog is the Winner</h1>
                };
            });  
        } else {
            this.setState( prevState => {
                return {
                    showWinner: prevState.showWinner = <h1>It's a tie</h1>
                };
            });  
        }
      
    }

    handleResetAll() {
        console.log('Reset button clicked!!!');
        this.setState( prevState => {
            return {
            catUpvote: prevState.catUpvote = 0,
            catDownvote: prevState.catDownvote = 0,
            dogUpvote: prevState.dogUpvote = 0,
            dogDownvote: prevState.dogDownvote = 0,
            showWinner: prevState.showWinner = <h1>Play Again</h1>,
            };
        });
    }

    render() {
        return(
            <div style={mainIndexPageStyle}>
                <h1 style={homePageStyle}>Hello from home page component</h1>

                {this.state.showWinner}
                
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
                <div>
                    <button style={ComponentBottonStyle} onClick={this.handleShowWinner}>Show Winner</button>
                    <button style={ComponentBottonStyle} onClick={this.handleResetAll}>Reset Score</button>
                </div>

                
            </div>
        );
    }
}

// BEST PRACTICE TO KEEP OUT OF RENDER METHOD
const ComponentBottonStyle = {
    display: 'inline-block',
    width: '400px',
    height: '50px',
    fontSize: '1.8rem',
    color: '#444',
    margin: '0 38px',
};

const homePageStyle = {
    textAlign: 'center',
    fontSize: '3rem',
    color: '#eee',
    background: '#333',
};

const mainIndexPageStyle = {
    textAlign: 'center',
    maxWidth: '960px',
    margin: '0 auto',
    marginBottom: '150px',
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