import React, { useEffect, useState } from "react";
import "./style.css";
import DetailsPage from "./DetailsPage";

//Να το δω αύριο για κατανόηση..
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./SearchBar";

// import NewWindow from 'react-new-window';

// import {Routes, Route, useNavigate} from 'react-ro

interface Props {
  childrenM: string;
  childrenS: string;
}

interface ObjectApi {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  ID: string;
}

const Button = ({ childrenM, childrenS }: Props) => {
  const [clicked, setClicked] = useState(false);

  const [details, setdetails] = useState<string[]>([]);

  const [idMatrix, setIdMatrix] = useState<string[]>([]);

  const [data, setData] = useState<ObjectApi[]>([]);

  const handleClick = async (buttonName: string) => {
    setClicked(true);

    const url = new URL("http://www.omdbapi.com/");
    url.searchParams.set("s", "one");
    url.searchParams.set("type", buttonName === "series" ? "series" : "movie");
    url.searchParams.set("apikey", "8f9166aa");

    const returnedData = await fetch(url).then((obj) => obj.json());
    for (let i = 0; i < 10; i++) {
      setData((prev) => [...prev, returnedData.Search[i]]);
      setIdMatrix((prev) => [...prev, returnedData.Search[i].imdbID]);
      setdetails((prev) => [...prev, returnedData.Search[i].Title]);
    }
  };

  const handleClickList = async (index: string) => {
    const fetchedData = await fetch(
      "http://www.omdbapi.com/?i=" +
        encodeURIComponent(index) +
        "&apikey=8f9166aa"
    ).then((obj) => obj.json());

    console.log(fetchedData);

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

      tab.document.close();
    }
  };

  const listOfItems = data
    .sort((a, b) => {
      return a.Year > b.Year ? 1 : -1;
    })
    .map((item, index) => (
      <li key={index} onClick={() => handleClickList(idMatrix[index])}>
        {item.Title}
      </li>
    ));

  return (
    <>
      {clicked ? <SearchBar list={details} /> : null}
      <button
        name={childrenM.toLowerCase()}
        className="btn btn-dark"
        onClick={(e) => {
          handleClick(e.currentTarget.name);
        }}
      >
        {childrenM}
      </button>
      <button
        name={childrenS.toLowerCase()}
        className="btn btn-dark"
        onClick={(e) => {
          handleClick(e.currentTarget.name);
        }}
      >
        {childrenS}
      </button>

      {listOfItems}
    </>
  );
};

export default Button;

function PopUp() {
  throw new Error("Function not implemented.");
}
// const tab = window.open('/DETAILS/', '_blank');
// if(tab){
//   tab.document.write(`
//   <html>
//     <head>
//       <title>Details Page</title>
//     </head>
//     <body>
//       <h1>Details for ID: ${item.Title}</h1>
//       <p>Hello There</p>
//     </body>
//   </html>
// `);

//   tab.document.close();
// }

// const detailsWindow = window.open('DetailsPage.tsx');

// Κάνε μια ερώτηση για αυτό μόλις μιλήσετε!!!!!!!
// <NewWindow>
//   <h1>Hello There</h1>
// </NewWindow>

// <BrowserRouter>
//   <Routes>
//     <Route path='/details-page' element={
//       <ul>
//         <br/>
//         {
//           data.map((item, index)=>(
//             <>
//               <li key={index} /*onClick={()=>handleClickList(item)}*/>
//                 <Link to="/details/" target='_blank'>
//                   {item.Title}
//                 </Link>
//               </li>
//             </>
//           ))
//         }
//       </ul>}>
//     </Route>
//     <Route path='/details/' element={<DetailsPage id={id}/>}/>
//   </Routes>
// </BrowserRouter>
