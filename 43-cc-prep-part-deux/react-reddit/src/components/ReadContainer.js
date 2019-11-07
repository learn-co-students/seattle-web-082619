import React from 'react'

class ReadContainer extends React.Component {

  renderArticles = () => {
    return this.props.articles.map((article, i) => {
      return <p key={i}>{article.data.title}</p>
    })
  }

  render() {
    return (
      <>
        <h4>Read Articles</h4>
        {this.renderArticles()}
      </>
    )
  }
}

export default ReadContainer