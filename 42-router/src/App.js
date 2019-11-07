import React from "react";
import "./assets/css/minty.css";
import "./App.css";
import GlassesBrowser from "./components/GlassesBrowser";
import Manager from "./components/Manager";
import NavBar from "./components/NavBar";
import Details from './components/Details'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import GLASSES from "./data";

class App extends React.Component {
  state = {
    glasses: []
  };
  componentDidMount() {
    this.setState({ glasses: GLASSES });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route exact path="/" render={() => <h2>HOMEPAGE</h2>}/>
          <Route
            exact
            path="/glasses"
            render={() => <GlassesBrowser glasses={this.state.glasses} />}
          />
          <Route path="/glasses/:id" render={props => <Details {...props} glasses={this.state.glasses} />} />
          <Route path="/complaints" render={() => <Redirect to="/manager" />} />
          <Route path="/manager" render={(props) => <Manager {...props} />} />
        </Router>
      </div>
    );
  }
}

export default App;
