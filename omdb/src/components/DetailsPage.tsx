import React, {useEffect} from 'react';
import './style.css';

interface Props{
  item: ApiData | undefined;
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

const DetailsPage= ({item}:Props) => {

  return (
    <>
      <div className="details-container">
        <img src={item?.Poster} alt={item?.Title}/>
        <h4>{item?.Title}</h4>
      </div>
      <div className="information">
        <h4>{item?.Plot}</h4>
        <br/>
        <div>
          <h4>Actors: {item?.Actors}</h4>
          <h4>Director: {item?.Director}</h4>
          <h4>Rating: {item?.imdbRating}</h4>
        </div>
      </div>
    </>
  );
}

export default DetailsPage
