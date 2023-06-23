import React, { useState } from "react";
import Button from "./Button";
import "./style.css";

interface Prop {
  list: string[];
}

const SearchBar = (list: Prop) => {
  const [query, setQuery] = useState("");

  const getFilteredData = (query: string, list: string[]) => {
    if (!query) {
      return [];
    }
    return list.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredData = getFilteredData(query, list.list);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {filteredData.length != 0 && (
        <div className="result">
          {filteredData.slice(0, 10).map((value) => {
            return (
              <a className="dataItem" onClick={() => null} key={value}>
                <p>{value}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
