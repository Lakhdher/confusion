/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { dishes: DISHES, SelectedDishId: null };
  }

  setSelectedDish(dishId) {
    this.setState({ SelectedDishId: dishId });
  }

  renderDish() {
    if (this.state.SelectedDishId === null) {
      {
        console.log("feragh");      
        return <div></div>;
      }
    } else {
      {
        console.log("meebi");
      return (
      <DishDetail
        dish={
          this.state.dishes.filter((dish) => this.state.SelectedDishId === dish.id)[0]
        }
      />)
    }
    
    }
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          test={(dishId) => this.setSelectedDish(dishId)}
        />
        {this.renderDish()}
      </div>
    );
  }
}

export default Main;
