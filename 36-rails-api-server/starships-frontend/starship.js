class Starship {
  constructor({id, name, registration}) {
    this.id = id
    this.name = name
    this.registration = registration
  }

  addCrewmember() {
    console.log('adding data', this.id, 'ship:', this.name)

    let name = 'Leuitenant Commander Data'
    fetch('http://localhost:3000/crew_members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        starship_id: this.id
      })
    })
    .then(res => res.json())
    .then(json => {
      console.log('name:', name)
    })
  }

  toHTML() {
    let div = document.createElement('div')
    div.classList.add('ship')

    let h2 = document.createElement('h2')
    h2.textContent = this.name

    let p = document.createElement('p')
    p.textContent = 'Registration: ' + this.registration

    let button = document.createElement('button')
    button.textContent = 'Add Data'
    button.addEventListener('click', () => this.addCrewmember())

    div.append(h2, p, button)
    return div
  }
}