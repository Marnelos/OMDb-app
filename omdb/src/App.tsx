import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ChoiceDirect from "./components/ChoiceDirect";
import ChoiceChallenge from "./components/ChoiceChallenge";
import NavigationBar from "./components/NavigationBar";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <div className="content">
            <Link to="/">Search Directly from the Api</Link>
            <br/>
            <Link to="/omdb-challenge">Challenge</Link>
            <br/>
            <Routes>
              <Route path="/" element={<ChoiceDirect />}/>
              <Route path="/omdb-challenge" element={<ChoiceChallenge />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
