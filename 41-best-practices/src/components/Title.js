import React, { Component, Fragment } from "react";

class Title extends Component {
  sayHi = () => {
    return <h2>I am a method element</h2>;
  };

  render() {
    return (
      <Fragment>
        <h1>Hello from {this.props.componentName} Component</h1>
        {((phrase) => {
          return <h2>I am an IIFE {phrase}</h2>;
        })("element")}
        {this.sayHi()}
      </Fragment>
    );
  }
}

Title.defaultProps = {
  componentName: "Title"
}

Title.displayName = "t"

export default Title;
