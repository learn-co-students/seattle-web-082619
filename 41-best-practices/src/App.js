import React, { Component } from "react";
import Title from './components/Title'

class App extends Component {

  state = {
    username: "peter01"
  }


  render() {
    return (
      <div>
        <Title componentName="Flatiron" />
      </div>
    );
  }
}

export default App;
