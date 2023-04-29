import React from "react";
import "./StudentView.css";
import { Typography } from "@mui/material";
import "charts.css";
import graph from "../assets/graph.png";

const StudentView = () => {
  return (
    <>
      <div className="student__container">
        <div className="student__filter">
          <Typography>filters</Typography>
        </div>
        <div className="student__graph">
          <div>
            <img src={graph} classname="graph__photo" alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentView;
