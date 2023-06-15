import React, { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";


function App() {
  const [error, setError] = useState("");

  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="App">
      <SearchBar/>
      <Button children="MOVIES" name = "movie"/>
      <Button children="SERIES" name = "series"/>
    </div>
  );
}

export default App;