export const increaseVote = id => {
  return {
    type: 'INCREASE VOTE',
    payload: id
  }
}

export const decreaseVote = id => {
  return {
    type: 'DECREASE VOTE',
    payload: id
  }
}