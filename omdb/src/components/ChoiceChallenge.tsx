import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import Button from "./Button";
import "./style.css";
import ListOfItems from "./ListOfItems";
import SearchBar from "./SearchBar";
import DetailsPage from "./DetailsPage";
import { Route, Routes } from "react-router-dom";

interface Props{
  state: boolean;
}

interface ObjectApi {
  Search: string;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface ApiData {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
}

const ChoiceChallenge = ({state}: Props) => {

  const [element, setElement] = useState<ApiData>();

  //Variable to check if the Details Page is shown.
  const [isDetailsAlive, setIsDetailsAlive] = useState<boolean>(state);
  
  const [disableButtons, setDisableButtons] = useState<boolean[]>([
    state,
    state,
  ]); //[0]: Movies, [1]: Series


  //For the Search Bar
  const [searchList, setSearchList] = useState<string[]>([]);
  
  //Arrays with movies, and series. Not full data
  const [dataMovies, setDataMovies] = useState<ObjectApi[]>([]);
  const [dataSeries, setDataSeries] = useState<ObjectApi[]>([]);
  
  //Array with the objects from api call using parameter i. Full data
  const [fetchedIdDataFromApi, setFetchedIdDataFromApi] = useState<ApiData[]>([]);

  const udpateDisableButtons = (index: number, state: boolean) => {
    setDisableButtons((prev) => {
      const tmpButtons = [...prev];
      tmpButtons[index] = state;
      return tmpButtons;
    });
  };

  return (
    <>
      {!isDetailsAlive&&(disableButtons[0] === true || disableButtons[1]) === true ? (
        <SearchBar list={searchList} />
      ) : null}
      <div hidden={isDetailsAlive}>
        <div>
          <Button
            childrenM="MOVIES"
            childrenS="SERIES"
            parentSetDetails={setSearchList}
            parentFetchedIdDataFromApi={setFetchedIdDataFromApi}
            parentSetDisableButtons={udpateDisableButtons}
            parentSetDataMovies={setDataMovies}
            parentSetDataSeries={setDataSeries}
          />
        </div>
        <div>
          <div className="parent">
            <div className="child" hidden={!disableButtons[0]}>
              <ListOfItems
                disable={disableButtons[0]}
                data={dataMovies}
                listOfAll={fetchedIdDataFromApi}
                parentSetIsDetailsAlive={setIsDetailsAlive}
                parentSetElement={setElement}
              />
            </div>
            <div className="child" hidden={!disableButtons[1]}>
              <ListOfItems
                disable={disableButtons[1]}
                data={dataSeries}
                listOfAll={fetchedIdDataFromApi}
                parentSetIsDetailsAlive={setIsDetailsAlive}
                parentSetElement={setElement}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="details">
      <Routes>
        <Route path={"/DetailsPage/"+element?.Title} element={<DetailsPage item={element}/>}/>
      </Routes>
      </div>
    </>
  );
};

export default ChoiceChallenge;
