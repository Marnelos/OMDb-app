import React, { useState } from "react";
import "./style.css";

const SearchBar = () => {
  const [input, setInput] = useState("");

  //For the API
  const fetchData = (value: string) => {
    fetch("https://www.omdbapi.com/?i=tt1285016&apikey=8f9166aa")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      })
      .catch(err => setError(err));
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-cont">
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
function setError(err: any): any {
  throw new Error("Function not implemented.");
}

