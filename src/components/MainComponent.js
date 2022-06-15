/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./Header";
import Footer from "./Footer";
import {Switch , Route , Redirect} from 'react-router-dom'; 

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
        return <div></div>;
      }
    } else {
      {
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
        <Header />

        <Menu
          dishes={this.state.dishes}
          test={(dishId) => this.setSelectedDish(dishId)}
        />
        {this.renderDish()}
        <Footer />  
      </div>
    );
  }
}

export default Main;
