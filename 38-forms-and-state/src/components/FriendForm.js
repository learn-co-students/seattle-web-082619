import React from 'react'

class FriendForm extends React.Component {

  state = {
    name: ""
  };

  handleChangeName = e => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onAddFriend(this.state);
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor="name">New Friend Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
};

export default FriendForm