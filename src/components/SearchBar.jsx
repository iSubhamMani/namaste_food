export const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search restaurants"
      />
      <span className="search-icon"></span>
    </div>
  );
};

export default SearchBar;
