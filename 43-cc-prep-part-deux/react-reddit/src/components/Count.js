import React, { useState } from 'react';

const Count = props => {

  const initialState = {
    a: 'a',
    b: 'b',
    c: 'c'
  }
  const [state, setState] = useState(initialState)
  console.log(state)
  return (
    <button onClick={() => setState({...state, b: 'd'})}>{state.a}</button>
  )
}

export default Count