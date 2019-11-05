import React from 'react';
import hogs from '../porkers_data';
import Pig from './Pig';

class PigPen extends React.Component {
  state = {
    hogs
  }

  renderHogs = () => {
    return this.state.hogs.map((hog, i) => {
      return <Pig pig={hog} key={i} />
    })
  }

  render() {
    return (
      <div className='ui grid container'>{this.renderHogs()}</div>
    )
  }
}

export default PigPen