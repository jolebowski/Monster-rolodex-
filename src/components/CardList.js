import { Component } from "react";

export default class CardList extends Component {
  render() {
    const { monsterFilter } = this.props;
    return (
      <>
        {monsterFilter.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </>
    );
  }
}
