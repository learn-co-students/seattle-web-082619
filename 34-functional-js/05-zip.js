function zip(a1, a2, cb, defaultValue) {
  // account for if arrays every have different length
  // if they have different lengths the shorter arrays elements will be undefined
  let end = Math.max(a1.length, a2.length)
  for (let i = 0; i < end; i++) {
    let element1 = a1[i]
    let element2 = a2[i]

    if (element1 === undefined) {
      element1 = defaultValue
    }
    if (element2 === undefined) {
      element2 = defaultValue
    }

    cb(element1, element2)
  }
}

let cities = ['Seattle', 'Portland', 'Vancouver', 'Boise']
let states = ['Washington', 'Oregon', 'Canada']
zip(cities, states, (city, state) => {
  console.log(city, 'in', state)
}, 'Unknown')