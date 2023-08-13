import React from "react";

const Box = ({ counts, box_color }) => {
  return (
    <div className="box1">
      <div className="box1_col1" style={{ backgroundColor: box_color }}></div>
      <br />
      <br />
      <div className="count">
        <div>red : {counts.red}</div>
        <div>blue : {counts.blue}</div>
      </div>
      <div className="count c">
        <div>yellow : {counts.yellow}</div>
        <div>green : {counts.green}</div>
      </div>
    </div>
  );
};

export default Box;




