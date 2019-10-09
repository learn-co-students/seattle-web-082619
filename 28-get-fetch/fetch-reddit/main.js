'use strict';

let URL = 'https://www.reddit.com/r/programmerhumor/.json'

function main() {
  fetchPosts()
}
main()

function fetchPosts() {
  fetch(URL)
  .then(res => res.json())
  .then(json => addAllPosts(json.data.children))
}

function addAllPosts(posts) {
  for (let i = 1; i < posts.length; i++) {
    addPost(posts[i])
  }
}

function addPost(post) {
  console.log(post.data);
  const ul = document.getElementById('results');
  const li = document.createElement('li')
  const h1 = document.createElement('h3');
  const img = document.createElement('img')

  h1.textContent = post.data.title
  
  img.setAttribute('src', post.data.url)
  img.setAttribute('alt', post.data.title)
  
  li.appendChild(h1);
  li.appendChild(img)

  ul.appendChild(li)
}