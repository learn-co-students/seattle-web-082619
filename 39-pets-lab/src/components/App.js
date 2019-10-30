import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
    this.fetchPets();
  }

  adoptPet = id => {
    this.setState(
      prevState => {
        return {
          pets: prevState.pets.map(pet => {
            if (pet.id === id) {
              pet.isAdopted = true;
            }
            return pet;
          })
        };
      },
      () => console.log(this.state.pets[0].isAdopted)
    );
    
  };

  // Accepts a string that becomes the new type of filter in state
  changeType = newType => {
    this.setState({
      filters: {
        type: newType
      }
    });
  };

  fetchPets = () => {
    fetch(
      `/api/pets${
        this.state.filters.type === "all"
          ? ""
          : "?type=" + this.state.filters.type
      }`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({ pets: data });
      });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFetchPets={this.fetchPets}
                onChangeType={this.changeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
