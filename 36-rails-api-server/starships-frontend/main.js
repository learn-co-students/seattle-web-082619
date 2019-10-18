main()

function main() {
  loadShips()
}

function hideLoading() {
  let loading = document.getElementById('loading')
  loading.classList.add('hidden')
}

function loadShips() {
  console.log('loading ships')
  fetch('http://localhost:3000/starships')
  .then(res => res.json())
  .then(ships => {
    console.log('loaded ships', ships)
    hideLoading()
    displayShips(ships)
  })
  .catch(console.log)
}

function displayShips(ships) {
  console.log('displayShips')
  let shipList = document.getElementById('ships')
  ships.forEach(shipJson => {
    let ship = new Starship(shipJson)
    shipList.append(ship.toHTML())
  })
}
