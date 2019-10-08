document.addEventListener('DOMContentLoaded', () => {
  displayAddition()
  setUpButtonClicker()
  setUpTodoForm()
  setUpMadLibForm()
  
  citySelector()
  
  let divs = document.getElementsByTagName('div')
  for (let i = 0; i < divs.length; i++) {
    let div = divs[i]
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'pink'
    })

    div.addEventListener('mouseleave', () => {
      div.style.backgroundColor = 'white'
    })
  }

  document.addEventListener('keypress', (event) => {
    let typewriter = document.getElementById('typewriter')
    typewriter.textContent += event.key
  })
})

function citySelector() {
  let dropdown = document.getElementById('city-selector')
  dropdown.addEventListener('change', (ev) => {
    let city = ev.target.value

    // let color = undefined;
    let color;
    if (city === 'vancouver') {
      color = 'aquamarine'
    } else if (city === 'seattle') {
      color = 'gray'
    } else if (city === 'portland') {
      color = 'brown'
    } else {
      color = 'goldenrod'
    }

    document.body.style.backgroundColor = color
  })
}

function setUpMadLibForm() {
  console.log('set up mad lib')
  const form = document.getElementById('mad-lib-form');
  const noun = document.getElementById('noun')
  const verb = document.getElementById('verb')
  const adjective = document.getElementById('adjective')
  
  form.addEventListener('submit', (event) => {
    console.log('mad lib submitted')
    // stop the form from navigating away from this page
    event.preventDefault() 

    noun.textContent = event.target.elements['noun'].value
    verb.textContent = event.target.elements['verb'].value
    adjective.textContent = event.target.elements['adjective'].value
  })
}

function setUpTodoForm() {
  let form = document.getElementById('todo-form');
  let button = document.getElementById('todo-button');
  let input = document.getElementById('todo-input');
  let list = document.getElementById('todo-list');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('event', event)

    let text = input.value;
    input.value = '';

    let li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
  });
}

function setUpButtonClicker() {
  const button = document.getElementById('clicker')
  const times = document.getElementById('times')
  let totalClicks = 0

  button.addEventListener('click', () => {
    totalClicks += 1
    times.textContent = totalClicks
  })
}

function displayAddition() {
  let answer = document.getElementById('addition')
  answer.textContent = 1 + 1
}