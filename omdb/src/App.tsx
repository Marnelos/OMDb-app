import React, { useState } from 'react';

import './App.css';
import HomePage from './components/HomePage';
import Alert from './components/Alert';

function App() {

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div className="App">
      { alertVisible && <Alert onClose={()=>setAlertVisible(false)}>Alert</Alert>}
      <HomePage onClick={()=>console.log("Show me the 'MOVIES' list.")}>MOVIES</HomePage>
      <HomePage onClick={()=>{setAlertVisible(true)}}>SERIES</HomePage>
    </div>
  );
}

export default App;
