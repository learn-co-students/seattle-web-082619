import React, { Component } from "react";
import Food from "./Food";

class Buffet extends Component {
  //this.props.addFoodToPlate = function prop from App

  // displayBuffet = () => {
  //   return this.props.food.map((foodItem, idx) => {
  //     return <Food food={foodItem} key={idx} handleClick={this.props.addFoodToPlate}/>
  //   })
  // };

  render() {
    return (
      <div className="container jumbotron">
        <h4>{this.props.name} CONTENTS</h4>
        <div className="row">{this.props.displayFood(this.props.food, this.props.handleClick )}</div>
      </div>
    );
  }
}

export default Buffet;
