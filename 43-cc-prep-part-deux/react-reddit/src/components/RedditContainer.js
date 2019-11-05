import React from 'react'
import UnreadContainer from './UnreadContainer'
import ReadContainer from './ReadContainer'
import Count from './Count'
const URL = 'https://www.reddit.com/r/reactjs.json'

class RedditContainer extends React.Component {
  state = {
    unreadArticles: [],
    readArticles: [],
    readCount: 0,
  }

  fetchReddit = () => {
    fetch(URL).then(res => res.json())
    .then(json => {
      this.setState({
        unreadArticles: json.data.children
      })
    })
  }

  readArticle = (event, article) => {
    const newReadArticles = [...this.state.readArticles, article]
    const newUnreadArticles = this.state.unreadArticles.filter((art) => art.data.id !== article.data.id)
    this.setState({
      unreadArticles: newUnreadArticles,
      readArticles: newReadArticles,
      readCount: this.state.readCount + 1
    })
  }

  componentDidMount() {
    this.fetchReddit()
  }

  render() {
    return (
      <div>
        <h1>Reddit Container: I've read {this.state.readCount} articles</h1>
        <Count />
        <UnreadContainer articles={this.state.unreadArticles} handleClick={this.readArticle}/>
        <ReadContainer articles={this.state.readArticles} />
      </div>
      
    )
  }
}

export default RedditContainer