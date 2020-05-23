import React from "react";
import "./Graph.scss";
import Chart from "react-apexcharts";
import { CoranaConsumer } from "../../../Context";
// import Line from "./Line/Line";
const Graph = () => {
  return (
    <div className="mixed-chart">
      <CoranaConsumer>
        {(charts) => {
          return (
            <Chart
              className="graph"
              options={charts.options}
              series={charts.series}
              type="bar"
              width="1000"
              height="330"
            />
          );
        }}
      </CoranaConsumer>
    </div>
  );
};

export default Graph;
