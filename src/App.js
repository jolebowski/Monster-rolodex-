import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      monstersfilterInit: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    console.log("in constructor 1");
  }

  componentDidMount() {
    console.log("in compoenentDidMount 3");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(
        (res) => res.json() // Nous convertissons en format JSON pour mieux recupérer les éléments dans un format adapté
      )
      // Etant donné que ce sont les utilisateurs qu'on souhaite recupérer nous mettons users mais ca aurait pu etre autre chose
      .then((users) => this.setState({ monsters: users }))
      .catch((e) => console.log(e));
  }
  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
    const monsterFilter = this.state.monsters.filter((monster) =>
      monster.name
        .toLocaleUpperCase()
        .includes(this.state.value.toLocaleUpperCase("fr-FR"))
    );
    this.setState({
      monstersfilterInit: monsterFilter,
    });
    console.log(monsterFilter, "monsterFilter");
  }

  render() {
    {
      console.log("in render 2 ");
      console.log(
        this.state.monstersfilterInit.length > 0,
        "this.state.monstersfilterInit.length > 0"
      );
    }
    return (
      <div className="App">
        <input
          type="search"
          name="monster"
          value={this.state.value}
          placeholder="Search monsters by name"
          onChange={this.handleChange}
        />
        {this.state.monstersfilterInit.length > 0
          ? this.state.monstersfilterInit.map((monster) => {
              return (
                <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>
              );
            })
          : this.state.monsters.map((monster) => {
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
