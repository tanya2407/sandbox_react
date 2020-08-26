import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//import '../App.css';

function Progressbar() {
  return (
    <div className="progressCard">
      <div className="barText">
        <h4>Accepted Candidates</h4>
        <h3> 45/</h3>
        <h6>177</h6>
      </div>

      <div className="bar">
        <CircularProgressbar
          value={65}
          text={`${65}%`}
          styles={buildStyles({
            pathColor: "#394989",
            textColor: "#394989",
            trailColor: "#a2d5f2",
            backgroundColor: "#e79c2a"
          })}
        />
      </div>
    </div>
  );
}

export default Progressbar;
//light purple: c3aed6
//purple : 3b2e5a
//yellow: e79c2a
