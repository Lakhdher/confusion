import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username : " + this.username.value + "Password : " + this.password.value
    );
    event.preventDefault();
  }

  toggleNav() {
    this.setState({ isopen: !this.state.isopen });
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} className="mr-3" />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                alt="logo of the restaurant"
                height="30"
                width="41"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isopen} navbar>
              <Nav navbar className="ml-3">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-log"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  we take inspiration from the world's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal} 
     
        >
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlfor="Username"></Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="Password"></Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember" /> Remember Me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;
