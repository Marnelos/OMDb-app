import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';
import { count } from 'console';
import SearchBar from './SearchBar';
import './style.css'
import Details from './Details';

interface Props{
  name:string
  children: string
}

interface Item{
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
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}

const Button = ({name, children}:Props) => {
  const [isPressed, setIsPressed] = useState(false);
  const [data, setData] = useState<Item[]>([]);

  const [countMovie, setCountMovie] = useState(0);


  const useClickHandle = async () => {
    setIsPressed(true);

    const responseFromApi = await fetch("https://www.omdbapi.com/?i=tt128500"+countMovie+"&apikey=8f9166aa").then((x) => x.json());
    setCountMovie(countMovie+1);
    console.log(responseFromApi);
    if(responseFromApi.Type===name){
      setData((prev)=>[...prev, responseFromApi]);
    } else if(name==='series' || responseFromApi.Type==='episode'){
      setData((prev)=>[...prev, responseFromApi]);
    }
  };
  
  const handleLi = (item:Item) =>{
    const url = `/details?item=${item.Title}`;
    window.open(url, '_blank', 'noopener noreferrer');    
    // <Details item={item}/>
  }

  return (
    <div id="button-container">
      <button className="btn btn-light" onClick={useClickHandle}>{children}</button>
      {
        isPressed && (
          <>
            {/* <SearchBar/> */}
            <ul>
              {data
              .sort((a,b)=>{
                return a.Year > b.Year ? 1 : -1;
              })
              .map((item, index) => (
                <li key={index} onClick={()=>handleLi(item)}>
                  <img src={item.Poster} alt={item.Title}/>
                  {/* {item.Title} */}
                </li>
                ))}
            </ul>
          </>
        )
      } 
    </div>
  )
}

export default Button
