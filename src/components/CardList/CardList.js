import Card from "../Card/Card";
import "./card-container.css";

const CardList = ({ monsterFilter }) => (
  <div className="card-container">
    {monsterFilter.map((monster) => {
      console.log(monster, "moinster");
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
