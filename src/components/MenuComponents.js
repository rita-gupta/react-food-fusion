// import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
// import DishDetail from '../DishDetailComponent';



// class Menu extends Component {

//   constructor() {
//     super();
//     //state is basic method to declare a varible in a component
//     this.state = {
//         selectedDish:null
  
//     }

//   }
//   onDishSelected(dish){
//       this.setState({
//           selectedDish:dish
//       })
//   }


// //   renderDish(dish){
// //       if(dish!=null){
// //           return(
// //             <Card>
// //             <CardImg top src={dish.image} alt={dish.name} />
// //             <CardBody>
// //             <CardTitle>{dish.name}</CardTitle>
// //             <CardText>{dish.description}</CardText>
// //             </CardBody>
            
// //             </Card>
// //           )
// //       }else{
// //         return(
// //             <div><h1>data</h1></div>
// //         )
// //         }
// //   }

//   //render method
//   // return
//   // this.state.dishes
//   render() {

//     const menu = this.props.dishes.map(dish => {
//         return (
//             <div key={dish.id} className="col-12 col-md-5 m-1">           
//           <Card
//           onClick={() => this.onDishSelected(dish)}>
//           <CardImg  width="100%" src={dish.image} alt={dish.name} />
//           <CardImgOverlay>
//           <CardTitle>{dish.name}</CardTitle>
//           </CardImgOverlay>
          
//           </Card>
//             </div>
//         )
//     })

//     console.log(this.props.dishes)

//     return (
//       <div className="container">
//         <div className='row'>
//          {menu}
//         </div>
//         <div className="row">
//         <div className="col-12 col-md-5 m-1">
//         {this.renderDish(this.state.selectedDish)}
//         </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Menu;



import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class Menu extends Component {

 

  //render method
  // return
  // this.state.dishes
  render() {
 

    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card 
          onClick={() => this.props.onClick(dish.id)}>
          {/* call the onDishSelected bhanne function and pass the dish as a parameter / arguments */}
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>

      )
    })

    

    return (
      <div className="container">
        <div className='row'>
          {menu}
        </div>
      </div>
    )
  }
}

export default Menu;