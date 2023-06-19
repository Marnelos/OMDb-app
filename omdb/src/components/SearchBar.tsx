import React, { useState } from 'react'
import Button from './Button'
import './style.css'

interface Prop{
  list: string[];
}

const getFilteredData = (query: string, list: string[]) =>{
   if(!query){
    return list;
   }
   return list.filter(item => item.includes(query));
}

const SearchBar = (list:Prop) => {
  const [query, setQuery] = useState("");

  const filteredData = getFilteredData(query, list.list);

  return (
    <div className="search-bar">
      <input type='text' placeholder='Search...' onChange={e=>{setQuery(e.target.value)}} />
      {/* <div className="wrapper">
        <div className="expand"> */}
          <ul>
            {filteredData.map(value => <h5 key={value}>{value}</h5>)}
          </ul>
        {/* </div>
      </div> */}
    </div>
  )
}

export default SearchBar