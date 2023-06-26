import React, { useState } from "react";
import "./style.css";
import { BrowserRouter, Link, Route, Routes, useActionData } from "react-router-dom";

interface Props {
  disable: boolean;
  data: ObjectApi[];
  listOfAll: ApiData[];
  parentSetIsDetailsAlive: React.Dispatch<React.SetStateAction<boolean>>;
  parentSetElement: React.Dispatch<React.SetStateAction<ApiData | undefined>>;
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

const ListOfItems = ({ disable, data, listOfAll, parentSetIsDetailsAlive, parentSetElement }: Props) => {

  const handleClick = (title:string)=>{
    const findItem = listOfAll.find(item=> item.Title===title);
    if(findItem){
      parentSetElement(findItem);
    }
    parentSetIsDetailsAlive(true);
  };

  const tmp = ()=>{
    
  }

  const list = data
  // .sort((a, b) => {
  //   return a.Year > b.Year ? 1 : -1;
  // })
  .map((item, index) => ( 
    <Link
      className="list-group-item list-group-item-action"
      key={index}
      onClick={() => handleClick(item.Title)} 
      to={"./DetailsPage/"+item.Title}    
    >
      {item.Title}
    </Link>
  ));

  return (
    <>
      {disable ? <ul className="list-group">{list}</ul> : <p></p>}
    </>
  );
};

export default ListOfItems;
