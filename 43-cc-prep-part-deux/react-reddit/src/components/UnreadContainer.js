import React from 'react'

class UnreadContainer extends React.Component {

  renderArticles = () => {
    return this.props.articles.map((article) => {
      return <p id={article.data.id} onClick={(event) => this.props.handleClick(event, article)}>{article.data.title}</p>
    })
  }

  render() {
    return (
      <>
        <h4>Unread</h4>
        {this.renderArticles()}
      </>
    )
  }
}

export default UnreadContainer