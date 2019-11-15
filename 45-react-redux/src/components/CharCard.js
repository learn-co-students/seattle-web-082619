import React from 'react';
import { connect } from 'react-redux';
import { increaseVote, decreaseVote } from '../actions/characterActions';

const CharCard = props => {

  const { char, increaseVote, decreaseVote } = props;

  return (
    <div className='card'>
      <h2>{ char.name }</h2>
      <p>Votes: { char.votes }</p>
      <img src={ char.img } alt={ char.name }></img>
      <br />
      <button onClick={() => {
        increaseVote(char.id)
      }}>
        Upvote
      </button>
      <button onClick={() => {
        decreaseVote(char.id)
      }}>
        Downvote
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    increaseVote: id => dispatch(increaseVote(id)),
    decreaseVote: id => dispatch(decreaseVote(id))
  }
}

export default connect(null, mapDispatchToProps)(CharCard)