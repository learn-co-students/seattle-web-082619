import React from 'react'
import img from '../hog-imgs/augustus_gloop.jpg'
import PigDetails from './PigDetails'

class Pig extends React.Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    const { name } = this.props.pig
    return (
      <div className='ui eight wide column' onClick={this.handleClick}>
        <h4>{name}</h4>
        <img src={img} alt='pig'/>
        {!this.state.isClicked ? null : <PigDetails pig={this.props.pig} /> }
      </div>
    )
  }
}

export default Pig;