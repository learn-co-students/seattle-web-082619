import React from 'react';

function PigDetails(props) {
  const { specialty, greased, weight } = props.pig
  return (
    <ul>
      <li>{specialty}</li>
      <li>{greased ? "piggy greased" : "No grease"}</li>
      <li>{weight} lbs</li>
      <li>Highest medal: {props.pig['highest medal achieved']}</li>
  </ul>
  )
}

export default PigDetails