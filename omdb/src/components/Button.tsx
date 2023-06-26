import React, { useEffect, useState } from "react";
import "./style.css";
import DetailsPage from "./DetailsPage";

//Να το δω αύριο για κατανόηση..
import SearchBar from "./SearchBar";
import ListOfItems from "./ListOfItems";
import Item from "./ChoiceChallenge";

// import NewWindow from 'react-new-window';

interface Props {
  childrenM: string;
  childrenS: string;
  parentSetDetails: React.Dispatch<React.SetStateAction<string[]>>;
  parentFetchedIdDataFromApi: React.Dispatch<React.SetStateAction<Data[]>>;
  parentSetDisableButtons: (index: number, state: boolean) => void;
  parentSetDataMovies: React.Dispatch<React.SetStateAction<ObjectApi[]>>;
  parentSetDataSeries: React.Dispatch<React.SetStateAction<ObjectApi[]>>;
}

interface Data {
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

interface ObjectApi {
  Search: string;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Button = ({
  childrenM,
  childrenS,
  parentSetDetails,
  parentFetchedIdDataFromApi,
  parentSetDisableButtons,
  parentSetDataMovies,
  parentSetDataSeries,
}: Props) => {
  const [idMatrixM, setIdMatrixM] = useState<string[]>([]);

  const [idMatrixS, setIdMatrixS] = useState<string[]>([]);

  const [disableM, setDisableM] = useState(false);
  const [disableS, setDisableS] = useState(false);

  const handleClick = async (buttonName: string) => {
    let type: string;
    if (buttonName === "series") {
      parentSetDisableButtons(1, true);
      type = "series";
      setDisableS(true);
    } else {
      parentSetDisableButtons(0, true);
      type = "movie";
      setDisableM(true);
    }

    const url = new URL("http://www.omdbapi.com/");
    url.searchParams.set("s", "episode");
    url.searchParams.set("type", type);
    url.searchParams.set("apikey", "8f9166aa");

    const urlId = new URL("http://www.omdbapi.com/");
    urlId.searchParams.set("apikey", "8f9166aa");
    urlId.searchParams.set("plot", "full");

    try {
      let page = 1;
      while (page <= 3) {
        url.searchParams.set("page", page.toString());

        const returnedData = await fetch(url)
          .then((obj) => obj.json())
          .catch((error) => {
            console.log("ERROR:" + error);
          });

        for (let i = 0; i < 10; i++) {
          const element: ObjectApi = returnedData.Search[i];
          parentSetDetails((prev) => [...prev, element.Title]);
          if (element.Type === "movie") {
            parentSetDataMovies((prev) => [...prev, element]);
            setIdMatrixM((prev) => [...prev, element.imdbID]);
          } else {
            parentSetDataSeries((prev) => [...prev, element]);
            setIdMatrixS((prev) => [...prev, element.imdbID]);
          }
          urlId.searchParams.set("i", encodeURIComponent(element.imdbID));
          let returnedTitle = await fetch(urlId).then((obj) => obj.json());
          parentFetchedIdDataFromApi((prev) => [...prev, returnedTitle]);
        }
        page++;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
      </div>
    </>
  );
};

export default Button;
