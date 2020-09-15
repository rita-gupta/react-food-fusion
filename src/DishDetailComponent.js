import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap'



const DishDetail = (props) => {
    if (props.dishSelected != null){
        return (
            <div>
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card>
            <CardImg top src = {props.dishSelected.image} alt={props.dishSelected.name} />
            <CardBody>
            <CardTitle>
            {props.dishSelected.name} </CardTitle>
            <CardText>{props.dishSelected.description}</CardText>
            </CardBody>
            </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
            <h2>Comments</h2>
            {props.dishSelected.comments.map(comment => (
                <ul className="list-unstyled">
                <li>{comment.comment}</li>
                <li>{`--${comment.author}, ${comment.date}`}</li>
                </ul>
            ))}
            </div>
            </div>
            </div>
            
        )
    } else {
        return(
            <div></div>
        )
    }
}


// const RenderDishDetail = (props) => {
//     return(
//         <Card>
//         <CardImg src={props.dish.image} alt={props.dish.image}></CardImg>
//         <CardBody>
//         <CardTitle>{props.dish.name}</CardTitle>
//         <CardText>{props.dish.text}</CardText>
//         </CardBody>
//         </Card>
//     )
// }

// // initialy -> null 
// // const RenderDishDetail = ({ dish }) => {

// //   return (//object of a dish -> name , id, image, description
// //     <Card>
// //       <CardImg top src={dish.image} alt={dish.name} />
// //       <CardBody>
// //         <CardTitle>{dish.name}</CardTitle>
// //         <CardText>{dish.description}</CardText>
// //       </CardBody>
// //     </Card>
// //   )
// // }

// const RenderComment = (props) => {
//     return(
//         <>
//         <h2>Comments</h2>
//         {props.comments.map(comment => (
//             <ul className="list-unstyled">
//             <li>{comment.comment}</li>
//             <li>{`--${comment.author}, ${comment.date}`}</li>
//             </ul>
//         ))}
//         </>
//     )
// }

// // const RenderComment = ({comments}) => {
// //   return (
// //     <>
// //       <h2>Comments</h2>
// //       {comments.map(comment => (
// //         <ul className="list-unstyled">
// //           <li>{comment.comment}</li>
// //           <li>{`-- ${comment.author}, ${comment.date}`}</li>
// //         </ul>
// //       ))}
// //     </>
// //   )
// // }

// function DishDetail(props){
//     if(props.dish !=null){
//         return(
//             <div className="row">
//             <div className="col-12 col-md-5 m-1">
//             <RenderDishDetail dish={props.dish} />
//             </div>
//             <div className="col-12 col-md-5 m-1">

//             <RenderComment comments={props.dish.comments} />
//             </div>
//             </div>
    
//         )
//     } else {
//         return(
//             <div></div>
//         )
//     }
// }


// // function DishDetail(props) {
// //   if (props.dish != null) {
// //     return (
// //       <div className='row'>
// //         <div className="col-12 col-md-5 m-1">
// //           <RenderDishDetail dish={props.dish} />
// //         </div>
// //         <div classNamr="col-12 col-md-5 m-1">
// //             <RenderComment comments={props.dish.comments}/>
// //         </div>
// //       </div>
// //     )
// //   }
// //   else {
// //     return (
// //       <div></div>
// //     )
// //   }
// // }


export default DishDetail;