import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            isopen:false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({isopen: !this.state.isopen})
    }
  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
          <NavbarToggler onClick={this.toggleNav} className='mr-3'/>
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                alt="logo of the restaurant"
                height="30"
                width="41"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isopen} navbar>
            <Nav navbar className='ml-3'>
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
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
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
      </>
    );
  }
}

export default Header;
