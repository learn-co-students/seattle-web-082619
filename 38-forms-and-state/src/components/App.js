import React, { Component } from "react";
import { Greeting } from "./Greeting";
import FriendBrowser from "./FriendBrowser";
import FriendForm from "./FriendForm";
import "../App.css";

class App extends Component {
  state = {
    author: "john",
    friends: [{ name: "ian" }, { name: "ren" }, { name: "brian" }]
  };

  addFriend = newFriend => {
    // console.log("DAVID")
    // this.state.friends.push("David")
    // this.setState({ friends: ["david"] })
    this.setState(prevState => {
      return { friends: [...prevState.friends, newFriend] };
    });
  };

  render() {
    return (
      <div className="container">
        <Greeting />
        <FriendForm onAddFriend={this.addFriend} />
        <div className="jumbotron">
          <FriendBrowser
            friends={this.state.friends}
            onAddDavid={this.addDavid}
          />
        </div>
      </div>
    );
  }
}

export default App;
