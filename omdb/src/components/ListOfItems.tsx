import React from "react";
import "./style.css";

interface Props {
  disable: boolean;
  // disableS: boolean,
  list: JSX.Element[];
  // series: JSX.Element[]
}

const ListOfItems = ({ disable, list }: Props) => {
  console.log("I am called.");

  return (
    <>
      {/* <div className="parent">
      <div className="child"> */}
      {/* {disableM ? <ul className="list-group">{movies}</ul> : <p></p>} */}
      {/* </div>
      <div className="child"> */}
      {/* {disableS ? <ul className="list-group">{series}</ul> : <p></p>} */}
      {/* </div>
    </div> */}

      {disable ? <ul className="list-group">{list}</ul> : <p></p>}
    </>
  );
};

export default ListOfItems;
