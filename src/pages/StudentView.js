import React from "react";
import "./StudentView.css";
import { Typography } from "@mui/material";
import graph from "../assets/graph.png";

const StudentView = () => {
  return (
    <>
      <Typography variant={"h6"}>Journey Map</Typography>
      <div className="student__graph">
        <img src={graph} classname="graph__photo" alt="" />
      </div>
    </>
  );
};
export default StudentView;
