import React from 'react';
import Characters from './Characters';
import Movies from './Movies';
import { connect } from 'react-redux'; 

console.log(connect);
class MainContainer extends React.Component {
  

  // increaseVote = (cageId) => {
  //   this.setState({
  //     chars: {
  //       ...this.props.chars,
  //       [cageId]: {
  //         ...this.props.chars[cageId],
  //         votes: this.props.chars[cageId]['votes'] + 1
  //       }
  //     }
  //   })
  // }

  // decreaseVote = (cageId) => {
  //   this.setState({
  //     chars: {
  //       ...this.props.chars,
  //       [cageId]: {
  //         ...this.props.chars[cageId],
  //         votes: this.props.chars[cageId]['votes'] - 1
  //       }
  //     }
  //   })
  // }

  render() {
    return (
      <main>
        <Characters />
        <Movies />
      </main>
    )
  }
}



export default MainContainer;