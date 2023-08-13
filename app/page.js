
"use client"
import React, { useState } from "react";
import "./globals.css";
import Box from "./Box.js";
import ButtonBox from "./Button_box.js";

const App = () => {
  const [counts, setBut_Counts] = useState({
    red: 0,
    blue: 0,
    yellow: 0,
    green: 0,
  });
  
  const [box_color, setBox_Color_c] = useState("");

  const handleButtonClick = (color) => {
    setBut_Counts((item) => ({
      ...item,
      [color]: item[color] + 1,
    }));

     setBox_Color_c(color);
  };

  return (
    <>
      <Box counts={counts} box_color={box_color} />
      <ButtonBox handleButtonClick={handleButtonClick} />
    </>
  );
};

export default App;




