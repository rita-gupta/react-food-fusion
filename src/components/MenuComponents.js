import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommetForm";
import LoadingComponent from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const RenderMenuItem = ({ dish }) => {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        {/* call the onDishSelected bhanne function and pass the dish as a parameter / arguments */}
        <CardImg width='100%' src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
};

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className='col-12 col-md-5 m-1'>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  if (props.isLoading) {
    return (
      <div className='conatiner'>
        <div className='row'>
          <LoadingComponent />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className='conatiner'>
        <div className='row'>
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/home'>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>

          <div className='col-12'>
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          {menu}
          <CommentForm />
        </div>
      </div>
    );
  }
};

export default Menu;
