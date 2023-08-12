
import React, { useState } from "react";
import ButtonBox from "./Button_box.js";
const Box = () => {
  const [buttonCounts, setButtonCounts] = useState({
    red: 0,
    blue: 0,
    yellow: 0,
    green: 0,
  });
  
  const [box1Col1Color, setBox1Col1Color] = useState("");

  const handleButtonClick = (color) => {
    setButtonCounts((prevCounts) => ({
      ...prevCounts,
      [color]: prevCounts[color] + 1,
    }));
    
    if (color === "red") {
      setBox1Col1Color("red");
    }
    if (color ==="blue") {
    	setBox1Col1Color("blue");
    }
    if (color ==="yellow") {
    	setBox1Col1Color("yellow");
    }
    if (color ==="green") {
    	setBox1Col1Color("green");
    }
  };

  return (
    <div className="box1">
      <div className="box1_col1" style={{ backgroundColor: box1Col1Color }}></div>
      <br />
      <br />
      <div className="count">
        <div>red : {buttonCounts.red}</div>
        <div>blue : {buttonCounts.blue}</div>
      </div>
      <div className="count c">
        <div>yellow : {buttonCounts.yellow}</div>
        <div>green : {buttonCounts.green}</div>
      </div>
      <ButtonBox handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Box;



/**import React, { useState } from "react";
const Box = () => {
  return (
    <div className="box1">
      <div className="box1_col1" style={{ backgroundColor:white}}></div>
      <br />
      <br />
      <div className="count">
        <div>red : {buttonCounts.red}</div>
        <div>blue : {buttonCounts.blue}</div>
      </div>
      <div className="count c">
        <div>yellow : {buttonCounts.yellow}</div>
        <div>green : {buttonCounts.green}</div>
      </div>
    </div>
  );
};

export default Box;**/


