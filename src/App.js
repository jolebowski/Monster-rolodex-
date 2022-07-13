import { useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  // const [searchField, setSearchField] = useState("");
  const [monsters, setMonters] = useState([]);
  //nous faisons cela parce que, au cas où cette valeur initiale serait autre, nous savons que le filtre des monstres est toujours basé sur les monstres.
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonters(users))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const newMonstersFilter = monsters.filter((monster) =>
      monster.name.toLocaleUpperCase().includes(value)
    );
    setFilteredMonsters(newMonstersFilter);
    // a travers ce log on peut bien voir que nous déclenchons cet useEffect à chaque fois qu'il y a des modifications
    console.log(newMonstersFilter, "newMonsterFilter");
    // ici il va filtrer à travers tous les monstres lorsque d'autres monstres changent ou lorsque le champ de recherche change.
  }, [value, monsters]);

  const handleChange = (e) => {
    setValue(e.target.value.toLocaleUpperCase("fr-FR"));
  };

  // const handleChange2 = (e) => {
  //   setSearchField(e.target.value.toLocaleUpperCase("fr-FR"));
  // };

  return (
    <div>
      <h1 className="app-title">Monster rolodex</h1>
      <SearchBox onChangeHandler={handleChange} />
      {/* <SearchBox onChangeHandler={handleChange2} /> */}
      <CardList monsterFilter={filteredMonsters} />
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
