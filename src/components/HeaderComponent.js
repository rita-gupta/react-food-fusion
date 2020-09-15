import React from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import '../Css/Header.css';

function HeaderComponent() {
    return (
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarBrand href="/">
                        FoodFusion
        </NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="conatiner">
                    <div className="row header__row">
                        <div className="col-12 col-sm-6">
                            <h1>Food Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our
                lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    )
}

export default HeaderComponent;
