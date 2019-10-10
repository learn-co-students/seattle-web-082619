const MOVIES_URL = 'http://localhost:3000/movies'

document.addEventListener('DOMContentLoaded', () => {
  main()
})

function main() {
  loadMovies()
  attachForm()
}

function attachForm() {
  let form = document.getElementById('new-movie')
  form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    let year = ev.target.elements['year'].value
    let title = ev.target.elements['title'].value
    console.log('new movie', year, title)

    let config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        year: year,
        title: title
      })
    }

    // We could "optimistically render" the movie info
    // on the page, but we will instead wait until the
    // server responds, just to be safe.
    // let list = document.getElementById('movies')
    // let li = document.createElement('li')
    // li.textContent = `(${year}) ${title}`
    // list.prepend(li)

    fetch(MOVIES_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        year: year,
        title: title
      })
    })
    .then(res => res.json())
    .then(data => {
      appendMovie({
        year: data.year,
        title: data.title,
      })
    })
  })
}

function loadMovies() {
  fetch(MOVIES_URL)
  .then(res => res.json())
  .then(movies => {
    renderMovies(movies)
  })
}

function renderMovies(movies) {
  let loading = document.getElementById('loading')
  loading.style.display = 'none'

  movies.forEach(movie => {
    appendMovie(movie)
  })
}

function appendMovie(movie) {
  let list = document.getElementById('movies')
  let li = document.createElement('li')
  let year = movie.year
  let title = movie.title

  li.textContent = `(${year}) ${title}`
  list.appendChild(li)
}