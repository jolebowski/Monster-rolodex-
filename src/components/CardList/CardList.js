import { Component } from "react";
import Card from "../Card/Card";
import "./card-container.css";
export default class CardList extends Component {
  render() {
    const { monsterFilter } = this.props;
    return (
      <div className="card-container">
        {monsterFilter.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}
