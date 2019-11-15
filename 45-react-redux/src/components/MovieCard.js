import React from 'react';

const MovieCard = props => {
  return (
    <div className='movie'>
      <img src={props.movie.image} alt={props.movie.name}/>
    </div>
  )
}

export default MovieCard;