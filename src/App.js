// *****CONTAINER COMPONENT*****
import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  // creating a state object
  state = {
    // array to store the data, each array item is an object
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 },
    ],
  };
  addNinja = (ninja) => {
    // bad way to generate ID
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
  };
  // NOTE: sofft delete i sbest practice
  deleteNinja = (id) => {
    // run filter method through ninjas array
    // call back function cycles through each element in ninja
    // boolean filter => if true, keep in the array, otherwise remove from array.
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>WELCOME :)</p>
        {/* import NEW COMPONENT, passing ninjas array as a prop */}
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
