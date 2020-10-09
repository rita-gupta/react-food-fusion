import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './components/CommetForm';


const RenderItem = ({dish}) => {
    return(
        <Card>
        <CardImg top src = {dish.image} alt={dish.name} />
        <CardBody>
        <CardTitle>
        {dish.name} </CardTitle>
        <CardText>{dish.description}</CardText>
        </CardBody>
        </Card>
    ) 
}

const RenderComment = ({comments, dishId, addComment}) => {
    return(

       <div>
        {comments.map(comment => (
            <ul className="list-unstyled">
            <li>{comment.comment}</li>
            <li>{`--${comment.author}`}, {new Intl.DateTimeFormat('en-US',{year:"numeric",month:"short", day:"2-digit"}).format(new Date(Date.parse(comment.date)))}</li>
            </ul>
        ))}

{/* dishId={dishId} dishDetailComponent -> dishId stored in a new var or prop that is dishID */}
        <CommentForm dishId={dishId} addComment={addComment} />

        </div>

    )
    

}



const DishDetailComponent = (props) => {
        return (
            <div className="container">
            <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
              
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <RenderItem dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
            <h2>Comments</h2>
            <RenderComment comments={props.comments} dishId={props.dish.id} addComment={props.addComment}/>

            </div>
            </div>
            </div>
            </div>
            
            
        )
    } 





export default DishDetailComponent;