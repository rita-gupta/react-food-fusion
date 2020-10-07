import React, { Component } from 'react';
// import {Navbar, NavbarBrand} from 'reactstrap';
// import Menu from './components/MenuComponents';
import Main from './components/MainComponent';
import { BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configureStore';
import './App.css';

const store = configureStore ();

class App extends Component {

  render(){
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
      <Main />
      </div>
      </Router>
      </Provider>
      
      
    );
  }
 
}
//installed bootstrap, reactstrap, react-popper 

export default App;
