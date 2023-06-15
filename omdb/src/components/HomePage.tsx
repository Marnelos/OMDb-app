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