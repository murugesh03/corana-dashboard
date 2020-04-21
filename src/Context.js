import React, { createContext, useState, useEffect } from "react";
import CoranaData from "./Data";
import axios from "axios";
const CoranaContext = createContext();
const CoranaProvider = (props) => {
  const [corana, setCorana] = useState({
    deaths: "200",
    confirmed: "500",
    recovered: "200",
  });
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  var coranaData = [];
  var coranaCountries = Object.keys(coranaData);
  console.log(coranaCountries);
  useEffect(() => {
    var dataURI = "https://pomber.github.io/covid19/timeseries.json";
    axios.get(dataURI).then((data) => {
      coranaData = data.data;
      console.log(coranaData);
    });
    // .catch((e) => {
    //   console.log("error", e);
    // });
  }, []);

  return (
    <CoranaContext.Provider value={{ ...corana, ...chart }}>
      {props.children}
    </CoranaContext.Provider>
  );
};
const CoranaConsumer = CoranaContext.Consumer;
export { CoranaProvider, CoranaConsumer };
