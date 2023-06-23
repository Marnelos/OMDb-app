import React, {useEffect} from 'react';
import './style.css';

interface Props{
  id:string
}

const DetailsPage= ({id}:Props) => {
  const details = (titleId:string) => {
    const tab = window.open('/DETAILS/', '_blank');
    if(tab){
      tab.document.write(`
      <html>
        <head>
          <title>Details Page</title>
        </head>
        <body>
          <h1>Details for ID: ${titleId}</h1>
          <p>Hello There</p>
        </body>
      </html>
    `);

      tab.document.close();
    }
  };
  
  return (
    <>
        {details(id)} 
        hello   
    </>
  );
}

export default DetailsPage
