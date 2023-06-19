import React, {useEffect} from 'react';
import './style.css';

interface Props{
  id:string
}

const DetailsPage= ({id}:Props) => {
  const details = () => {
    const tab = window.open('/DETAILS/', '_blank');
    if(tab){
      tab.document.write(`
      <html>
        <head>
          <title>Details Page</title>
        </head>
        <body>
          <h1>Details for ID: LI ELEMENT</h1>
          <p>Hello There</p>
        </body>
      </html>
    `);

      tab.document.close();
    }
  };
  // useEffect(()=>{
  //   const tab = window.open('/DETAILS/', '_blank');
  //   if(tab){
  //     tab.document.write(`
  //     <html>
  //       <head>
  //         <title>Details Page</title>
  //       </head>
  //       <body>
  //         <h1>Details for ID: LI ELEMENT</h1>
  //         <p>Hello There</p>
  //       </body>
  //     </html>
  //   `);

  //     tab.document.close();
  //   }
  // }, []);
  
  return (
    <div>
      <h2>Name of the movie: {id}</h2>
    </div>
  );
}

export default DetailsPage
