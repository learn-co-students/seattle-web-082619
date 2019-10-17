// filter accepts an array and a function
// that returns true or false to tell if a
// item should be added to a result array
// (a "predicate" function)
function filter(aa, cb) {
  let filtered = []
  for (let i = 0; i < aa.length; i++) {
    let item = aa[i]
    if (cb(item)) {
      filtered.push(item)
    }
  }
  return filtered
}

let aa = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29]
let primes = filter(aa,isPrime)
console.log(primes)

function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}