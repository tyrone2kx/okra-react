import { SearchIcon } from "../assets/icons";

export const SearchBar = (props) => {
  return (
    <div
      style={{
        border: "1px solid #ECECEC",
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
      }}
    >
      <SearchIcon />
      <input style={{
        border: "none",
        outline: "none",
        width: "100%"
      }} {...props} className="search-input" />
    </div>
  );
};

