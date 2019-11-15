import React from 'react';
import CharCard from './CharCard';
import { connect } from 'react-redux'

const Characters = props => {
  const { chars } = props;

  const mapChars = () => {
    let charArray = Object.values(chars);
    let charCards = charArray.map(char => {
      return (
        <CharCard 
          key={ char.id }
          char={ char }
        />
      )
    })
    return charCards;
  }

  return (
    <div className='container'>
      {mapChars()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    chars: state.chars.chars
  }
}

export default connect(mapStateToProps)(Characters);