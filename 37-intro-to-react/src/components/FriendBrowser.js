import React from "react";
import Friend from "./Friend";

class FriendBrowser extends React.Component {
  state = {
    friends: [
      "katie",
      "tom",
      "spencer",
      "nathan",
      "soundarya"
    ]
  };

  renderFriends() {
    return this.state.friends.map((item, index) => {
      return <Friend key={item.id} friendName={item} />;
    });
  }

  render() {
    return <ul>{this.renderFriends()}</ul>;
  }
}

export default FriendBrowser;
