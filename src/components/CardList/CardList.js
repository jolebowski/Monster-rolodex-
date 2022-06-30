import { Component } from "react";

import "./card-container.css";
import "./card.css";

export default class CardList extends Component {
  render() {
    const { monsterFilter } = this.props;
    return (
      <div className="card-container">
        {monsterFilter.map((monster) => {
          const { name, id, email } = monster;
          return (
            <div className="card">
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}
              />
              <h1>{name}</h1>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
