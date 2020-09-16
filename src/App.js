import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import Main from './components/MainComponent';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';

class App extends Component {

  render(){
    return (
      <Router>
      <div className="App">
      <Main />
      </div>
      </Router>
      
    );
  }
 
}
//installed bootstrap, reactstrap, react-popper 

export default App;
