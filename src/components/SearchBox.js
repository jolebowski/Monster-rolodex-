import { Component } from "react";

export default class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <>
        <input
          type="search"
          name="monster"
          placeholder="Search monsters by name"
          onChange={onChangeHandler}
        />
      </>
    );
  }
}
