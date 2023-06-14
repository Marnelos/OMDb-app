import React, {useState} from 'react';
import "./style.css";

const SearchBar = () => {
  const [input, setInput] = useState("");

  //For the API
  const fetchData = (value:string) => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8f9166aa")
    .then((response) => response.json())
    .then(json => {
      console.log(json);
    });;
    //const data = await response.json();
  };
  
  // const fetchData = (value:string)=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then(json => {
  //     console.log(json);
  //   });
  // };

  const handleChange = (value:string) =>{
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='input-cont'>
      <input placeholder='Type to search...' value={input} onChange={(e)=> handleChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar
