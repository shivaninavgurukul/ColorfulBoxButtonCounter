import React from "react";
const Yellow_button = ({ onClick }) => {
	return (
		<div className="box2_col1_col">This is yellow area
            <button className="button" onClick={onClick}>yellow</button>
        </div>
	)
};
export default Yellow_button;



//**
//import Red_button from "./Red_button.js";
//import Green_button from "./Green_button.js";
//import Yellow_button from "./Yellow_button.js";
//import Blue_button from "./Blue_button.js";

/**const Button_box =({ handleButtonClick })=>{
	return (
		<div className="box2">
        	<div className="box2_col1">
          		<Red_button onClick={() => handleButtonClick("red")}/>
          		<Yellow_button onClick={() => handleButtonClick("yellow")}/>
        	</div>
        	<div className="box2_col2">
          		<Blue_button onClick={() => handleButtonClick("blue")}/>
          		<Green_button onClick={() => handleButtonClick("green")}/>
        	</div>
      	</div>
	);
};

export default Button_box;**/

