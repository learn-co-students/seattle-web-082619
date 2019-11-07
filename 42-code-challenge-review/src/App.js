import React, { Component } from "react";
import "./App.css";
import Buffet from "./components/Buffet";
import FOOD_ITEMS from "./FOOD.js";
import Food from './components/Food'

class App extends Component {
  state = {
    buffetFood: FOOD_ITEMS.food, //this resolves to an array of objects with "name" and "image" props
    plateFood: [],
    currentFoodId: 1,
  };

  addFoodToPlate = (foodItem, event) => {
    event.persist();
    const newFood = {...foodItem, id: this.state.currentFoodId}
    this.setState({
      plateFood: [...this.state.plateFood, newFood],
      currentFoodId: this.state.currentFoodId + 1
    })
  }

  eatFood = (foodItem, event) => {
    // event.persist();
    console.log(event)

    const filteredArray = this.state.plateFood.filter((food) => {
      return food.id !== foodItem.id
    })

    this.setState({
      plateFood: filteredArray
    })
  }

  displayFood = (foodToDisplay, methodForFood) => {
    return foodToDisplay.map((foodItem, idx) => {
      return <Food food={foodItem} key={idx} handleClick={methodForFood}/>
    })
  };

  render() {
    return (
      <div className="App">
        <h3>Welcome to the All-You-Can-Eat Buffet</h3>
        <Buffet name={'Buffet'} food={this.state.buffetFood} handleClick={this.addFoodToPlate} displayFood={this.displayFood}/>
        <Buffet name="plate" food={this.state.plateFood} handleClick={this.eatFood} displayFood={this.displayFood}/>
      </div>
    );
  }
}

export default App;
