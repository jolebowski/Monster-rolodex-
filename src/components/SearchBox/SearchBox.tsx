import { ChangeEvent } from "react";
import "./searchBox.css";

type ISeacrBoxProps = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchBox = ({ onChangeHandler }: ISeacrBoxProps) => {
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
