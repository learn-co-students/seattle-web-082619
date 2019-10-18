class Starship {
  constructor({id, name, registration, crew_members}) {
    this.id = id
    this.name = name
    this.registration = registration
    this.crewMembers = crew_members

    // crewList is only set once the Starship is rendered to the page
    this.crewList = null
  }

  createCrewMember(name) {
    post(CREW_MEMBERS_URL, {name, starship_id: this.id})
    .then(json => {
      this.appendCrewMember(name)
    })
  }

  appendCrewMember(name) {
    let li = document.createElement('li')
    li.textContent = name
    this.crewList.appendChild(li)
  }

  toHTML() {
    let div = document.createElement('div')
    div.classList.add('ship')

    let h2 = document.createElement('h2')
    h2.textContent = this.name

    let p = document.createElement('p')
    p.textContent = 'Registration: ' + this.registration

    let input = document.createElement('input')
    input.placeholder = 'new crew member name'

    let button = document.createElement('button')
    button.textContent = 'Add Data'
    button.addEventListener('click', () => this.createCrewMember(input.value))

    let crewTitle = document.createElement('h3')
    crewTitle.textContent = 'Crew'

    // create the crewList <ul> and save it for later so
    // crew members can be added after creating them
    let crewList = document.createElement('ul')
    this.crewList = crewList

    this.crewMembers.forEach(member => {
      this.appendCrewMember(member.name)
    })

    div.append(h2, p, crewTitle, crewList, input, button)
    return div
  }
}