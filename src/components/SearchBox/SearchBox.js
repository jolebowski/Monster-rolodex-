import "./searchBox.css";

const SearchBox = ({ onChangeHandler }) => {
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
};
export default SearchBox;
