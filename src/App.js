import { useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [monsters, setMonters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonters(users))
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value.toLocaleUpperCase("fr-FR"));
  };

  const monsterFilter = monsters.filter((monster) =>
    monster.name.toLocaleUpperCase().includes(value)
  );

  return (
    <div>
      <h1 className="app-title">Monster rolodex</h1>
      <SearchBox onChangeHandler={handleChange} />
      <CardList monsterFilter={monsterFilter} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       value: "",
//     };
//     // console.log("in constructor 1");
//   }

//   componentDidMount() {
//     // console.log("in compoenentDidMount 3");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(
//         (res) => res.json() // Nous convertissons en format JSON pour mieux recupérer les éléments dans un format adapté
//       )
//       // Etant donné que ce sont les utilisateurs qu'on souhaite recupérer nous mettons users mais ca aurait pu etre autre chose
//       .then((users) => this.setState({ monsters: users }))
//       .catch((e) => console.log(e));
//   }
//   handleChange = (e) => {
//     this.setState({
//       value: e.target.value.toLocaleUpperCase("fr-FR"),
//     });
//   };

//   render() {
//     const { monsters, value } = this.state;
//     const { handleChange } = this;
//     {
//       // console.log("in render 2 ");
//     }

//     // nous le mettons ici pour permettre de filtrer avec la list originale en utilisant le state value
//     const monsterFilter = monsters.filter((monster) =>
//       monster.name.toLocaleUpperCase().includes(value)
//     );

//     return (

//     );
//   }
// }

export default App;
