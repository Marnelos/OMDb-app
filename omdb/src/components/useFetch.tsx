import React from "react";

const useFetch = (url: string) => {
  const getDataFromApi = async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?i=tt1285016&apikey=8f9166aa"
    ).then((x) => x.json());
    return response;
  };

  return getDataFromApi;
};

export default useFetch;

//Θα την αναπτύξω ώστε να δέχεται ορισμένες παραμέτρους(τύπο που θα κάνουμε fetch, αν είναι
//με παράμετρο s,i,etc και να πράττει αναλόγως)
