import React from "react";
const Blue_button = ({ onClick }) => {
	return (
		<div className="box2_col1_col2">
          	This is blue area
           <button className="button" onClick={onClick}>blue</button>
       	</div>
	)
};
export default Blue_button;


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


