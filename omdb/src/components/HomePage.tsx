import React, { useState, useEffect, useRef } from "react";

import "./style.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning" | "info" | "light";
  onClick: () => void;
}

const HomePage = ({ children, onClick, color = "light" }: Props) => {
  return (
    <div>
      <button className={"btn btn-"+ color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default HomePage;

  

// const [showComponent, setShowComponent] = useState(false);

  // const handleClick = () => {
  //   setShowComponent(true);
  // };

  // const handleButtonClick = () => {
  //   onClick(); // Call onClick function
  //   handleClick();
  // };


  //Listen outside buttons
  // const buttonRef = useRef<HTMLButtonElement>(null);
  // const handleClickOutside = (e: MouseEvent) => {
  //   if(buttonRef.current && !buttonRef.current.contains(e.target as Node)){
  //     console.log("The other button was clicked.");
  //   }
  // };


  // useEffect(() => {
  //   //Add eventListener
  //   document.addEventListener("click", handleClickOutside);

  //   //After unmounts clean the event
  //   return ()=>{
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);