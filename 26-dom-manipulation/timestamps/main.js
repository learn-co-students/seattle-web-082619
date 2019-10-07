console.log('hello')

document.addEventListener('DOMContentLoaded', () => {
  generateTimestamp()
  randomBackgroundColor()
  interactWithWeekdays()
  generatePrimes()
})

function generateTimestamp() {
  const time = document.getElementById('current-time')
  const now = new Date()

  const hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  seconds = zeroPrefix(seconds)
  minutes = zeroPrefix(minutes)

  time.textContent = `${hours}:${minutes}:${seconds}`
}

function zeroPrefix(value) {
  if (value < 10) {
    return '0' + value
  }
  return value
}

function randomBackgroundColor() {
  const colors = [null, 'blue', 'red', 'green']
  const index = Math.floor(Math.random() * colors.length)
  const color = colors[index]
  if (color !== null) {
    document.body.style.backgroundColor = color
  }
}

function interactWithWeekdays() {
  const days = document.getElementsByTagName('li')
  for (let i = 0; i < days.length; i++) {
    if (days[i].textContent === 'Friday') {
      days[i].textContent += '!!!'
    }
  }
}

function generatePrimes() {
  let list = document.getElementById('primes')
  let primes = [1, 2, 3, 5, 7, 11, 13, 17, 23]

  for (let i = 0; i < primes.length; i++) {
    let prime = primes[i]
    // create an element to store this value
    let li = document.createElement('li')
    li.textContent = prime

    // put that element on the page
    list.append(li)
  }
}