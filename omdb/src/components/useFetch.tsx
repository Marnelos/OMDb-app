import React from "react";

const useFetch = (url: string) => {
  const getDataFromApi = async ()=>{
    const response = await fetch("https://www.omdbapi.com/?i=tt1285016&apikey=8f9166aa").then((x) => x.json());
    return response;
  }

  return getDataFromApi;
};

export default useFetch;