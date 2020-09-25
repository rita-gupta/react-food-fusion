import React, {Component} from 'react'
import { Navbar, NavbarBrand, Jumbotron, Collapse, Nav, NavItem, NavbarToggler, Button,Modal,ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../Css/Header.css';




 class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
    }



 toggleNav = () => {
     this.setState ({isNavOpen :!this.state.isNavOpen})

}

toggleModal = () => {
    this.setState ({isModalOpen :!this.state.isModalOpen})

}

handleLogin = (e) => {
    e.preventDefault();
    this.toggleModal();
    console.log(`Username: ${this.username.value}, Password: ${this.password.value}, Remember Me :${this.remember.checked}`)
}


render(){
    return (
        <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> 
        <ModalHeader toggle={this.toggleModal} >Log In</ModalHeader>
        <ModalBody>
        <Form onSubmit={this.handleLogin}>
        <FormGroup>
        <Label htmlFor="username">User Name</Label>
        <Input type="text" id="username" name="username" 
        innerRef={(input) => this.username = input}
        />

        </FormGroup>
        <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password"
        innerRef={(input) => this.password = input}/>
        </FormGroup>
        <FormGroup check>
        <Label check>
        <Input type="checkbox" name="remember"
        innerRef={(input) => this.remember = input}
        />
        Remember me
        </Label>
        </FormGroup>
<Button type='submit' color='primary'>Login</Button>
        </Form>
        </ModalBody>
        </Modal>
            <Navbar dark expand="md">
                <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand href="/">
                        FoodFusion
        </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home"> <span className="fa fa-home fa-lg"></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span> About Us
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span>
                            Menu
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Conatct Us
                            </NavLink>
                            </NavItem>

                        </Nav>
                        <Nav className='ml-auto' navbar>
                        <NavItem>
                        <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-sign-in fa-lg"></span>Login</Button>
                        </NavItem></Nav>
                    </Collapse>
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
   
}

export default HeaderComponent;
