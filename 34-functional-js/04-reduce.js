// takes an array and combines all the elements
// into one single value
function reduce(aa, cb, initialValue) {
  let accumulator = initialValue
  console.log(aa)

  for (let i = 0; i < aa.length; i++) {
    let current = aa[i]
    accumulator = cb(accumulator, current)
  }

  return accumulator
}

let aa = [1,2,3,4,5,6,7]
let result = reduce(aa, (accumulator, current) => {
  console.log('accum:', accumulator, 'current', current)
  return accumulator + current
}, 0)
console.log(result)

let votes = ['bush', 'bush', 'bush', 'hedge', 'shrub', 'shrub']
let tallied = reduce(votes, tally, {})
console.log(tallied)

// votes is an object with key value pairs
// representing the key is the thing voted for
// the value is how many votes it has received
// calling tally(votes, vote) will increment
// vote in votes by one
function tally(voteTally, vote) {
  // initialize the vote if it hasn't been counted yet
  if (voteTally[vote] === undefined) {
    voteTally[vote] = 0
  }
  // now that we're guaranteed it's counted, increment
  voteTally[vote]++
  return voteTally
}