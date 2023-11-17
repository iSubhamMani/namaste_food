import resData from "../utils/mockData";

export const SearchBar = (props) => {
  const setListOfRes = props.setListOfRes;

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search restaurants"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const filteredData = resData.filter((res) =>
              res.resName.toLowerCase().includes(e.target.value.toLowerCase())
            );
            if (filteredData.length !== 0) setListOfRes(filteredData);
          }
        }}
      />
      <span className="search-icon"></span>
    </div>
  );
};

export default SearchBar;
