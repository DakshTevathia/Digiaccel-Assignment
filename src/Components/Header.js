import React from "react";

const Header = ({ handleSearch, handleInputChange, query }) => {
  return (
    <div className="header">
      <h2>TV Maze</h2>
      <div>
        <button onClick={handleSearch}>Search</button>
        <input
          placeholder="Seach Shows"
          value={query}
          onChange={(e) => {
            handleInputChange(e);
          }}
          type="search"
        />
      </div>
    </div>
  );
};

export default Header;
