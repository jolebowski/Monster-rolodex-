import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(
        (res) => res.json() // Nous convertissons en format JSON pour mieux recupérer les éléments dans un format adapté
      )
      // Etant donné que ce sont les utilisateurs qu'on souhaite recupérer nous mettons users mais ca aurait pu etre autre chose
      .then((users) => this.setState({ monsters: users }))
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
