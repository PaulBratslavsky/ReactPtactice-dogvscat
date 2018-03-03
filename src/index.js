import React, { Componet } from 'react';
import ReactDom from 'react-dom';
import HomePageComponent from './componets/HomePageComponet';


import '../src/css/normalize.css';

const App = () => { return <HomePageComponent />; } 


ReactDom.render( <App />, document.getElementById('root'));