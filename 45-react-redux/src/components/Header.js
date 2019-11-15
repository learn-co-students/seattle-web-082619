import React from 'react';

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      quotes: [
        "I love pressure. I eat it for breakfast.",
        "Put... the bunny... back... in the box.",
        "I want to take his face…off. Eyes. Nose. Skin. Teeth. It’s coming off.",
        "Hey! My mama lives in a trailer!",
        "That’s funny, my name’s Roger. Two Roger’s don’t make a right.",
        "Well Hoorah for the sounds of f@#*ing silence.",
        "Well, Baby-O, it's not exactly mai-thais and yatzee out here but... let's do it!",
        "I never disrobe before gunplay.",
        "I'll be taking these Huggies and whatever cash ya got."
      ],
      index: 0
    }
  }

  randomIndex = () => {
    const { quotes } = this.state
    const randomIndex = Math.floor(Math.random() * quotes.length)
    this.setState({
      index: randomIndex
    })
  }

  componentDidMount() {
    this.randomIndex();
  }

  render() {
    const { quotes, index } = this.state
    return (
      <header className="App-header" onClick={this.randomIndex}>
        {quotes[index]}
      </header>
    )
  }
}

export default Header;

// quotes courtesy of https://roobla.com/film/feature/22320/top-10-nicolas-cage-quotes/ - https://www.bustle.com/articles/12026-counting-down-50-of-nicolas-cages-most-ridiculous-movie-quotes-for-his-50th-birthday