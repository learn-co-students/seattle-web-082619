import React, { Component } from "react";

class Food extends Component {

  render() {

    const { name, image } = this.props.food

    return (
      <div className="col col-md-2">
        <div className="card" onClick={(event) => this.props.handleClick(this.props.food, event)}>
          <img className="card-img-top" src={image} alt={name}/>
          <div className="card-body">
            <p>{name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Food;
