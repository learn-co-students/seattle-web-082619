import React, { Component } from "react";
import Food from "./Food";

class Plate extends Component {

  // displayPlate = () => {
  //   return this.props.plateFood.map((foodItem, idx) => {
  //     return <Food food={foodItem} key={idx} handleClick={this.props.eatFood}/>
  //   })
  // };

  render() {
    return (
      <div className="container jumbotron">
        <h4>PLATE CONTENTS</h4>
        <div className="row">{this.props.displayFood(this.props.plateFood, this.props.eatFood)}</div>
      </div>
    );
  }
}

export default Plate;
