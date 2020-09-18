import React, { Component } from 'react'; 
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponents';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import ContactUsComponent from './ContactUsComponent';



class Main extends Component {
    constructor (props){
        super(props)
        this.state={
          dishes:DISHES,
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders:LEADERS,
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
              <HomeComponent 
              //featured dish
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              //promotions
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              //leaders
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}

              />
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
      <Route path="/ContactUs" component={ContactUsComponent} />

      <Redirect to="/home" />
      </Switch>
      <FooterComponent />
            </div>
          );
        }
       
      }


      //installed bootstrap, reactstrap, react-popper 
      
      export default Main;
      