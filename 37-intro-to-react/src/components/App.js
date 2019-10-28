import React, { Component, Fragment } from "react";
import { Greeting, Goodbye } from "./Greeting";
import FriendBrowser from  './FriendBrowser'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Greeting />
        <Goodbye />
        <FriendBrowser />
      </Fragment>
    );
  }
}

export default App;
