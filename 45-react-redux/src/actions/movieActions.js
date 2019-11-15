export const fetchMovies = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/movies')
            .then(res => res.json())
            .then(json => dispatch(saveMovies(json)))
  } 
}

export const saveMovies = (movies) => {
  return {
    type: 'SAVE MOVIES',
    payload: movies
  }
}