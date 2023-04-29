import React from "react";
import "./StudentView.css";
import { Typography } from "@mui/material";
import graph from "../assets/graph.png";

const StudentView = () => {
  return (
    <>
      <Typography variant={"h4"} marginY={"-1%"} textAlign={"center"}>
        Journey Map
      </Typography>
      <div className="student__graph">
        <img src={graph} alt="" />
      </div>
    </>
  );
};
export default StudentView;
