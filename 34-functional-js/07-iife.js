// Immediately Invoked Function Expression
// IIFEs "iffys"

let one = function() {
  console.log(1)
}
one()

let x = 4 + 17
let y = x + 23

let z = (4 + 17) + 23

(function() {
  console.log('immediate!')
})();

(() => {
  console.log('immediate!')
})();

let bank = (() => {
  let balance = 1000
  return {
    seeBalance: () => balance,
    withdraw: (amount) => {
      balance -= amount
    },
    deposit: (amount) => {
      balance += amount
    }
  }
})();

console.log('lodash', _)
debugger
