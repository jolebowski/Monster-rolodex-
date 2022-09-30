import { useEffect, useState, ChangeEvent } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

export type Monster = {
  id: number;
  name: string;
  email: string;
};

const App = () => {
  const [value, setValue] = useState("");
  const [monsters, setMonters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const getData = async <T,>(url: string): Promise<T> => {
      const response = await fetch(url);
      return await response.json();
    };

    const fetchUser = async () => {
      const data = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonters(data);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const newMonstersFilter = monsters.filter((monster) =>
      monster.name.toLocaleUpperCase().includes(value)
    );
    setFilteredMonsters(newMonstersFilter);
  }, [value, monsters]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toLocaleUpperCase("fr-FR"));
  };

  return (
    <div>
      <h1 className="app-title">Monster rolodex</h1>
      <SearchBox onChangeHandler={handleChange} />
      <CardList monsterFilter={filteredMonsters} />
    </div>
  );
};

export default App;
