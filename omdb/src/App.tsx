import React, { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import NavigationBar from "./components/NavigationBar";


function App() {

  return (
    <div className="App">
    <NavigationBar />
    <div className="content">
      <Button childrenM='MOVIES' childrenS='SERIES' />
    </div>
  </div>
  );
}

export default App;