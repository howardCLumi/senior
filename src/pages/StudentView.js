import React from "react";
import "./StudentView.css";
import { Typography } from "@mui/material";
import "charts.css";

const StudentView = () => {
  return (
    <>
      <div className="student__container">
        <div className="student__filter">
          <Typography>filters</Typography>
        </div>
        <div className="student__graph">
          <table class="chart-css bar">
            <caption> 2016 Summer Olympics Medal Table </caption>

            <thead>
              <tr>
                <th scope="col"> Country </th>
                <th scope="col"> Gold </th>
                <th scope="col"> Silver </th>
                <th scope="col"> Bronze </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row"> USA </th>
                <td> 46 </td>
                <td> 37 </td>
                <td> 38 </td>
              </tr>
              <tr>
                <th scope="row"> GBR </th>
                <td> 27 </td>
                <td> 23 </td>
                <td> 17 </td>
              </tr>
              <tr>
                <th scope="row"> CHN </th>
                <td> 26 </td>
                <td> 18 </td>
                <td> 26 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StudentView;
