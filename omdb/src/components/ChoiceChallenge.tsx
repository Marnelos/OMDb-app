import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import Button from "./Button";
import "./style.css";
import ListOfItems from "./ListOfItems";

interface Props{
  
}

const ChoiceChallenge = () => {

  return (
    <>
      <div>
        <Button childrenM="MOVIES" childrenS="SERIES" /*parameters={getParameters}*//>
      </div>
      {/* <ListOfItems disableM={disableM} disableS={disableS} movies={listOfItemsMovies} series={listOfItemsSeries}/> */}
      {/* <div className="container-lists">
        <ListOfItems disableM={parameters[0]} disableS={parameters[1]} movies={parameters[2]} series={parameters[3]}/>
      </div> */}
    </>
  );
};

export default ChoiceChallenge;
