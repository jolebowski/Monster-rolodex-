import Card from "../Card/Card";
import { Monster } from "../../App";
import "./card-container.css";

type CardListProps = {
  monsterFilter: Monster[];
};

const CardList = ({ monsterFilter }: CardListProps) => (
  <div className="card-container">
    {monsterFilter.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
