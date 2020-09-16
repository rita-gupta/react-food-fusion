import React, { Component } from 'react'; 
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponents';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from '../DishDetailComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomeComponent from './HomeComponent';



class Main extends Component {
    constructor (props){
        super(props)
        this.state={
          dishes:DISHES,
          selectedDish:null
        }
      }


      onDishSelected(dishId){
        this.setState({
          selectedDish:dishId
        })
        console.log("initial state updated");
  
      }
      
        render(){

          const HomePage = () => {
            return(
              <HomeComponent />
            )
          }
          return (
            <div>
      {/*<HeaderComponent />

          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)}/>
          <DishDetail dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      <FooterComponent />*/}

      <HeaderComponent />

      <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />} />

      <Redirect to="/home" />
      </Switch>
      <FooterComponent />
            </div>
          );
        }
       
      }


      //installed bootstrap, reactstrap, react-popper 
      
      export default Main;
      