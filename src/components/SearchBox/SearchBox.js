import { Component } from "react";
import "./searchBox.css";
export default class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <>
        <input
          className="search-box"
          type="search"
          name="monster"
          placeholder="Search monsters by name"
          onChange={onChangeHandler}
        />
      </>
    );
  }
}
