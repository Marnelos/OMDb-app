import React, { useEffect, useState } from "react";
import "./style.css";
import DetailsPage from "./DetailsPage";

//Να το δω αύριο για κατανόηση..
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ListOfItems from "./ListOfItems";

// import NewWindow from 'react-new-window';

interface Props {
  childrenM: string;
  childrenS: string;
  // parameters: any
}

interface ObjectApi {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  ID: string;
}

const Button = ({ childrenM, childrenS/*, parameters*/ }: Props) => {
  const [clicked, setClicked] = useState(false);

  const [details, setdetails] = useState<string[]>([]);

  const [idMatrix, setIdMatrix] = useState<string[]>([]);

  // const [data, setData] = useState<ObjectApi[]>([]);

  const [disableM, setDisableM] = useState(false);
  const [disableS, setDisableS] = useState(false);

  const [dataMovies, setDataMovies] = useState<ObjectApi[]>([]);
  const [dataSeries, setDataSeries] = useState<ObjectApi[]>([]);

  const handleClick = async (buttonName: string) => {
    setClicked(true);
    let type: string;
    if(buttonName === "series"){
      type = "series"; 
      setDisableS(true);
    }else{
      type = "movie";
      setDisableM(true);
    }

    const url = new URL("http://www.omdbapi.com/");
    url.searchParams.set("s", "episode");
    url.searchParams.set("type", type);
    url.searchParams.set("apikey", "8f9166aa");

    try {
      let page = 1;
      while (page <= 3) {
        url.searchParams.set("page", page.toString());
        
        const returnedData = await fetch(url).then((obj) => obj.json());
        for (let i = 0; i < 10; i++) {
          // setData((prev) => [...prev, returnedData.Search[i]]);
          setIdMatrix((prev) => [...prev, returnedData.Search[i].imdbID]);
          setdetails((prev) => [...prev, returnedData.Search[i].Title]);
          if(returnedData.Search[i].Type === "movie"){
            setDataMovies((prev) => [...prev, returnedData.Search[i]]);
          }else{
            setDataSeries((prev) => [...prev, returnedData.Search[i]]);
          }
        }
        page++;
      }

      // parameters([disableM, disableS, dataMovies, dataMovies]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickList = async (index: string) => {
    const fetchedData = await fetch(
      "http://www.omdbapi.com/?i=" +
        encodeURIComponent(index) +
        "&apikey=8f9166aa"
    ).then((obj) => obj.json());

    console.log(idMatrix);

    const tab = window.open("/DETAILS/", "_blank");
    if (tab) {
      tab.document.write(`
        <html>
          <head>
            <title>Details Page</title>
          </head>
          <body>
            <h2>Details for: ${fetchedData.Title}</h2>
            <h2><p>
              <img src=${fetchedData.Poster} alt=${fetchedData.Title}/>
              <br/>
              Year of release: ${fetchedData.Released}<br/>
              Rating: ${fetchedData.imdbRating}<br/>
              Actors: ${fetchedData.Actors}<br/>
              IMDb id: ${fetchedData.imdbID}
            </p></h2>
          </body>
        </html>
      `);

      setTimeout(()=>{
        tab.close();
      }, 10000);
    }
  };

  const listOfItemsMovies = dataMovies
    // .sort((a, b) => {
    //   return a.Year > b.Year ? 1 : -1;
    // })
    .map((item, index) => (
      <li
        className="list-group-item list-group-item-action"
        key={index}
        onClick={() => handleClickList(idMatrix[index])}
      >
        {item.Title}
      </li>
    ));

  const listOfItemsSeries = dataSeries
  // .sort((a, b) => {
  //   return a.Year > b.Year ? 1 : -1;
  // })
  .map((item, index) => (
    <li
      className="list-group-item list-group-item-action"
      key={index}
      onClick={() => handleClickList(idMatrix[index])}
    >
      {item.Title}
    </li>
  ));

  return (
    <>
      {clicked ? <SearchBar list={details} /> : null}
      <div className="container-btn">
        <div>
          <button
            disabled={disableM}
            name={childrenM.toLowerCase()}
            className="button"
            onClick={(e) => {
              handleClick(e.currentTarget.name);
            }}
          >
            {childrenM}
          </button>
          <button
            disabled={disableS}
            name={childrenS.toLowerCase()}
            className="button"
            onClick={(e) => {
              handleClick(e.currentTarget.name);
            }}
          >
            {childrenS}
          </button>

        </div>
        <div className="parent">
          <div className="child">
            <ListOfItems disable={disableM}list={listOfItemsMovies} />
          </div>
          <div className="child">
            <ListOfItems disable={disableS}list={listOfItemsSeries} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;