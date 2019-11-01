import React from "react";
import Friend from "./Friend";

class FriendBrowser extends React.Component {
  

  renderFriends() {
    return this.props.friends.map((item, index) => {
      return <Friend key={index} friendName={item.name} />;
    });
  }

  render() {
    return (
      <div className="test">
        <h3>My Friends</h3>
        <ul>{this.renderFriends()}</ul>
      </div>
    );
  }
}

export default FriendBrowser;
