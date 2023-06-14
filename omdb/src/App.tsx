import React, { useState } from "react";

import "./App.css";
import HomePage from "./components/HomePage";
import Alert from "./components/Alert";
import SearchBar from "./components/SearchBar";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  // const [showButtons, setShowButtons] = useState(true);

  // const handleSearch = (searchItem: string) => {
  //   console.log("HANDLE_SEARCH");
  // };

  // const handleToggleVisibility = () => {
  //   setShowButtons(!showButtons);
  // };

  return (
    <div className="App">
      {/* <HomePage onClick={() => { console.log("Show me the 'MOVIES' list."); }}>MOVIES</HomePage>
      <HomePage onClick={() => { setAlertVisible(true); }}>SERIES</HomePage> */}
      <SearchBar/>
      
    </div>
  );
}

export default App;
