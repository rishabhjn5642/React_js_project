import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import {AppBar, Tabs, Tab} from 'material-ui'

class App extends Component {
  render() {
    return (
   
          <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="">News</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Galley</a>
            <a href="">Enquiry</a>
    </div>
    );
  }
}

export default App;
