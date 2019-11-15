import React from 'react';
import MovieCard from './MovieCard';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';

class Movies extends React.Component {


  renderMovies = () => {
    return this.props.movies.map((movie) => {
      return <MovieCard key={movie.id} movie={movie} />
    })
  }

  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    return (
      <React.Fragment>
        {this.renderMovies()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    movies: state.movies.films
  }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch)
  return {
    fetchMovies: () => dispatch(fetchMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);