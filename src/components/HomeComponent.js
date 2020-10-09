import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import LoadingComponent from './LoadingComponent';

const RenderCard =({item, isLoading, errMess}) => {
    if(isLoading){
        return (
            <LoadingComponent/>
        )
    
    }else if(errMess){
        return(
            <h4>{errMess}</h4>
        )
    } else {
        return(
            <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> :null }
                <CardTitle>{item.name}
                </CardTitle>
                <CardText>{item.description}
                </CardText>
            </CardBody>
        </Card>
        )
    
    }
    
    }
    
function HomeComponent(props) {
    return (
        <div className="container">
            <div className="row">
            <div className="col-12 col-md">
            <RenderCard item={props.dish} isLoading={props.dishLoading} errMess={props.dishErrmess}/> 

            </div>
            <div className="col-12 col-md">
            <RenderCard item={props.promotion}  /> 

            </div>
            <div className="col-12 col-md">
            <RenderCard item={props.leader} /> 

            </div>
            </div>

        </div>
    )
}

export default HomeComponent;
