// accept a number and put a '0' in the front
// if the number is less than ten.
function prefix(value) {
  if (value < 10) {
    value = '0' + value
  }  
  return value
}

function printConsole() {
  console.log('printtttttt')
}

function displayPrimes(primes) {
  let list = document.getElementById('primes-list');
  for (let i = 0; i < primes.length; i++) {
    let prime = primes[i]

    let li = document.createElement('li')
    li.textContent = prime

    list.appendChild(li)
  }
}

function randomBackgroundColor() {
  let rr = Math.random() * 255
  let gg = Math.random() * 255
  let bb = Math.random() * 255
  
  // style.backgroundColor = 'rgb(123, 75, 100)'
  let color = 'rgb(' + rr + ',' + gg + ',' + bb + ')'
  document.body.style.backgroundColor = color
}

function createTimesTable() {
  let table = document.createElement('table')
  table.setAttribute('border', 1)

  let tr = document.createElement('tr')
  let td1 = document.createElement('td')
  let td2 = document.createElement('td')
  let td3 = document.createElement('td')
  let td4 = document.createElement('td')

  td1.textContent = 1
  td2.textContent = 2
  td3.textContent = 3
  td4.textContent = 4

  table.appendChild(tr)
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tr.appendChild(td4)

  document.body.appendChild(table)
}

console.log('running!');

let time = document.getElementById('time');

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

minutes = prefix(minutes)
seconds = prefix(seconds)

time.textContent = hours + ':' + minutes + ':' + seconds;

if (Math.random() < .5) {
  document.body.style.fontFamily = 'Helvetica'
} else {
  document.body.style.fontFamily = 'monospace'
}

let primes = [1, 2, 3, 5, 7, 13, 17, 19]
displayPrimes(primes)
randomBackgroundColor()
createTimesTable()