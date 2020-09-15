import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
      <Main />
      </div>
    );
  }
 
}
//installed bootstrap, reactstrap, react-popper 

export default App;
